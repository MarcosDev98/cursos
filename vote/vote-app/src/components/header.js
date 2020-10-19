import React from "react";
import "../css/header.css";
import logo from "../img/logo-sitravich.jpg";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="head">

          <h1 className="title">Elecciones</h1>
          
          <div className="nav">
            <ul>
              <li><a href="">Votar</a></li>
              <li><a href="">Nueva votación</a></li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
