import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

import "./iconClose.scss";

const Container = styled.div`
  width: 60rem;

  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-underline);
  }

  transform: ${(props) => props.click === true && "translateX(100%)"};
  opacity: ${(props) => props.click === true && "0"};

  transition: all 0.5s ease-in;

  @media (max-width: 650px) {
    min-width: 90vw;
    max-width: 33rem;
  }
`;

const Left = styled.div`
  margin-right: 2rem;
`;

const Mid = styled.div`
  font-size: 1.8rem;

  color: ${(props) =>
    props.status === true ? "var(--color-text)" : "var(--color-underline)"};

  margin-right: auto;

  text-decoration: ${(props) => props.status === false && "line-through"};
`;

const Right = styled.div`
  cursor: pointer;
`;

const ListItem = ({ title, id, removeItem, status, statusTodo }) => {
  const [click, setClick] = useState(false); // Для удаления элемента
  const [check, isCheck] = useState(false); // Для Чекбокса

  return (
    <Container click={click}>
      <Left>
        <CustomCheckbox
          check={check}
          isCheck={isCheck}
          onClick={() => {
            statusTodo(id);
          }}
          status={status}
        />
      </Left>

      <Mid status={status}>{title}</Mid>

      <Right
        onClick={() => {
          setClick(true);
          setTimeout(() => {
            removeItem(id);
          }, 500);
        }}
      >
        <IoClose size={25} className="iconClose" />
      </Right>
    </Container>
  );
};

export default ListItem;
