import { Link } from "react-router-dom";
import styled from "styled-components";
export const HeaderMainLayout = styled.div`
  height: 70px;
  width: 100%;
  color: #fff;
  position: sticky;
  top: 0px;
  background-color: #061a2a;
  z-index: 10;
`;
export const HeaderContainer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  @media screen and (max-width: 560px) {
    padding: 0 10px;
  }
`;
export const LogoHeading = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  @media screen and (max-width: 560px) {
    font-size: 18px;
  }
`;
export const AddProductButton = styled.button`
  height: 44px;
  width: 130px;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #54de62;
  font-weight: 600;
  color: #000;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 560px) {
    height: 34px;
    width: 100px;
    font-size: 14px;
  }
`;
export const RouteLink = styled(Link)`
  text-decoration: none;
`;
