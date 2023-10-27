import React, { useState, useEffect } from "react";

import axios from "axios";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  User,
} from "./styles";

//Saber consumir outra API's utilizando o AXIOS

//JSX => Mistura HTML com JavaScript
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="Logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>
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

        <Button >
        <Image style={{ margin: "0" }} alt="seta" src={Arrow} /> Voltar 
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
