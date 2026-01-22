function TodoList({ todos, toggleTodo, removeTodo }) {
    return (
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
  
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevents toggle when deleting
                removeTodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TodoList;
  