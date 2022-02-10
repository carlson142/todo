import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";

const Container = styled.div`
  width: 60rem;

  background-color: var(--color-bg-item);

  position: absolute;
  top: 31%;
  left: 50%;
  transform: translate(-50%);

  border-radius: 1rem;

  @media (max-width: 650px) {
    min-width: 90vw;
    max-width: 33rem;
  }
`;

const Top = styled.div`
  text-align: center;
`;

const Bot = styled.div`
  display: flex;
  justify-content: space-between;

  border-top: 1px solid var(--color-underline);

  padding: 2rem;
  font-size: 1.6rem;

  position: relative;

  @media (max-width: 650px) {
    font-size: 1.4rem;
  }
`;

const BotLeft = styled.div``;

const BotCenter = styled.div`
  @media (max-width: 490px) {
    min-width: 90vw;

    display: flex;
    justify-content: center;

    background-color: var(--color-bg-item);
    position: absolute;
    bottom: -7rem;
    left: 0;

    padding: 2rem 2rem;
    border-radius: 0.5rem;
  }
`;

const BotRight = styled.div``;

const OutlineButton = styled.button`
  font-size: inherit;
  font-family: inherit;

  background-color: transparent;
  border: none;

  color: var(--color-text);
  cursor: pointer;

  transition: all 0.2s ease-in;

  &:hover {
    color: var(--color-primary-bright-blue);
  }

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const Text = styled.p`
  position: absolute;
  bottom: -100%;
  left: 38%;
  transform: translate(-30%);

  font-size: 1.6rem;
  color: var(--color-text);

  @media (max-width: 650px) {
    text-align: center;
  }

  @media (max-width: 490px) {
    bottom: -12rem;
  }
`;

const Message = styled.h1`
  padding: 4rem 0rem;

  @media (max-width: 490px) {
    font-size: 1.8rem;
  }
`;

const List = ({ list, setList, removeItem }) => {
  /*  ИЗМЕНЯЕТ СТАТУС ТУДУШКИ НА ПРОТИВОПОЛОЖНЫЙ */
  const statusTodo = (id) => {
    let newTodoS = list.filter((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setList(newTodoS);
  };
  /*  КОНЕЦ ИЗМЕНЯЕТ СТАТУС ТУДУШКИ НА ПРОТИВОПОЛОЖНЫЙ */

  /* ФИЛЬТРАЦИЯ ПО СТАТУСУ */
  const [filtered, setFiltered] = useState(list);

  useEffect(() => {
    setFiltered(list);
  }, [list]);

  const todoFilter = (status) => {
    if (status === "all") {
      setFiltered(list);
    } else {
      const newList = list.filter((el) => el.status === status);
      setFiltered(newList);
    }
  };
  /* КОНЕЦ ФИЛЬТРАЦИЯ ПО СТАТУСУ */

  let activeLeft = list.filter((el) => el.status === true).length;

  let active = filtered.filter((el) => el.status === true);

  return (
    <Container>
      <Top>
        {filtered.length ? (
          filtered
            .filter((el, idx) => idx < 5) // Отображение не более 6 элементов
            .map(({ id, title, status }) => {
              return (
                <ListItem
                  key={id}
                  title={title}
                  removeItem={removeItem}
                  id={id}
                  status={status}
                  statusTodo={statusTodo}
                />
              );
            })
        ) : (
          <Message>Let's add something interesting!</Message>
        )}
      </Top>

      <Bot>
        <BotLeft>{activeLeft} Items Left</BotLeft>

        <BotCenter>
          <OutlineButton
            onClick={() => {
              todoFilter("all");
            }}
          >
            All
          </OutlineButton>
          <OutlineButton
            onClick={() => {
              todoFilter(true);
            }}
          >
            Active
          </OutlineButton>
          <OutlineButton
            onClick={() => {
              todoFilter(false);
            }}
          >
            Completed
          </OutlineButton>
        </BotCenter>

        <BotRight>
          <OutlineButton
            onClick={() => {
              setList(active);
            }}
          >
            Clear Completed
          </OutlineButton>
        </BotRight>

        <Text>Drag and drop to reorder list (in future updates)</Text>
      </Bot>
    </Container>
  );
};

export default List;
