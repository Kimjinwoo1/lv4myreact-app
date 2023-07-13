import React, { useEffect } from "react";
import Header from "../components/Header";
import { styled } from "styled-components";
import { getTodos } from "../api/todos";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import CustomBtn from "../components/CustomBtn";

function Todo() {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return <h1>로딩중 ...</h1>;
  }

  if (isError) {
    return <h1>오류가 발생했습니다.</h1>;
  }

  return (
    <div>
      <Header />
      <TodoDiv>
        {data
          .filter((item) => id == item.id)
          .map((todo) => {
            return (
              <div key={todo.id}>
                <TitleDiv>
                  <h4>id : {todo.id}</h4>
                  <Link to="/works">이전으로</Link>
                </TitleDiv>
                <div>
                  <h2>{todo.title}</h2>
                  <ContentsDiv>
                    <div>{todo.contents}</div>
                  </ContentsDiv>
                </div>
                <CustomBtn size="large">수정</CustomBtn>
              </div>
            );
          })}
      </TodoDiv>
    </div>
  );
}

export default Todo;

const TodoDiv = styled.div`
  margin-top: 40px;
  height: calc(100vh - 40px);
  padding: 24px;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 30px;
`;
const ContentsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 50px;
  min-height: 550px;
`;
