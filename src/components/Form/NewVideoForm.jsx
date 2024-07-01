/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styled from "styled-components";
import VideoContext from "../../context/VideoContext";

// Styled-components para el estilo del formulario
const FormGroup = styled.div`
  margin-bottom: 15px;
  width: 100%;
  max-width: 600px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #fff;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #262626;
  border-radius: 5px;
  background: #262626;
  color: #fff;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #262626;
  border-radius: 5px;
  background: #262626;
  color: #fff;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #262626;
  border-radius: 5px;
  resize: none;
  background: #262626;
  color: #fff;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #2271d1;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff0000;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
`;

const FormContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  form {
    width: 100%;
    margin: 0 20%;
  }
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
