import { useContext, useState } from "react";
import styled from "styled-components";
import VideoContext from "../context/VideoContext";
import NewVideoForm from "../components/Form/NewVideoForm";
import { v4 as uuidv4 } from "uuid";

const VideoFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 20px;
  background-color: #333;
  color: #fff;
  width: 100%;
`;

const FormHeader = styled.div`
  text-align: center;
  width: 50%;
`;

export default function NewVideo() {
  const { addVideo } = useContext(VideoContext);
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = (videoData) => {
    addVideo({ ...videoData, id: uuidv4() });
    setFormKey((prevKey) => prevKey + 1); // Cambiar la clave del formulario para reiniciarlo
  };

  return (
    <VideoFormContainer>
      <FormHeader>
        <h1>Nuevo Video</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </FormHeader>
      <NewVideoForm key={formKey} onSubmit={handleSubmit} />
    </VideoFormContainer>
  );
}
