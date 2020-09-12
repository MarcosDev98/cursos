import React from "react";
import SearchBar from "./components/search-bar";
import "bootstrap/dist/css/bootstrap.css";
import SearchResult from "./components/search-result.js";

class pageSearchResult extends React.Component {
  state = {
    busqueda: "",
  };

  componentDidMount() {
    let search = this.props.history.location.search.substr(1);

    this.setState({
      busqueda: search,
    });
  }

  componentWillMount() {}

  changeHandle = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
    //acá iria pero nose como...
    this.props.history.push("/busqueda?" + this.state.busqueda);
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
