import React, {Fragment} from 'react';
import Home from './components/Home';
import Inicio from './components/Inicio.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" >
          <Link to="/inicio" >Inicio</Link>
            <Home></Home>
          </Route>
          <Route path="/inicio/:id/:nombre" >
            <Link to="/">Base</Link>
            <Inicio></Inicio>
          </Route>
          <Route path="/productos" >
            Estos son los productos
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
