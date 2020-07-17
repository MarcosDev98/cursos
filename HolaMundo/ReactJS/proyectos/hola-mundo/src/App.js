import React from "react";
import Cabecera from "./components/Cabecera";
import "./App.css";

function App() {
  function manejaClick(texto) {
    console.log(texto);
  }

  return (
    <div className="App">
      <Cabecera miau={"Bienvenido miau"} manejaClick={manejaClick} />
    </div>
  );
}

export default App;
