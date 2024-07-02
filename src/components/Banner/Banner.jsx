import styled from "styled-components";
import bannerFoto from "/images/Home/banner1.png";
import { useNavigate } from "react-router-dom";

const BannerContainer = styled.section`
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

export default function Banner() {
  const navigate = useNavigate();
  return (
    <BannerContainer>
      <img src={bannerFoto} alt="banner" />
      <BannerContent>
        <div>
          <h1>Bienvenido a Tu Plataforma de Videos Educativos</h1>
          <p>
            Explora, elimina y actualiza videos, o añade nuevas categorías y
            contenidos. Sumérgete en el aprendizaje y comienza a pensar como un
            programador.
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
    </BannerContainer>
  );
}
