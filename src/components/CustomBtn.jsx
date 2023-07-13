import React from "react";
import { css, styled } from "styled-components";

function CustomBtn(props) {
  return (
    <>
      <Button {...props} disabled={props.disabled}>
        {props.children}
      </Button>
    </>
  );
}

export default CustomBtn;

const Button = styled.button`
  border: 3px solid #eee;
  background-color: #fff;
  height: 40px;
  cursor: pointer;
  background-color: ${({ bgColor, disabled }) => (disabled ? "#ddd" : bgColor)};
  align-items: end;
  justify-content: center;
  flex-direction: row;

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          width: 100%;
        `;
    }
  }}
`;
