import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import Card from "./components/Card";
import Input from "./components/input";

function App() {
  return (
    <Container>
      <Card>
        <Input placeholder="Correo" label="Correo" />
        <Input placeholder="Contraseña" label="Contraseña" />
      </Card>
    </Container>
  );
}

export default App;
