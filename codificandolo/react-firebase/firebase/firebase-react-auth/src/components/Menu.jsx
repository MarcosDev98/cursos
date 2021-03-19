import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {authentication} from '../firebase-config';


function Menu(){
  const [usuario, setUsuario] = useState(null);

  useEffect( () => {
    authentication.onAuthStateChanged((user) =>{
      if( user ){
        setUsuario(user.email)
      }
    })

  }, [])


  const cerrarSesion = () => {
    authentication.signOut()
    setUsuario(null)
  }

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
          {
            usuario ?
            (
            <button
              onClick={cerrarSesion}
              className="btn btn-danger"
              >Cerrar Sesion</button>
              )
            :
            (<span/>)
          }
        </nav>
      </div>
    </Fragment>
  )
}

export default Menu