import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Header() {
  const navigate = useNavigate();

  return (
    <StContainer>
      <StHeader>
        <Icon
          onClick={() => {
            navigate("/");
          }}
        >
          아이콘
        </Icon>
        <StTitle>모두의 투두리스트</StTitle>
      </StHeader>
    </StContainer>
  );
}

export default Header;

const StContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const Icon = styled.div`
  font-size: 24px;
  color: black;
  cursor: pointer;
`;

const StTitle = styled.div`
  font-size: 24px;
  color: black;
`;

const StHeader = styled.div`
  border: 1px solid #ddd;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
