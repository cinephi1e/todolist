import "../App.css";

export default function TodoList(props) {
  console.log(props);
  return (
    <div className="list">
      <span className="list-date">{props.todo.date}</span>
      {props.todo.todo}
      <button
        className="list-btn"
        onClick={() => props.handleDelete(props.todo.id)}
      >
        delete
      </button>
      <button
        className="list-btn"
        onClick={() => props.handleButton(props.todo.id)}
      >
        {props.todo.isDone ? "cancel" : "done"}
      </button>
    </div>
  );
}
