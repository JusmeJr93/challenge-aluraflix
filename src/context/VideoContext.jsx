/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useVideos from "../hooks/useVideos";

// Crear el contexto de Video
const VideoContext = createContext();

// Proveedor de VideoContext para envolver los componentes necesarios
export const VideoProvider = ({ children }) => {
  const { videos, setVideos, categories, setCategories, loading, error } =
    useVideos();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const addVideo = (video) => {
    setVideos((prevVideos) => [...prevVideos, video]);
  };

  const deleteVideo = (id) => {
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  };

  const editVideo = (id, updatedVideo) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) => (video.id === id ? updatedVideo : video))
    );
  };

  const addCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  const removeCategory = (categoryToRemove) => {
    setCategories((prevCategories) =>
      prevCategories.filter(
        (category) => category.category !== categoryToRemove
      )
    );
  };

  // Mensaje de carga mientras los datos se están obteniendo
  if (loading) {
    return <div>Loading...</div>;
  }

  // Mensaje de error si ocurre algún problema al obtener los datos
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Proveer el contexto con valores y funciones a los componentes hijos
  return (
    <VideoContext.Provider
      value={{
        categories,
        setCategories,
        videos,
        setVideos,
        addVideo,
        deleteVideo,
        editVideo,
        selectedVideo,
        setSelectedVideo,
        addCategory,
        removeCategory,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
