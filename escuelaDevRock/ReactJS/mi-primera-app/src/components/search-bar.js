import React from "react";
import "./search-bar.css";
import logo from "../logo.svg";

class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name, "Ouch, me apretaron");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <img src={logo} alt="" className="logo-barra" />
          </div>
          <div className="col-md-4">
            <form
              name="Soy un form"
              className="form-inline"
              onSubmit={this.handleSubmit}
            >
              <div className="busqueda">
                <label htmlFor="inputPassword2" className="sr-only">
                  Password
                </label>
                <input
                  name="busqueda"
                  type="text"
                  value={this.state.busqueda}
                  id="buscar"
                  placeholder="Buscar"
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
