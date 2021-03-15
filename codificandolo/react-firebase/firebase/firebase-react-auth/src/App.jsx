import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import Admin from './components/Admin';



function App() {
  return (
    <Fragment>
      <div className="container">
      <Router>
        <Menu></Menu>
        <Switch>
          <Route exact path="/" component={Inicio}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" component={Admin}></Route>
        </Switch>
      </Router>
      </div>
    </Fragment>
  );
}

export default App;
