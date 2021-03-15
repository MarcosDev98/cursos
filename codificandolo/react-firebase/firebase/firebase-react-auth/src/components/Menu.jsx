import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

function Menu(){
  return(
    <Fragment>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  )
}

export default Menu