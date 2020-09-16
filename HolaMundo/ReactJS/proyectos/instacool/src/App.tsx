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
        <Input placeholder="Correo" />
      </Card>
    </Container>
  );
}

export default App;
