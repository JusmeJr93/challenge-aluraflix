/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import VideoContext from "../../context/VideoContext";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #262626;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 550px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
`;

const Label = styled.label`
  color: #fff;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #00c86f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #00a558;
  }
`;

const AddCategoryForm = ({ onClose }) => {
  const { addCategory } = useContext(VideoContext);
  const [categoryName, setCategoryName] = useState("");
  const [bgColor, setBgColor] = useState("#14f0c4");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = { category: categoryName, bgColor };
    addCategory(newCategory);
    onClose();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nombre de la categoría:</Label>
          <Input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Color de fondo:</Label>
          <Input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            style={{ height: "2rem", padding: "2px" }}
          />
        </FormGroup>

        <SubmitButton type="submit">Agregar</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default AddCategoryForm;
