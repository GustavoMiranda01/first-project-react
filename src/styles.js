import styled from "styled-components";
import background from "./assets/background.svg";

export const Container = styled.div`
  background: url("${background}");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

 
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const H1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 80px;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  color: #eee;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  padding-left: 25px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  padding-left: 25px;
  margin-bottom: 35px;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.8);
  border: none;
  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: bold;
  /* flex-shrink: 0; */
  line-height: 28px;
  margin-top: 132px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
