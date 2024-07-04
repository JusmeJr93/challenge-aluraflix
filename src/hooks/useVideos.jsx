import { useState, useEffect } from "react";
import axios from "axios";

const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videosResponse = await axios.get(
          "https://my-json-server.typicode.com/JusmeJr93/aluraflix-api/videos"
        );
        const categoriesResponse = await axios.get(
          "https://my-json-server.typicode.com/JusmeJr93/aluraflix-api/categories"
        );
        setVideos(videosResponse.data);
        setCategories(categoriesResponse.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { videos, setVideos, categories, setCategories, loading, error };
};

export default useVideos;
