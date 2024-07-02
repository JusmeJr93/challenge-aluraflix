import { useContext, useState } from "react";
import styled from "styled-components";
import VideoContext from "../../context/VideoContext";
import EditVideoModal from "../Modal/EditVideoModal";
import Card from "./Card";

const CategoriesContainer = styled.div`
  width: 100%;

  section {
    width: 100%;
    margin: 20px 45px;
  }
`;

export default function VideoSection() {
  const { categories, editVideo } = useContext(VideoContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  function closeModal() {
    setIsModalOpen(false);
    setCurrentVideo(null);
  }

  function handleEditSubmit(updatedVideo) {
    editVideo(currentVideo.id, updatedVideo);
    closeModal();
  }

  return (
    <CategoriesContainer>
      {categories.map((categoryObj, categoryIndex) => (
        <section key={categoryIndex}>
          <h2 style={{ backgroundColor: categoryObj.bgColor }}>
            {categoryObj.category}
          </h2>

          <Card
            categoryObj={categoryObj}
            setCurrentVideo={setCurrentVideo}
            setIsModalOpen={setIsModalOpen}
          />
        </section>
      ))}
      {isModalOpen && (
        <EditVideoModal
          video={currentVideo}
          onClose={closeModal}
          onSubmit={handleEditSubmit}
        />
      )}
    </CategoriesContainer>
  );
}
