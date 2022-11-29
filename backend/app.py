import flask
from flask import Flask, request
from flask_cors import CORS
from database_processing import *

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    init_database()
    return "Backend has started!"


@app.route('/database', methods=["GET", "POST"])
def request_database():
    print("database endpoint reached...")
    if request.method == "GET":
        return get_database()
    if request.method == "POST":
        received_data = request.get_json()
        print(f"received data: {received_data}")
        add_to_database(received_data['data'])
        message = received_data['data']
        return_data = {
            "status": "success",
            "message": f"received: {message}"
        }
        return flask.Response(response=json.dumps(return_data), status=201)

@app.route("/<collection>", methods=["GET", "POST"])
def request_collection(collection):
    print(f"{collection} endpoint reached...")
    if request.method == "GET":
        return get_collection(collection)

@app.route("/add_<collection>", methods=["GET", "POST"])
def request_add_collection(collection):
    print(f"add-{collection} endpoint reached...")
    if request.method == "POST":
        received_data = request.get_json()
        print(f"received data: {received_data}")
        add_to_collection(collection, received_data['data'])
        message = received_data['data']
        return_data = {
            "status": "success",
            "message": f"received: {message}"
        }
        return flask.Response(response=json.dumps(return_data), status=201)

@app.route("/remove_<collection>", methods=["GET", "POST"])
def request_remove_collection(collection):
    print(f"remove-{collection} endpoint reached...")
    if request.method == "POST":
        received_data = request.get_json()
        print(f"received data: {received_data}")
        remove_from_collection(collection, received_data['id'])
        message = received_data
        return_data = {
            "status": "success",
            "message": f"received: {message}"
        }
        return flask.Response(response=json.dumps(return_data), status=201)

if __name__ == "__main__":
    app.run("localhost", port=6969, threaded=False)
