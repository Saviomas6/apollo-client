import { Link } from "react-router-dom";
import styled from "styled-components";

export const DetailCardContainer = styled.div`
  height: 300px;
  background-color: #beecfa;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: transform 450ms;
  :hover {
    transform: scale(1.03);
  }
`;

export const DetailCardText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #000;
  margin: 10px 0;
  @media screen and (max-width: 560px) {
    font-size: 18px;
  }
`;

export const DetailCardButtonWrapper = styled.div<any>`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Button = styled.button<any>`
  height: 44px;
  width: 130px;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => props.bgColor};
  font-weight: 600;
  color: ${(props) => props.color};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 560px) {
    height: 34px;
    width: 100px;
  }
`;
export const RedirectLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #000;
`;
