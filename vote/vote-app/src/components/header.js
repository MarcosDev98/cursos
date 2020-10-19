import React from "react";
import "../css/header.css";
import logo from "../img/logo-sitravich.jpg";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="head">
          <img src={logo} alt="Logo Sitravich"></img>

          <h1 className="title">Elecciones</h1>
          <div className="nav">
            <ul className="li">
              {" "}
              <a href="">Nueva Elección</a>{" "}
            </ul>
            <ul className="li">
              {" "}
              <a href="">Votar</a>{" "}
            </ul>
            <ul className="li">
              {" "}
              <a href="">Que se yo</a>{" "}
            </ul>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
