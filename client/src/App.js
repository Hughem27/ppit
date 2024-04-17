<<<<<<< HEAD
import {useState, useEffect} from "react"
import axios from "axios"

import InputTodoItem from "./InputTodoItem"
import DisplayTodoList from "./DisplayTodoList"
import OpenAIRequest from './openAIRequest';
=======
import Home from './Components/home';
import ClientList from "./Components/clientList";
>>>>>>> 64227ad245dcaa9c717a98274c66694ad216e96f


import "./App.css";

function App() {
   
    return (
        <div className="App">
            


            <Home></Home>
            <ClientList></ClientList>

        </div>
    );
}

export default App;

