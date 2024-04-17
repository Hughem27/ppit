import {useState} from "react"

function InputTodoItem({onAddTodoItem}) {
    const [itemContent, setItemContent] = useState("");

    return (
        <div className="input-wrapper">
            <input 
                type="text"
                name="todoItem"
                placeholder="Create a new todo item"
                value={itemContent}
                onChange={(e) => {
                    setItemContent(e.target.value)
                }}
            />

            <button 
                className="add-button" 
                onClick={(e) => {
                    onAddTodoItem(itemContent);
                    setItemContent("");
            }}>Add</button>
        </div>
    )
}

export default InputTodoItem;