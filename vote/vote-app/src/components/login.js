import React from "react";
import "../css/login.css";

class Login extends React.Component {
  handleClick() {
    console.log("Hizo click en Ingresar.");
  }
  handleClick2() {
    console.log("Hizo click en Registrar.");
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-2 borde1"></div>
            <div className="col-md-8 borde2">
              <div className="card-login">
                <input type="text" />
                <input type="password" />
                <button type="submit" onClick={this.handleClick}>
                  Ingresar
                </button>
                <button type="" onClick={this.handleClick2}>
                  Registrar
                </button>
              </div>
            </div>
            <div className="col-md-2 borde3"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
