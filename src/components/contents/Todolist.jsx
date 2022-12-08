import "./style.css";

export default function TodoList({ todo, id, handleDelete, handleButton }) {
  // console.log("Todolist");
  // console.log("todo", todo);

  return (
    <div className="list">
      <span className="list-date">{todo.date}</span>
      {todo.todo}

      <button className="list-btn" onClick={() => handleDelete(id)}>
        delete
      </button>

      <button className="list-btn" onClick={() => handleButton(id)}>
        {todo.isDone ? "cancel" : "done"}
      </button>
    </div>
  );
}
