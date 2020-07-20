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
      <Cabecera miau={"Bienvenido guau"} manejaClick={manejaClick} />
      <body>
        <p>Hola mundo</p>
      </body>
    </div>
  );
}

export default App;
