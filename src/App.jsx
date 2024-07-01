import styled from "styled-components";

import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import VideoPlayer from "./pages/VideoPlayer";
import NotFound from "./pages/NotFound";

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;

function App() {
  const location = useLocation();
  const isNotFound =
    location.pathname !== "/" &&
    location.pathname !== "/new" &&
    location.pathname !== "/player";

  return (
    <AppContainer>
      {!isNotFound && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewVideo />} />
        <Route path="/player" element={<VideoPlayer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isNotFound && <Footer />}
    </AppContainer>
  );
}

export default App;
