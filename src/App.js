import React from "react";
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";

//JSX => Mistura HTML com JavaScript
const App = () => {
  return (
    <Container>
      <Image alt="Logo-imagem" src={People}/>
      <ContainerItens>

        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"/>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"/>

        <Button >Cadastrar <Image style={{ margin: '0' }} alt="seta" src={Arrow}/></Button>

      </ContainerItens>
    </Container>
  );
};

export default App;
