/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled from "styled-components";
import VideoContext from "../../context/VideoContext";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

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
  border-color: ${(props) => props.$cardColor};
  box-shadow: 0 0 8px 4px ${(props) => props.$cardColor} inset;
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
  border-color: ${(props) => props.$cardColor};
  box-shadow: 0 0 8px 4px ${(props) => props.$cardColor} inset;
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

export default function Card({ categoryObj, setCurrentVideo, setIsModalOpen }) {
  const { videos, deleteVideo, setSelectedVideo } = useContext(VideoContext);

  const navigate = useNavigate();

  function handlePlayVideo(video) {
    setSelectedVideo(video);
    navigate("/player");
  }

  function handleEdit(video) {
    setCurrentVideo(video);
    setIsModalOpen(true);
  }

  return (
    <CardContainer>
      {videos
        .filter((videoObj) => videoObj.category === categoryObj.category)
        .map((videoObj, videoIndex) => (
          <VideoCard key={videoIndex}>
            <CardImage
              src={videoObj.img}
              alt={videoObj.titulo}
              onClick={() => handlePlayVideo(videoObj)}
              $cardColor={categoryObj.bgColor}
              title="Clic para ver el vídeo"
            />
            <CardButtons $cardColor={categoryObj.bgColor}>
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
  );
}
