import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//Así se hace con Javascript pelado.
//let elemento = document.createElement("p");
//elemento.innerHTML = "Soy Marcos";
//let contenedor = document.getElementById("root");
//contenedor.appendChild(elemento);

//Así se hace con JSX.

//let nombre = "Marcos Aguadovich";
//let elemento = <p>Hola, soy Marcos desde JSX</p>;
//let edad = 19;
//
//let calculo = (edad) => {
//  return edad + 2;
//};
//
//let jsxMultiple = (
//  <div>
//    <h1>Soy un titulo</h1>
//    <h3>Soy un subtitulo</h3>
//    <p>
//      Esto se creó utilizando jsxMultiple. Mi nombre es: {nombre} y tengo{" "}
//      {calculo(edad)} años.
//    </p>
//  </div>
//);
//let contenedor = document.getElementById("root");
//ReactDOM.render(jsxMultiple, contenedor);
