/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from "react";
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
  border: 1px solid #6bd1ff;
  border-radius: 10px;
  background: #03122f;
  color: #fff;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #6bd1ff;
  border-radius: 10px;
  background: #03122f;
  color: #fff;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border: 1px solid #6bd1ff;
  border-radius: 10px;
  background: #03122f;
  resize: none;
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

const StyledForm = styled.form`
  /* position: relative; */
  width: 100%;
  max-width: 550px;
  padding: 20px;
  background-color: #03122f;
  /* border-radius: 10px; */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
`;

const EditVideoForm = ({ initialData = {}, onSubmit }) => {
  const { categories } = useContext(VideoContext);
  const [category, setCategory] = useState(initialData.category || "");
  const [titulo, setTitulo] = useState(initialData.titulo || "");
  const [img, setImg] = useState(initialData.img || "");
  const [videoUrl, setVideoUrl] = useState(initialData.video || "");
  const [descripcion, setDescripcion] = useState(initialData.descripcion || "");

  useEffect(() => {
    setCategory(initialData.category || "");
    setTitulo(initialData.titulo || "");
    setImg(initialData.img || "");
    setVideoUrl(initialData.video || "");
    setDescripcion(initialData.descripcion || "");
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...initialData,
      titulo,
      img,
      video: videoUrl,
      descripcion,
      category,
    });
  };

  const handleClear = () => {
    setCategory("");
    setTitulo("");
    setImg("");
    setVideoUrl("");
    setDescripcion("");
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
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
      </StyledForm>
    </>
  );
};

export default EditVideoForm;
