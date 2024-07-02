import styled from "styled-components";

const FooterContainer = styled.div`
  background: #000;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 125px;
  background: #000;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <StyledFooter>
        <img src="/images/aluraflix.png" alt="logo" />
      </StyledFooter>
    </FooterContainer>
  );
}
