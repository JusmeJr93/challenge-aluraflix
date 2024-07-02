import { useContext, useState } from "react";
import styled from "styled-components";
import VideoContext from "../context/VideoContext";
import NewVideoForm from "../components/Form/NewVideoForm";
import AddCategoryForm from "../components/Form/AddCategoryForm";
import RemoveCategoryForm from "../components/Form/RemoveCategoryForm";
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

const CategoryManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-bottom: 20px;
  background-color: #262626;
  padding-bottom: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 50%; */
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #2271d1;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #00a558;
  }
`;

export default function NewVideo() {
  const { addVideo } = useContext(VideoContext);
  const [formKey, setFormKey] = useState(0);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showRemoveCategory, setShowRemoveCategory] = useState(false);

  const handleSubmit = (videoData) => {
    addVideo({ ...videoData, id: uuidv4() });
    setFormKey((prevKey) => prevKey + 1); // Cambiar la clave del formulario para reiniciarlo
  };

  const toggleAddCategory = () => {
    setShowAddCategory(!showAddCategory);
    setShowRemoveCategory(false);
  };

  const toggleRemoveCategory = () => {
    setShowRemoveCategory(!showRemoveCategory);
    setShowAddCategory(false);
  };

  return (
    <PageContainer>
      <PageTitle>Gestión de categorías</PageTitle>
      <CategoryManagementContainer>
        <ButtonGroup>
          <Button onClick={toggleAddCategory}>Agregar Categoría</Button>
          <Button onClick={toggleRemoveCategory}>Quitar Categoría</Button>
        </ButtonGroup>
        {showAddCategory && <AddCategoryForm onClose={toggleAddCategory} />}
        {showRemoveCategory && (
          <RemoveCategoryForm onClose={toggleRemoveCategory} />
        )}
      </CategoryManagementContainer>
      <PageTitle>Nuevo Video</PageTitle>
      <PageSubtitle>
        Complete el formulario para crear una nueva tarjeta de video
      </PageSubtitle>
      <NewVideoForm key={formKey} onSubmit={handleSubmit} />
    </PageContainer>
  );
}
