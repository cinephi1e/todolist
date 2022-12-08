import "./style.css";
import TodoList from "./Todolist";

export default function Contents({ list, setList }) {
  console.log("Contents - list", list);

  // 리스트 delete 버튼
  const deleteList = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    window.confirm("정말 삭제하시겠습니까?")
      ? setList(newList)
      : list.map(() => {});
  };

  // 리스트 done/cancel 버튼
  const listButton = (id) => {
    const doneList = list.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setList(doneList);
  };

  return (
    <div className="contents">
      <div className="todo-list">
        {list.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoList
                todo={todo}
                id={todo.id}
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
        {list.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoList
                todo={todo}
                id={todo.id}
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
