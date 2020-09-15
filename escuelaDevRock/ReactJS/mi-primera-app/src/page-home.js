import React from "react";
import "./page-home.css";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import Modal from "./components/modal";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };

  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };

  state = {
    busqueda: "",
    modal: false,
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form
              name="Soy un form"
              className="form-inline"
              onSubmit={this.handleSubmit}
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  value={this.props.busqueda}
                  id="buscar"
                  placeholder="Buscar"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search Similar Artist
                </button>
                <button className="btng" onClick={this.handleClick}>
                  EscuelaDevRock
                </button>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            <h4>Aguante DevRock</h4>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}

export default PageHome;
