import React from "react";
import styled from "styled-components";

import imageL from "../../images/bg-desktop-light.jpg";
import imageD from "../../images/bg-desktop-dark.jpg";

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  max-width: 100%;

  width: 100%;
  max-width: 144rem;

  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  height: 30rem;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

const Bot = styled.div`
  background-color: var(--color-bg-main);
`;

const Background = ({ theme }) => {
  return (
    <Container>
      <Top>
        {theme === "light" ? (
          <Image src={imageL}></Image>
        ) : (
          <Image src={imageD}></Image>
        )}
      </Top>
      <Bot></Bot>
    </Container>
  );
};

export default Background;
