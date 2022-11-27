from pymemcache.client import base
from enum import Enum
import json
import os
from six import ensure_str


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


def set_value(key, value):
    return client.set(key, value)


def set_many(json_data):
    return client.set_many(json_data)


def get_many(keys):
    return client.get_many(keys)


def get_keys_dict():
    keys = {}
    try:
        items = client.stats('items').items()
    except Exception:  # due to the mismatch of the versions, an error appears with the response from memcached
        items = client.stats('items').items()
        print(items)
    for key, val in items:
        _, slab, field = ensure_str(key).split(':')
        if field != 'number' or val == 0:
            continue
        item_request = client.stats('cachedump', slab, str(val + 10))
        for record, details in item_request.items():
            keys[ensure_str(record)] = ensure_str(details)
    return keys


class Types(Enum):#for exeptions
    ticket = 0
    timetable = 1
    employee = 2
    animal = 3
    schedule = 4


def import_database_to_file(data):
    with open(os.path.dirname(os.path.abspath(__file__)) + "\\database.json", "w", encoding='utf-8') as f:
        f.write(json.dumps(data, ensure_ascii=False))
        return


def export_database_from_file():
    with open(os.path.dirname(os.path.abspath(__file__)) + "\\database.json", "r", encoding='utf-8') as f:
        return json.load(f)


def get_database():
    return get_many(get_keys_dict().keys())

def add_to_database(data):
    set_many(data)

def init_database():
    data = export_database_from_file()
    add_to_database(data)
    database = get_database()
    # set_value("ticket1", {"date": "2022-11-24", "FIO": "Пя Сон Хва", "price": "100"})
    # value = get_value("ticket1")
    print("init database: ", database)