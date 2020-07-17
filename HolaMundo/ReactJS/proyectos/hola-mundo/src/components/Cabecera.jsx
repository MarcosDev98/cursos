import React, { Component } from "react";
import logo from "../logo.svg";

export default class Cabecera extends Component {
  manejaClick = () => {
    const { manejaClick, miau } = this.props;
    manejaClick(miau);
  };
  render() {
    const { miau, manejaClick } = this.props;
    return (
      <header className="App-header">
        <img
          onClick={this.manejaClick}
          src={logo}
          className="App-logo"
          alt="logo"
        />

        <h1 className="App-title">{miau}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          onClick={this.manejaClick}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }
}
