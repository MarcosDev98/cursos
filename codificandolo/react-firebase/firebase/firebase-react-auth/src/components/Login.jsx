import React, { Fragment, useState } from 'react';
import {authentication} from '../firebase-config';

function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const registrarUsuario = (e) => {
    e.preventDefault()

    try{
      authentication.createUserWithEmailAndPassword(email,password);
      alert('Usuario registrado con éxito.')
    }catch(e){
      alert('Se produjo un error al registrar el usuario.')
      console.log(e);
    }
  }


  return(
    <Fragment>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form 
              onSubmit={registrarUsuario}
              className="form-group">
              <input
              onChange={(e) => {setEmail(e.target.value)}} 
              className="form-control"
              placeholder="e-mail"
              type="email" />
              <input
              onChange={(e) => {setPassowrd(e.target.value)}} 
              className="form-control mt-4"
              placeholder="Password"
              type="password"
              maxLength="20"/>
              <input 
              className="btn btn-success btn-block mt-4"
              value="Registrar"
              type="submit" />
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login