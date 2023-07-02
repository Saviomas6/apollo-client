import { Field } from "formik";
import styled, { keyframes } from "styled-components";

export const Container = styled.div<any>`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding-right: var(1.5rem, 0.75rem);
  padding-left: var(1.5rem, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  padding: 0 10px;
  @media (min-width: 576px) {
    max-width: 90%;
  }
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 992px) {
    max-width: 90%;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const DetailCardMainLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  @media screen and (max-width: 560px) {
    padding: 10px;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }
`;

const opacityAnimation = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const OpacityAnimation = styled.div<any>`
  animation: ${opacityAnimation} 1.5s;
`;

export const AddProductMainContainer = styled.div`
  padding: 0 20px;
`;
export const AddProductHeader = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  margin: 25px 0;
  @media screen and (max-width: 560px) {
    font-size: 20px;
  }
`;

export const AddProductFormContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 560px) {
    width: 85%;
  }
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  margin: 15px 0;
  @media screen and (max-width: 560px) {
    font-size: 16px;
  }
`;

export const InputField = styled(Field)`
  display: block;
  height: 44px;
  width: 95.4%;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #f6f6f6;
  color: #000;
  padding: 0px 26px;
  font-size: 18px;
  font-weight: 500;
  ::placeholder {
    color: #808080;
  }
  @media screen and (max-width: 560px) {
    height: 34px;
  }
`;
export const AddProductButtonWrapper = styled.div`
  margin: 30px 0 40px 0;
`;

export const AddProductButton = styled.button<any>`
  height: 44px;
  width: 150px;
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
  :disabled {
    opacity: 0.5;
  }
  @media screen and (max-width: 560px) {
    height: 34px;
    width: 130px;
  }
`;
