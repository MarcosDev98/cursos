import React from "react";
import Cabecera from "./components/Cabecera";
import logo from "./logo.svg";
import "./App.css";

function App() {
  function manejaClick(texto) {
    console.log(texto);
  }

  return (
    <div className="App">
      <Cabecera miau={"Bienvenido miau"} manejaClick={manejaClick} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenidos</p>
        <p>Holis :3</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
