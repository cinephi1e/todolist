import "./style.css";

export default function TodoList(props) {
  // console.log("Todolist - props", props["todo"]);

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

// props - 구조분해할당 해서 사용하기
