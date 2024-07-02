import styled from "styled-components";
import Banner from "../components/Banner/Banner";
import VideoSection from "../components/VideoSection/VideoSection";

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

export default function Home() {
  return (
    <HomeContainer>
      <Banner />
      <VideoSection />
    </HomeContainer>
  );
}
