import React from "react";
import "./App.css";
import Container from "./components/Container";
import Card from "./components/Card";
import Input from "./components/input";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Container>
        <Card>
          <Input placeholder="Correo" label="Correo" />
          <Input placeholder="Contraseña" label="Contraseña" />
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default App;
