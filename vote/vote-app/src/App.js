import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login";
import Header from "./components/header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//el "react-router-dom" hay que agregarlo con: npm install -S react-router-dom

function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>

      
      </BrowserRouter>
  );
}

export default App;
