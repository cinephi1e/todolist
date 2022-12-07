import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Contents from "./components/contents/Contents";
import Footer from "./components/footer/Footer";

const App = () => {
  // console.log("App - list", list);

  // 리스트
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

  return (
    <div className="wrap">
      <Header props={list} setList={setList} />
      <Contents props={list} setList={setList} />
      <Footer />
    </div>
  );
};

export default App;

// 화면 렌더링 기준 : props, state
