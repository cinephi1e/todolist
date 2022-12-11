import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./components/header/Header";
import Contents from "./components/contents/Contents";
import Footer from "./components/footer/Footer";

const App = () => {
  // 리스트
  const [list, setList] = useState(initialList);

  return (
    <div className="wrap">
      <Header list={list} setList={setList} />
      <div className="list-contents">
        <Contents list={list} setList={setList} name="working" />
        <Contents list={list} setList={setList} name="done" />
      </div>
      <Footer />
    </div>
  );
};

// 초기 list 데이터
const initialList = [
  { id: uuid(), date: "2022/12/07", todo: "리액트 과제", isDone: true },
  { id: uuid(), date: "2022/12/06", todo: "티켓팅", isDone: false },
  { id: uuid(), date: "2022/12/07", todo: "리액트 심화", isDone: false },
  { id: uuid(), date: "2022/12/06", todo: "자바스크립트 과제", isDone: true },
];

export default App;

// 화면 렌더링 기준 : props, state
// 구조분해할당 : 객체, 배열에서 모두 가능
// 사용자가 작성한 jsx 코드 렌더링 -> return에서 렌더링
// <Form> 태그 안에 있는 <button>을 클릭하면 <Form>의 onSubmit이 실행된다.
// prevent.Default(); 자동 새로고침 방지
// trim() 앞뒤에 공백이 있을 때 공백 자동 제거
