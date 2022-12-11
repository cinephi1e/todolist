import "./style.css";

export default function TodoList({
  todo,
  id,
  isDone,
  handleDelete,
  handleButton,
}) {
  return (
    <div className="list">
      {isDone ? (
        <div className="done-list">
          <span className="list-date">{todo.date}</span>
          {todo.todo}
        </div>
      ) : (
        <div className="todo-list">
          <span className="list-date">{todo.date}</span>
          {todo.todo}
        </div>
      )}
      <button className="list-btn" onClick={() => handleButton(id)}>
        {isDone ? "cancel" : "done"}
      </button>
      <button className="list-btn" onClick={() => handleDelete(id)}>
        delete
      </button>
    </div>
  );
}
