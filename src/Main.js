import React, { Component, useState } from "react";
import { useHistory } from "react-router";

const App = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push("/hooks-tutorial")}>8장 Hooks</button>
      <button onClick={() => history.push("/styling-react")}>
        9장 컴포넌트 스타일링
      </button>
      <button onClick={() => history.push("/todo-app")}>
        10장 일정 관리 웹 어플리케이션 만들기
      </button>
    </div>
  );
};

export default App;
