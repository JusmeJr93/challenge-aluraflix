/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useVideos from "../hooks/useVideos";

const VideoContext = createContext();

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
