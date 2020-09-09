import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
class App extends React.Component {
  render() {
    return <PageArtist />;
  }
}
export default App;
