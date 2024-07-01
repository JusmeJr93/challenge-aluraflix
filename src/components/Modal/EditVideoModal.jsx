/* eslint-disable react/prop-types */
import styled from "styled-components";
import EditVideoForm from "../Form/EditVideoForm";

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #03122f;
  padding: 20px;
  border-radius: 15px;
  border: 5px solid #6bd1ff;
  z-index: 1000;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  color: #fff;
`;

const ModalTitle = styled.h1`
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
`;

const ModalSubtitle = styled.p`
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`;

export default function EditVideoModal({ video, onClose, onSubmit }) {
  return (
    <>
      <Overlay onClick={onClose} />

      <ModalContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalTitle>Editar Video</ModalTitle>
        <ModalSubtitle>Modifica los campos necesarios</ModalSubtitle>
        <EditVideoForm
          initialData={video}
          onSubmit={onSubmit}
          onClose={onClose}
        />
      </ModalContainer>
    </>
  );
}
