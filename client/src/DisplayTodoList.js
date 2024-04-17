import "./App.css";

function DisplayTodoList({ todoList, onDeleteTodoItem }) {
    return (
      <div className="todo-list-container">
        
        {todoList.length > 0 ? (
          <ul className="todo-list">
            {todoList.map((item) => (
              <li key={item.id} className="todo-item">
                <span>{item.content}</span>
                <button
                  className="delete-button"
                  onClick={() => onDeleteTodoItem(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-tasks">No tasks found</p>
        )}
      </div>
    );
  }
  
  export default DisplayTodoList;
  