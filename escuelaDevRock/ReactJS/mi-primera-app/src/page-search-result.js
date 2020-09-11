import React from "react";
import SearchBar from "./components/search-bar";
import "bootstrap/dist/css/bootstrap.css";
import SearchResult from "./components/search-result.js";

class pageSearchResult extends React.Component {
  state = {
    busqueda: "",
  };

  componentDidMount() {
    console.log("componentDidMount", "Luego del metodo render()");
  }

  componentWillMount() {
    console.log("componentWillMount()", "Antes del Método render()");
  }

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log("render()", "Estoy en el método render");
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}
export default pageSearchResult;
