import "./style.css";
import TodoList from "./Todolist";

export default function Contents(props) {
  //   console.log("Contents - props", props);
  //   console.log("Contents - props.list", props["props"]);

  // 리스트 delete 버튼
  const deleteList = (id) => {
    const newList = props["props"].filter((todo) => todo.id !== id);
    props.setList(newList);
  };

  // 리스트 done/cancel 버튼
  const listButton = (id) => {
    const doneList = props["props"].map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    props.setList(doneList);
  };

  return (
    <div className="contents">
      <div className="todo-list">
        {props["props"].map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoList
                todo={todo}
                key={todo.id}
                handleDelete={deleteList}
                handleButton={listButton}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="done-list">
        {props["props"].map((todo) => {
          if (todo.isDone) {
            return (
              <TodoList
                todo={todo}
                key={todo.id}
                handleDelete={deleteList}
                handleButton={listButton}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

// 리스트 중복 코드 제거
// 삭제, 취소 전 alert
