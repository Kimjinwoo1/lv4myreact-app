import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { styled } from "styled-components";
import CustomBtn from "../components/CustomBtn";
import axios from "axios";
import { addTodo } from "../api/todos";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

function AddTodo() {
  const navigate = useNavigate();

  // 리엑트 쿼리 관련코드
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const [writerValue, setWriterValue] = useState({
    writer: "",
  });
  const [titleValue, setTitleValue] = useState({
    title: "",
  });

  const [content, setContentValue] = useState({
    contents: "",
  });

  const newTodo = {
    writer: writerValue.writer,
    title: titleValue.title,
    contents: content.contents,
  };

  const onSubmitHandler = async () => {
    // axios.post("http://localhost:4000/todos", newTodo);
    mutation.mutate(newTodo);
    navigate("/works");
    // axios.post("http://localhost:4000/todos", titleValue);
    // axios.post("http://localhost:4000/todos", content);
  };

  return (
    <ContainerDiv>
      <Header />
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          // 추가하기 버튼클릭시
          onSubmitHandler();
        }}
      >
        <AddTodoDiv>
          <div>작성자</div>
          <InputName
            type="text"
            placeholder="작성자의 이름을 입력해주세요(5자 이내)"
            value={writerValue.writer}
            onChange={(e) => {
              setWriterValue({
                writer: e.target.value,
              });
            }}
          ></InputName>
          <div>제목</div>
          <InputTitle
            placeholder="제목을 입력해주세요(50자 이내)"
            value={titleValue.title}
            onChange={(e) => {
              setTitleValue({
                title: e.target.value,
              });
            }}
          ></InputTitle>
          <div>내용</div>
          <InputContents
            placeholder="내용을 입력해주세요(200자 이내)"
            value={content.contents}
            onChange={(e) => {
              setContentValue({
                contents: e.target.value,
              });
            }}
          ></InputContents>
        </AddTodoDiv>
        <CustomBtn size="large">추가하기</CustomBtn>
      </Form>
    </ContainerDiv>
  );
}

export default AddTodo;

const ContainerDiv = styled.div``;

const AddTodoDiv = styled.div`
  margin-top: 40px;
  height: calc(90vh - 45px);
  /* direction: "column"; */
  /* align-items: "start"; */
  /* justify-content: "space-between"; */
`;

const Form = styled.form`
  padding: 20px;
  font-size: 20px;

  /* display: flex; */
  /* flex-direction: column;
  justify-content: "space-between";
  align-items: "start"; */
`;

const InputName = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 15px;
`;

const InputTitle = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 15px;
`;

const InputContents = styled.textarea`
  width: 100%;
  height: 250px;
  margin-top: 15px;
`;
