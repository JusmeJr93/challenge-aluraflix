/* eslint-disable react/prop-types */
import styled from "styled-components";
import EditVideoForm from "../Form/EditVideoForm";

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  z-index: 1000;
  max-width: 600px;
  width: 100%;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #000;
`;

export default function EditVideoModal({ video, onClose, onSubmit }) {
  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <EditVideoForm
          initialData={video}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      </ModalContainer>
    </>
  );
}
