from pymemcache.client import base
from enum import Enum
import json
from six import ensure_str

##client = base.Client(("127.0.0.1", 11211), serializer=json_serializer, deserializer=json_deserializer)
# server parameter of base.client is held as a tuple (host, port)
client = base.Client(("127.0.0.1", 11211))

class Types(Enum):
    ticket = 0
    timetable = 1
    employee = 2
    animal = 3
    schedule = 4

database = {"tickets" : {}, "timetables" : {}, "employees" : {}, "animals" : {}, "schedules": {} }

def get_value(key):
    return client.get(key).decode('utf8')

def set_value(key, value):
    return client.set(key, value)

def get_keys_dict():
    keys = {}
    try:
        items = client.stats('items').items()
    except Exception:#due to the mismatch of the versions, an error appears with the response from memcached
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

def import_database_to_memcached():
    global database
    for collection_key in database.keys():
        for item_key in database[collection_key]:
            set_value(item_key, json.dumps(database[collection_key][item_key], ensure_ascii=False).encode("utf-8"))

def export_database_from_memcached():
    keys = get_keys_dict()
    data = {}
    for key in keys.keys():
        item = get_value(key)
        data[key] = json.loads(item)
    return data

def import_database_to_file(data):
    with open("C:\\Users\\User\\Downloads\\basic-web-app-tutorial-main\\backend\\database.json", "w", encoding='utf-8') as f:
        f.write(json.dumps(data, ensure_ascii=False))
        return

def export_database_from_file():
    with open("C:\\Users\\User\\Downloads\\basic-web-app-tutorial-main\\backend\\database.json", "r", encoding='utf-8') as f:
        return json.load(f)

def parse_database(json_data_dict):
    for key in json_data_dict.keys():
        for t in Types:
            if t.name in key:
                parse_to_collection(key, json_data_dict[key], t)

def parse_to_collection(key, value, t):
    global database
    match t:
        case Types.ticket:
            database["tickets"][key] = {
                "date": value["date"],
                "FIO": value["FIO"],
                "price": value["price"]
            }
        case Types.timetable:
            database["timetables"][key] = {
                'day': value['day'],
                "from": value["from"],
                "to": value["to"]
            }
        case Types.employee:
            database["employees"][key] = {
                "FIO": value["FIO"],
                "position": value["position"]
            }
        case Types.animal:
            database["animals"][key] = {
                "name": value["name"],
                "kind": value["kind"],
                "gender": value["gender"],
                "aviary": value["aviary"]
            }
        case Types.schedule:
            database["schedules"][key] = {
                "id_employee": value["id_employee"],
                "id_timetable": value["id_timetable"],
                "id_animal": value["id_animal"]
            }
        case _:  # Аналогично default в других языках
            print(f"Error key: {key} value: {value!r} invalid key!")

def serialize_database():
    global database
    data = {}
    for collection_key in database.keys():
        for item_key in database[collection_key].keys():
            item = database[collection_key][item_key]
            data[item_key] = item
    return json.dumps(data, ensure_ascii=False)

def do_stuff():
    global database
    data = export_database_from_file()
    parse_database(data)
    import_database_to_memcached()
    database = {"tickets": {}, "timetables": {}, "employees": {}, "animals": {}, "schedules": {}}
    data = export_database_from_memcached()
    parse_database(data)
    return json.dumps(database, ensure_ascii=False)