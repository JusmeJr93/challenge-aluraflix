import { useContext, useState } from "react";
import VideoContext from "../context/VideoContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import EditVideoModal from "../components/Modal/EditVideoModal";
import bannerFoto from "/images/Home/banner1.png";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const HomeContainer = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #262626;
  color: #fff;
  margin: 0 auto;
  h2 {
    width: 432px;
    height: 70px;
    border-radius: 15px;
    font-size: 32px;
    line-height: 37.5px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CardContainer = styled.article`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

const VideoCard = styled.div`
  background-color: #333;
  margin: 20px 0;
  width: 430px;
  height: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 260px;
  border: solid 5px;
  border-radius: 15px 15px 0 0;
  cursor: pointer;
`;

const CardButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #000;
  border: solid 5px;
  border-radius: 0 0 15px 15px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  gap: 5px;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 18.75px;
  font-weight: 800;
`;

const Banner = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 45px;
  position: relative;
  img {
    border-radius: 30px;
    width: 100%;
    height: auto;
  }
`;

const BannerContent = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  /* text-align: center; */
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    gap: 20px;
  }

  h1 {
    margin: 8px 0 0 0;
    font-size: 2.3em;
  }

  p {
    margin: 10px 0;
    font-size: 1.5em;
  }

  img {
    max-width: 500px;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.15);
  }
`;

export default function Home() {
  const { categories, videos, deleteVideo, editVideo, setSelectedVideo } =
    useContext(VideoContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const navigate = useNavigate();

  function handlePlayVideo(video) {
    setSelectedVideo(video);
    navigate("/player");
  }

  function handleEdit(video) {
    setCurrentVideo(video);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setCurrentVideo(null);
  }

  function handleEditSubmit(updatedVideo) {
    editVideo(currentVideo.id, updatedVideo);
    closeModal();
  }

  return (
    <HomeContainer>
      <Banner>
        <img src={bannerFoto} alt="banner" />
        <BannerContent>
          <div>
            <h1>Bienvenido a Tu Plataforma de Videos Educativos</h1>
            <p>
              Explora, elimina y actualiza videos, o añade nuevas categorías y
              contenidos. Sumérgete en el aprendizaje y comienza a pensar como
              un programador.
            </p>
          </div>
          <img
            src="/images/Home/bannervideo.jpeg"
            alt="Pensar como programador"
            onClick={() =>
              navigate("/player", {
                state: {
                  videoUrl:
                    "https://www.youtube.com/embed/ov7vA5HFe6w?si=lpkxheX6ounCK18f",
                  titulo: "Pensar como programador",
                  descripcion:
                    "Este video te ayudará a desarrollar una mentalidad de programador, aprendiendo a pensar y abordar problemas de manera efectiva.",
                },
              })
            }
            title="Haz clic para ver el video"
          />
        </BannerContent>
      </Banner>
      <div style={{ width: "100%" }}>
        {categories.map((categoryObj, categoryIndex) => (
          <section
            key={categoryIndex}
            style={{ width: "100%", margin: "20px 45px" }}
          >
            <h2 style={{ backgroundColor: categoryObj.bgColor }}>
              {categoryObj.category}
            </h2>

            <CardContainer>
              {videos
                .filter(
                  (videoObj) => videoObj.category === categoryObj.category
                )
                .map((videoObj, videoIndex) => (
                  <VideoCard key={videoIndex}>
                    <CardImage
                      src={videoObj.img}
                      alt={videoObj.titulo}
                      onClick={() => handlePlayVideo(videoObj)}
                      style={{
                        borderColor: categoryObj.bgColor,
                        boxShadow: `0 0 8px 4px ${categoryObj.bgColor} inset`,
                      }}
                      title="Clic para ver el vídeo"
                    />
                    <CardButtons
                      style={{
                        borderColor: categoryObj.bgColor,
                        boxShadow: `0 0 8px 4px ${categoryObj.bgColor} inset`,
                      }}
                    >
                      <Button onClick={() => handleEdit(videoObj)}>
                        <FaEdit /> Editar
                      </Button>
                      <Button onClick={() => deleteVideo(videoObj.id)}>
                        <RiDeleteBin6Line /> Eliminar
                      </Button>
                    </CardButtons>
                  </VideoCard>
                ))}
            </CardContainer>
          </section>
        ))}
        {isModalOpen && (
          <EditVideoModal
            video={currentVideo}
            onClose={closeModal}
            onSubmit={handleEditSubmit}
          />
        )}
      </div>
    </HomeContainer>
  );
}
