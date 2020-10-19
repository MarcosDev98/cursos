import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
    </div>
  );
}

export default App;
