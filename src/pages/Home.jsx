import React from "react";
import Header from "../components/Header";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <Header />
      <HomeDiv>
        <FontSize>무엇을 할까요?</FontSize>
        <RecordsDiv
          onClick={() => {
            navigate("/work/add");
          }}
        >
          <div>할일 기록하기</div>
        </RecordsDiv>
        <RecordsDiv
          onClick={() => {
            navigate("/works");
          }}
        >
          <div>TODO LIST</div>
        </RecordsDiv>
      </HomeDiv>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  padding: 24px;
`;

const HomeDiv = styled.div`
  margin-top: 40px;
`;

const FontSize = styled.div`
  font-size: 20px;
  padding: 20px;
`;

const RecordsDiv = styled.div`
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  margin: 20px;
  font-size: 20px;
  cursor: pointer;
`;
