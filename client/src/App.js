import {useState, useEffect} from "react"
import axios from "axios"

import InputTodoItem from "./InputTodoItem"
import DisplayTodoList from "./DisplayTodoList"
import OpenAIRequest from './openAIRequest';


import configData from "./config.json"
import "./App.css";

function App() {
    const [todoList, setTodoList] = useState([]);

    // Get all todo items when the web page is opened
    useEffect(() => {
        axios.get(`${configData.API_URI}/get_todo_items`)
        .then((response) => {
            if (response.status === 200) {
                setTodoList(response.data.todoItems);
            }
        });
    }, []);

    // Add a todo item to the list and to the database
    const addTodoItem = (itemContent) => {
        if (itemContent !== "") {
            axios.post(`${configData.API_URI}/add_todo_item`, {item_content: itemContent})
                .then((response) => {
                    if (response.status === 200) {
                        setTodoList([...todoList, {"id": response.data.item_id, "content": itemContent}]);
                    }
                });
        }
    };

    // delete a todo item from the list and from the database
    const deleteTodoItem = (itemId) => {
        axios.post(`${configData.API_URI}/delete_todo_item`, {item_id: itemId})
            .then((response) => {
                if (response.status === 200) {
                    const newTodoList = todoList.filter((item) => {
                        return item.id !== itemId
                    });

                    setTodoList(newTodoList);
                }
            });
    };

    return (
        <div className="App">
            <h1>Well-being App</h1>

            <InputTodoItem onAddTodoItem={addTodoItem} />
            <DisplayTodoList todoList={todoList} onDeleteTodoItem={deleteTodoItem} />

            <div><OpenAIRequest/>
            </div>

        </div>
    );
}

export default App;
