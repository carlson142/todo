import React from "react";
import styled from "styled-components";

import { IoSunnyOutline, IoMoon } from "react-icons/io5";

const Container = styled.div`
  width: 60rem;
  background-color: transparent;

  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;

  color: white;

  @media (max-width: 650px) {
    min-width: 90vw;
    max-width: 33rem;
  }
`;

const Left = styled.div`
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 10px;

  @media (max-width: 650px) {
    font-size: 3.5rem;
  }
`;

const Right = styled.div`
  cursor: pointer;
`;

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Container>
      <Left>TODO</Left>
      <Right
        onClick={() => {
          toggleTheme();
        }}
      >
        {theme === "light" ? (
          <IoMoon size={45} />
        ) : (
          <IoSunnyOutline size={45} />
        )}
      </Right>
    </Container>
  );
};

export default Header;
