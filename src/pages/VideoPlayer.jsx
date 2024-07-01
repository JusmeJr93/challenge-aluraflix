import { useContext } from "react";
import { useLocation } from "react-router-dom";
import VideoContext from "../context/VideoContext";
import styled from "styled-components";

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #262626;
  color: #fff;
`;

const VideoFrame = styled.iframe`
  width: 560px;
  height: 315px;
  border: none;
  margin-bottom: 20px;
`;

const VideoTitle = styled.h3`
  margin: 10px 0;
`;

const VideoDescription = styled.p`
  text-align: center;
  max-width: 600px;
`;

export default function VideoPlayer() {
  const { selectedVideo } = useContext(VideoContext);
  const location = useLocation();
  const videoUrl = location.state?.videoUrl || selectedVideo?.video;
  const videoTitle = location.state?.titulo || selectedVideo?.titulo;
  const videoDescription =
    location.state?.descripcion || selectedVideo?.descripcion;

  if (!videoUrl) {
    return (
      <PlayerContainer>
        <p>No video selected.</p>
      </PlayerContainer>
    );
  }

  return (
    <PlayerContainer>
      <VideoFrame
        src={videoUrl}
        title={videoTitle || "Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <VideoTitle>{videoTitle || "Video"}</VideoTitle>
      <VideoDescription>
        {videoDescription || "Descripción del video."}
      </VideoDescription>
    </PlayerContainer>
  );
}
