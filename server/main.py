from flask import Flask, request, jsonify, session
from flask_cors import CORS

from pymongo import MongoClient
from bson.objectid import ObjectId

from config import *

app = Flask(__name__)
CORS(app)

client = MongoClient(MONGODB_CONNECTION_STRING)
database = client[MONGODB_DATABASE_NAME]
items_collection = database[MONGODB_TODO_ITEMS_COLLECTION]

@app.get("/get_todo_items")
def get_todo_items():
    items_list = items_collection.find()
    items_list = [{"id": str(item["_id"]), "content": item["content"]} for item in items_list]

    return jsonify({
        "todoItems": items_list
    })

@app.post("/add_todo_item")
def add_todo_item():
    item_content = request.json["item_content"]
    _id = items_collection.insert_one({"content": item_content})

    return jsonify({
        "item_id": str(_id.inserted_id)
    })

@app.post("/delete_todo_item")
def delete_todo_item():
    item_id = request.json["item_id"]
    items_collection.delete_one({"_id": ObjectId(item_id)})
    return {}

####################################
import sys
import os
print("Current Working Directory:", os.getcwd())
sys.path.append('../client/src')  # Adjust based on your actual structure


from flask import Flask
import sys
import os

from chatbot import respond



app = Flask(__name__)
app.secret_key = 'your-secret-key'  # Needed to use sessions securely

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json['message']
    # Retrieve history from the session, or start a new one
    history = session.get('history', [])
    
    response, updated_history = respond(user_input, history)
    
    # Save the updated history back to the session
    session['history'] = updated_history

    return jsonify({"message": response})

if __name__ == '__main__':
    app.run(debug=True)
