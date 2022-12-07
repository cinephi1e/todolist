import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/Todolist";

const App = () => {
  const [list, setList] = useState([
    { id: 1, date: "2022/12/07", todo: "리액트 과제", isDone: true },
    {
      id: 2,
      date: "2022/12/06",
      todo: "인터파크 티켓팅",
      isDone: false,
    },
    { id: 3, date: "2022/12/07", todo: "리액트 심화", isDone: false },
    { id: 4, date: "2022/12/06", todo: "자바스크립트 과제", isDone: true },
  ]);

  const [date, setDate] = useState("");
  const [todo, setTodo] = useState("");

  const addList = () => {
    const newList = {
      id: list.length + 1,
      date: date,
      todo: todo,
      isDone: false,
    };

    setDate("");
    setTodo("");
    setList([...list, newList]);
  };

  const deleteList = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

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

  console.log("---------------투두리스트-------------");
  console.log(list);

  return (
    <div className="wrap">
      <div className="header">
        <h1 className="title">Todo-list</h1>
        <div className="input">
          <input
            className="input-date"
            value={date}
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className="input-add"
            value={todo}
            placeholder="Do your job!"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="input-btn" onClick={addList}>
            추가
          </button>
        </div>
      </div>
      <div className="contents">
        <div className="todo-list">
          {list.map((todo) => {
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
          {list.map((todo) => {
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
      <div className="footer">cinephile</div>
    </div>
  );
};

export default App;
