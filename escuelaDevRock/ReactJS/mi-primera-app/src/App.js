import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import PageSearchResult from "./page-search-result.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layout.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/busqueda" component={PageSearchResult} />
            <Route path="/artista" component={PageArtist} />
            <Route path="/" component={PageHome} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
export default App;
