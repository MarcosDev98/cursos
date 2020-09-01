import React from "react";
import SearchBar from "./components/search-bar";
import "bootstrap/dist/css/bootstrap.css";
import SearchResult from "./components/search-result.js";

class pageSearchResult extends React.Component {
  state = {
    busqueda: "",
  };

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
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
