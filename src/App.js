import React, { useState, useRef } from "react";

import axios from "axios";

import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

//Saber consumir outra API's utilizando o AXIOS

//JSX => Mistura HTML com JavaScript
const App = () => {
  // const users = [];
  const [users, setUsers] = useState([]);
  const inputNane = useRef();
  const inputAge = useRef();

  // REACT HOOKS => FERRAMENTAS AUXILIARES

  async function addNewUser() {
    // const { data: newUser } = await axios.post("http://localhost:3001/users", {
    //   name: inputNane.current.value,
    //   age: inputAge.current.value,
    // });

    // setUsers([...users, newUser]);

    const { data: newUsers } = await axios.get("http://localhost:3001/users")

    setUsers(newUsers);

  }

  // REACT HOOK => useEffect (Efeito Colateral)

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="Logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputNane} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <Image style={{ margin: "0" }} alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img alt="Lata-de-lixo" src={Trash} />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
