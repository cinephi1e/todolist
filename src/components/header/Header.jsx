import "./style.css";
import { useState, useRef } from "react";

export default function Header({ list, setList }) {
  //   console.log("Header - props의 list", list);

  const [date, setDate] = useState("");
  const [todo, setTodo] = useState("");

  // 리스트 추가
  const addList = () => {
    const newList = {
      id: list.length + 1,
      date: date,
      todo: todo,
      isDone: false,
    };

    if (date && todo) {
      setDate("");
      setTodo("");
      setList([...list, newList]);
    } else {
      alert("빠트린 내용이 없나 다시 한 번 확인해보세요.");
    }
  };

  return (
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
  );
}

// 빈칸일시 추가 불가 alert -> 빈칸 focusing
