import { useContext, useState } from "react";
import styled from "styled-components";
import VideoContext from "../context/VideoContext";
import NewVideoForm from "../components/Form/NewVideoForm";
import { v4 as uuidv4 } from "uuid";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #121212;
`;

const PageTitle = styled.h1`
  color: #fff;
  margin-bottom: 10px;
`;

const PageSubtitle = styled.p`
  color: #fff;
  margin-bottom: 40px;
`;

export default function NewVideo() {
  const { addVideo } = useContext(VideoContext);
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = (videoData) => {
    addVideo({ ...videoData, id: uuidv4() });
    setFormKey((prevKey) => prevKey + 1); // Cambiar la clave del formulario para reiniciarlo
  };

  return (
    <PageContainer>
      <PageTitle>Nuevo Video</PageTitle>
      <PageSubtitle>
        Complete el formulario para crear una nueva tarjeta de video
      </PageSubtitle>
      <NewVideoForm key={formKey} onSubmit={handleSubmit} />
    </PageContainer>
  );
}
