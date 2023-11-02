import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
import H1 from '../../components/Title'
import ContainerItens from "../../components/ContainerItens"
import Button from "../../components/Button"

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

//Saber consumir outra API's utilizando o AXIOS

//JSX => Mistura HTML com JavaScript

//PROPS => PROPRIEDADES
const App = () => {
  // const users = [];
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const inputNane = useRef();
  const inputAge = useRef();

  // REACT HOOKS => FERRAMENTAS AUXILIARES

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputNane.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    history.push("/usuarios");
  }

  // REACT HOOK => useEffect (Efeito Colateral)
  // A minha aplicação inicial (a pagina carregou o useEffect é chamado)
  //Quando um estado que está no array de dependencia do useEffect é alterado
  // useEffect não aceita o async, só se fizer como está acima utilzando uma function (async function fetUsers(){  }, dessa forma )

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
      </ContainerItens>
    </Container>
  );
};

export default App;
