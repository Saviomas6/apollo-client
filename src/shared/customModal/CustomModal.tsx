import React from "react";
import {
  ModalBody,
  ModalCloseIcon,
  ModalContent,
  ModalMessageContent,
} from "./CustomModal.style";
import close from "../../assets/close.svg";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";
interface I_CustomModal {
  loading: boolean;
  data: string;
  textContent: string;
  setModalOpen(value: boolean): void;
}

const CustomModal = ({
  loading,
  data,
  textContent,
  setModalOpen,
}: I_CustomModal) => {
  const navigate = useNavigate();
  return (
    <ModalBody>
      <ModalContent>
        {data && <ModalMessageContent>{textContent}</ModalMessageContent>}
        {loading && (
          <LoadingSpinner color="#000" innerSize="20" outerSize="50" />
        )}
        <ModalCloseIcon
          onClick={() => {
            setModalOpen(false);
            navigate("/");
          }}
        >
          <img src={close} alt="" />
        </ModalCloseIcon>
      </ModalContent>
    </ModalBody>
  );
};

export default CustomModal;
