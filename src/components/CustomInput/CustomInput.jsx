import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 60rem;
  padding: 2rem;

  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);

  background-color: var(--color-bg-item);
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 650px) {
    min-width: 90vw;
    max-width: 33rem;
  }
`;

const Input = styled.input`
  width: 80%;

  border: none;
  outline: none;

  font-family: inherit;
  font-size: 1.8rem;

  background-color: var(--color-bg-item);
  color: var(--color-text);
`;

const CustomButton = styled.button`
  padding: 1rem;

  font-size: 1.6rem;
  font-family: inherit;

  border: none;
  border-radius: 0.5rem;

  background-color: hsl(280, 87%, 65%);
  color: var(--color-text);

  cursor: pointer;

  transition: all 0.3s ease-in;

  &:hover {
    background-color: hsl(192, 100%, 67%);
    color: black;
  }
`;

const CustomInput = ({ name, setName, handleSubmit }) => {
  return (
    <Container>
      <Input
        placeholder="Create a new todo..."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></Input>
      <CustomButton onClick={handleSubmit}>Add</CustomButton>
    </Container>
  );
};

export default CustomInput;
