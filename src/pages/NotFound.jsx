import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NotFoundMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  font-size: 24px;
  background-image: url("/images/404/stars.png");
`;

const Button = styled.button`
  line-height: 24px;
  font-size: 30px;
  border: none;
  cursor: pointer;
  background: none;
  color: #2271d1;
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;

  &:hover {
    background: #2271d1;
    color: #fff;
    border-radius: 10px;
    padding: 10px;
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <img src="/images/404/left-side.png" />
      <NotFoundMessage>
        <h1>404 - Page Not Found</h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>
            <FaRegArrowAltCircleLeft />
            Go to Homepage
          </Button>
        </Link>
      </NotFoundMessage>
      <img src="/images/404/right-side.png" />
    </NotFoundContainer>
  );
}
