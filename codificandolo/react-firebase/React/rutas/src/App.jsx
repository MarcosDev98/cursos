import React, {Fragment} from 'react';
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
          <Route path="/inicio" >
            Estas en el inicio
          </Route>
          <Route path="/productos" >
            Estos son los productos
          </Route>
          <Route path="/" >
            Estas en el home
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
