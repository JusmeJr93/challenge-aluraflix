import styled from "styled-components";

import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import VideoPlayer from "./pages/VideoPlayer";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;

function App() {
  // Obtener la ubicación actual de la URL
  const location = useLocation();

  // Determinar la página 404
  const isNotFound =
    location.pathname !== "/" &&
    location.pathname !== "/new" &&
    location.pathname !== "/player";

  return (
    <AppContainer>
      <Helmet>
        <script>
          {`
            window.codySettings = { widget_id: '9c719cfb-40af-4061-b57c-eff89b2a2275' };

            !function(){
              var t=window,e=document,a=function(){
                var t=e.createElement("script");
                t.type="text/javascript",t.async=!0,t.src="https://trinketsofcody.com/cody-widget.js";
                var a=e.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(t,a)
              };
              "complete"===document.readyState?a():t.attachEvent?t.attachEvent("onload",a):t.addEventListener("load",a,!1)
            }();
          `}
        </script>
      </Helmet>
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
