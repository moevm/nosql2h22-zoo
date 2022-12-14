import flask
from flask import Flask, request, make_response
from flask_cors import CORS
import json
from database_processing import *
from utils import *

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    init_database()
    return "Backend has started!"


@app.route('/database', methods=["GET"])
def request_database():
    print("database endpoint reached...")
    if request.method == "GET":
        return get_database()


@app.route("/<collection>", methods=["GET", "POST"])
def request_collection(collection):
    print(f"{collection} endpoint reached...")
    if request.method == "GET":
        return get_collection(collection)


@app.route("/add/<collection>", methods=["POST"])
def request_add_collection(collection):
    print(f"add-{collection} endpoint reached...")
    if request.method == "POST":
        received_data = processing_data(collection, request.get_json())
        print(f"received data: {received_data}")
        add_to_collection(collection, received_data)
        message = received_data
        return_data = {
            "status": "success",
            "message": f"received: {message}"
        }
        return flask.Response(response=json.dumps(return_data), status=201)


@app.route("/remove/<collection>", methods=["GET", "POST"])
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


@app.route("/login", methods=["POST"])
def request_login():
    print(f"login user")
    if request.method == "POST":
        received_data = request.get_json()
        print(f"received data: {received_data}")
        user = find_user_by_username_password(received_data)

        if user is None:
            return_data = {
                "status": "error",
                "message": "Login or password invalid"
            }
            return flask.Response(response=json.dumps(return_data), status=401)

        return_data = {
            "status": "success",
            "id": user["id"],
            "role": user["role"]
        }
        return flask.Response(response=json.dumps(return_data), status=200)


if __name__ == "__main__":
    app.run("localhost", port=6969, threaded=False)
