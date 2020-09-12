import React from "react";
import "./page-home.css";
import logo from "./logo.svg";
import ReactDOM from "react-dom";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };

  onChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  state = {
    busqueda: "",
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
                  onChange={this.onChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search Similar Artist
                </button>
                <button className="btng">EscuelaDevRock</button>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <h1>VENGO DEL MAS ALLÁ</h1>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}

export default PageHome;
