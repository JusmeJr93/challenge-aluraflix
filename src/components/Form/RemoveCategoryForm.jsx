/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
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

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioButton = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #00c86f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e62e16;
  }
`;

const RemoveCategoryForm = ({ onClose }) => {
  const { categories, removeCategory } = useContext(VideoContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleRemove = (e) => {
    e.preventDefault();
    removeCategory(selectedCategory);
    onClose();
  };

  return (
    <FormContainer>
      <form onSubmit={handleRemove}>
        <FormGroup>
          <Label>Selecciona una categoría para eliminar:</Label>
          <RadioGroup>
            {categories.map((category) => (
              <Label key={category.category}>
                <RadioButton
                  type="radio"
                  value={category.category}
                  checked={selectedCategory === category.category}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                />
                {category.category}
              </Label>
            ))}
          </RadioGroup>
        </FormGroup>

        <SubmitButton type="submit">Eliminar</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default RemoveCategoryForm;
