import styled from "styled-components";
export const ModalBody = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000000 !important;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(15px);
  overflow: hidden;
`;
export const ModalContent = styled.div`
  min-height: 200px;
  width: 400px;
  background-color: #beecfa;
  color: #000;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 560px) {
    width: 280px;
  }
`;
export const ModalCloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
export const ModalMessageContent = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #000;
  @media screen and (max-width: 560px) {
    font-size: 18px;
  }
`;
