from pymemcache.client import base
from db_types import EntityTypes
import json
import os


def json_serializer(key, value):
    if type(value) == str:
        return value.encode('utf-8'), 1
    return json.dumps(value, ensure_ascii=False).encode('utf-8'), 2


def json_deserializer(key, value, flags):
    if flags == 1:
        return value.decode('utf-8')
    if flags == 2:
        return json.loads(value.decode('utf-8'))
    raise Exception("Unknown serialization format")


client = base.Client(("127.0.0.1", 11211), serializer=json_serializer, deserializer=json_deserializer)


def get_value(key):
    try:
        data = client.get(key)
    except Exception:  # due to the mismatch of the versions, an error appears with the response from memcached
        data = client.get(key)
    return data


def get_many(keys):
    try:
        data = client.get_many(keys)
    except Exception:  # due to the mismatch of the versions, an error appears with the response from memcached
        data = client.get_many(keys)
    return data


def set_value(key, value):
    return client.set(key, value)


def set_many(json_data):
    return client.set_many(json_data)


def import_database_to_file(data):
    with open(os.path.dirname(os.path.abspath(__file__)) + "\\database.json", "w", encoding='utf-8') as f:
        f.write(json.dumps(data, ensure_ascii=False))
        return


def export_database_from_file():
    with open(os.path.dirname(os.path.abspath(__file__)) + "\\database.json", "r", encoding='utf-8') as f:
        return json.load(f)


def get_database():
    return get_many([key.name for key in EntityTypes])


def get_collection(key):
    return json.dumps(get_value(key), ensure_ascii=False)


def add_to_collection(collection_name, data):
    collection = get_value(collection_name)
    collection.append(data)
    add_to_database({collection_name: collection})


def add_to_database(data):
    if type(data) == str:
        data = json.loads(data.encode('utf-8'))

    items = {}
    for key in EntityTypes:
        collection = get_value(key.name)
        if key.name in data:
            items[key.name] = data[key.name]
        elif collection is None:
            items[key.name] = []
        else:
            items[key.name] = collection

    set_many(items)


def have_same_ids(data, collection):
    data_ids = [item["id"] for item in data]
    collection_ids = [item["id"] for item in collection]
    for data_id in data_ids:
        if data_id in collection_ids:
            return True
    return False


def remove_from_collection(collection_name, id):
    collection = get_value(collection_name)
    for item in collection:
        if str(item["id"]) == id:
            print("removed item ", item)
            collection.remove(item)
            set_value(collection_name, collection)
            return


def init_database():
    data = export_database_from_file()
    add_to_database(data)
    database = get_database()
    print("init database: ", database)
