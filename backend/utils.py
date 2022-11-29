from db_types import dict_types
import uuid


def processing_data(collection_name, raw_data):
    user_data = {}
    for key in dict_types[collection_name]:
        if key.name == dict_types[collection_name].id.name:
            user_data[key.name] = str(uuid.uuid4())
        else:
            user_data[key.name] = raw_data[key.name] if (key.name in raw_data) else ''
    return user_data
