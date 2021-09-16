import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 512px;

  //width 가 주어진 상태에서 좌우 중앙 정렬
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;

  border-radius: 4px;
  overflow: hidden;

  .app-title {
    background: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    background: white;
  }
`;

const TodoTemplate = ({ children }) => {
  return (
    <Wrapper>
      <div className="app-title">Managing Plans</div>
      <div className="content">{children}</div>
    </Wrapper>
  );
};

export default TodoTemplate;
