import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background: #000;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  height: 125px;
  /* padding: 0 50px; */
`;

const StyledNavBar = styled.nav`
  display: flex;
  gap: 1.5rem;
  margin-right: 42px;
`;

const Button = styled.button`
  width: 200px;
  height: 54px;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 24px;
  font-size: 20px;
  text-align: center;
  border: solid 2px;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => (props.$selected ? "#000" : "none")};
  color: ${(props) => (props.$selected ? "#2271D1" : "#fff")};
  box-shadow: ${(props) =>
    props.$selected ? "0px 0px 8px 4px #2271d1 inset" : ""};
`;

export default function Header() {
  const [selectedPage, setSelectedPage] = useState("home");
  const selectHome = () => setSelectedPage("home");
  const selectNewVideo = () => setSelectedPage("newVideo");

  return (
    <HeaderContainer>
      <StyledHeader>
        <Link to="/">
          <img
            style={{ cursor: "pointer", marginLeft: "42px" }}
            src="/images/aluraflix.png"
            alt="logo"
          />
        </Link>

        <StyledNavBar>
          <Link to="/">
            <Button $selected={selectedPage === "home"} onClick={selectHome}>
              Home
            </Button>
          </Link>

          <Link to="new">
            <Button
              $selected={selectedPage === "newVideo"}
              onClick={selectNewVideo}
            >
              Nuevo video
            </Button>
          </Link>
        </StyledNavBar>
      </StyledHeader>
    </HeaderContainer>
  );
}
