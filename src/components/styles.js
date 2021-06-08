import styled from "styled-components";

export const Btn = styled.button`
    background-color: ${(props) => (props.blue ? "#000cff" : "transparent")};
    border: 2px solid #000cff;
    color: ${(props) => (props.blue ? "#ffffff" : "#000cff")};
    font-size: 28px;
    font-weight: bolder;
    line-height: 34px;
    margin-top: 26px;
    padding: 20px;

    & + button {
      margin-left: 34px;
    }
  }
  `;
