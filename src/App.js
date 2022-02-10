import "./App.css";
import styled from "styled-components";
import Background from "./components/bg/Background";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import CustomInput from "./components/CustomInput/CustomInput";
import List from "./components/List/List";

const Container = styled.div`
  width: 100%;
  height: 100%;

  /* max-width: 144rem; */

  margin: 0 auto;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-color: var(--color-bg-main);
  color: var(--color-text);
`;

function App() {
  /* ДЛЯ ТЕМЫ */
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  /* КОНЕЦ ДЛЯ ТЕМЫ */
  /******************************** */
  /* СОСТОЯНИЯ */
  const [name, setName] = useState(""); // Значение из инпута
  const [list, setList] = useState([]); // Массив заметок

  /* КОНЕЦ СОСТОЯНИЯ */
  /******************************** */
  /* ФУНКЦИИ */
  /* НАЖАТИЕ НЕ КНОПКУ ADD */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Empty Todo! Create a new Todo with some text!");
      return;
    }

    if (name) {
      const newTodo = {
        id: new Date().getTime().toString(),
        title: name,
        status: true,
      };
      setList([...list, newTodo]);
      setName("");
    }
  };
  /* КОНЕЦ НАЖАТИЕ НЕ КНОПКУ ADD */

  /* УДАЛЕНИЕ ЭЛЕМЕНТА */
  const removeItem = (id) => {
    let newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };
  /* КОНЕЦ УДАЛЕНИЕ ЭЛЕМЕНТА */

  /* КОНЕЦ ФУНКЦИИ */

  return (
    <Container>
      <Background theme={theme}></Background>

      <Header theme={theme} setTheme={setTheme}></Header>

      <CustomInput name={name} setName={setName} handleSubmit={handleSubmit} />

      <List list={list} setList={setList} removeItem={removeItem} />
    </Container>
  );
}

export default App;
