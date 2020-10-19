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
        <div className="container-fluid">
          <div className="row">
            
            <div className="col">
              <div className="card-login">
                
                <label htmlFor="usr">Usuario</label>
                <input type="text" className="form-control" />
                <label htmlFor="pwd">Contraseña</label>
                <input type="password" className="form-control" /> 


               
                <button className="btn btn-light" type="button" onClick={this.handleClick}>
                  Ingresar
                </button>
                <button className="btn btn-light" type="button" onClick={this.handleClick2}>
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
