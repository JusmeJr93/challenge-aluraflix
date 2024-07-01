/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styled from "styled-components";
import VideoContext from "../../context/VideoContext";

// Styled-components para el estilo del formulario
const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #fff;
  font-weight: bold;
`;

const StyledSelect = styled.select`
  width: 95%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f0f0f0;
  color: #333;

  option {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  width: 95%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f0f0f0;
  color: #333;
`;

const StyledTextArea = styled.textarea`
  width: 95%;
  min-height: 80px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  background: #f0f0f0;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ClearButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: #ff0000;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #1c1c1c;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const NewVideoForm = ({ onSubmit }) => {
  const { categories } = useContext(VideoContext);
  const [category, setCategory] = useState("");
  const [titulo, setTitulo] = useState("");
  const [img, setImg] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ titulo, img, video: videoUrl, descripcion, category });
  };

  const handleClear = () => {
    setCategory("");
    setTitulo("");
    setImg("");
    setVideoUrl("");
    setDescripcion("");
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <StyledLabel htmlFor="category">Categoria</StyledLabel>
          <StyledSelect
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" hidden>
              Seleccione una categoría
            </option>
            {categories.map((categoryObj, index) => (
              <option key={index} value={categoryObj.category}>
                {categoryObj.category}
              </option>
            ))}
          </StyledSelect>
        </FormGroup>

        <FormGroup>
          <StyledLabel htmlFor="titulo">Título</StyledLabel>
          <StyledInput
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ingrese el título"
            required
          />
        </FormGroup>

        <FormGroup>
          <StyledLabel htmlFor="image">Imagen</StyledLabel>
          <StyledInput
            type="text"
            id="image"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="Ingrese el enlace de la imagen"
            required
          />
        </FormGroup>

        <FormGroup>
          <StyledLabel htmlFor="video">Video</StyledLabel>
          <StyledInput
            type="text"
            id="video"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Ingrese el enlace del video"
            required
          />
        </FormGroup>

        <FormGroup>
          <StyledLabel htmlFor="description">Descripción</StyledLabel>
          <StyledTextArea
            id="description"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="¿De qué se trata este vídeo?"
            required
          />
        </FormGroup>

        <ButtonGroup>
          <StyledButton type="submit">Guardar</StyledButton>
          <ClearButton type="button" onClick={handleClear}>
            Limpiar
          </ClearButton>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};

export default NewVideoForm;
