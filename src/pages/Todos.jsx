import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { styled } from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Todo from "./Todo";
import { useMutation, useQueryClient } from "react-query";

function Todos() {
  // const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("todos");
  //   },
  // });

  const navigate = useNavigate();

  const [todos, setTodos] = useState(null);

  // 최초의 마운트됬을때 db로 부터 값을 가져오기위해 비동기 함수를 하나만든다.

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:4000/todos");
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // 삭제될때 alert
  const onRemove = () => {
    if (window.confirm("정말 삭제합니까?")) {
      alert("삭제되었습니다.");
    } else {
      alert("취소합니다.");
    }
  };

  // 삭제시
  const deleteBtnHandler = async (id) => {
    axios.delete(`http://localhost:4000/todos/${id}`);
    onRemove();
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
    navigate("/works");
  };
  return (
    <div>
      <Header />
      <TodosDiv>
        <TodoText>내 할일</TodoText>
        {todos?.map((item) => {
          return (
            <TodoDiv
              onClick={() => {
                navigate(`/work/${item.id}`);
              }}
              key={item.id}
            >
              <TitleDiv onClick={(e) => e.stopPropagation()}>
                <h4>{item.title}</h4>
                <button onClick={() => deleteBtnHandler(item.id)}>삭제</button>
              </TitleDiv>
              <WriterDiv>작성자 : {item.writer}</WriterDiv>
            </TodoDiv>
          );
        })}
      </TodosDiv>
    </div>
  );
}

export default Todos;

const TodosDiv = styled.div`
  margin-top: 40px;
  padding: 30px;
`;

const TodoText = styled.div`
  font-size: 20px;
  padding: 20px;
`;

const TodoDiv = styled.div`
  padding: 10px;
  height: 90px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  width: 100%;
  margin-bottom: 12px;
  cursor: pointer;
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
`;

const WriterDiv = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
  /* margin-top: 20px; */
`;
