import styled from "styled-components";

export const Container = styled.div`
  padding: 44px 180px 38px;
`;

export const Header = styled.div`
  align-items: center;
  background-color: #000cff;
  color: #ffffff;
  display: flex;
  height: 146px;
  justify-content: center;
  text-align: center;
  width: 100%;

  p {
    font-size: 25px;
  }
`;

export const Title = styled.div`
  font-size: 59px;
  line-height: 59px;
`;

export const Body = styled.div`
  margin-top: 144px;
  h1 {
    font-size: 77px;
    font-weight: 700;
  }

  h6 {
    font-size: 30px;
    line-height: 36px;
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  margin: 88px 38px 0 0;
  span {
    color: #000cff;
  }

  h2 {
    margin-top: 26px;
  }

  button {
    background-color: transparent;
    border: 2px solid #000cff;
    color: #000cff;
    margin-top: 80px;
    padding: 20px;
    font-size: 28px;
    font-weight: 700;
  }
`;

export const Card = styled.div`
  height: 335px;
  width: 335px;

  img {
    width: 100%;
  }
`;

export const Infos = styled.div`
  align-items: center;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  height: 375px;
  padding: 76px 0;
  width: 100%;

  h1 {
    color: #000cff;
    font-size: 58px;
  }

  p {
    font-size: 22px;
    line-height: 26px;
    margin-top: 28px;
  }

  div {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 70px;

  a {
    font-size: 20px;
    line-height: 26px;

    & + a {
      margin-left: 44px;
    }
  }

  p {
    font-size: 20px;
    line-height: 26px;
    margin-top: 30px;
  }
`;
