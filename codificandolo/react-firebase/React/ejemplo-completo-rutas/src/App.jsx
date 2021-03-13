import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Usuario from './components/Usuario.jsx';
import Usuarios from './components/Usuarios.jsx';

function App() {
  return (
    <Fragment>
      <Router>
        <Link to="/">Usuarios</Link>

        <Switch>
          <Route exact path="/">
            <Usuarios></Usuarios>
          </Route>
          <Route path="/usuario/:id">
            <Usuario></Usuario>
          </Route>
        </Switch>


      </Router>
    </Fragment>
  );
}

export default App;
