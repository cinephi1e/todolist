import "./style.css";
import styled from "styled-components";
import TodoList from "./Todolist";

export default function Contents({ list, setList, name }) {
  const component = name === "working" ? true : false;

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
    <>
      {list
        .filter((todo) => component === !todo.isDone)
        .map((todo) => {
          return (
            <TodoList
              todo={todo}
              id={todo.id}
              isDone={todo.isDone}
              handleDelete={deleteList}
              handleButton={listButton}
            />
          );
        })}
    </>
  );
}
