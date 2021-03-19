import React, { Fragment, useState } from 'react';
import {authentication} from '../firebase-config';

function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [msgError, setMsgError] = useState(null);

  const registrarUsuario = (e) => {
    e.preventDefault()

    authentication.createUserWithEmailAndPassword(email,password)
      .then( (res) => {alert('Usuario registrado')})
      .catch( (e) => {
        if (e.code === 'auth/invalid-email'){
          setMsgError('Formato email incorrecto')
        } else if (e.code === 'auth/weak-password'){
          setMsgError('La contraseña debe tener 6 caracteres o más.')
        }else if (e.code === 'auth/email-already-in-use') {
          setMsgError('El email ya se encuentra registrado')
        }
        else {
          console.log(e.code);
        }
      })
    
  }

  const logearUsuario = (e) => {
    authentication.signInWithEmailAndPassword(email,password)
    .then( (res) => {console.log(res)})
    .catch((err) => {
      if (err.code === 'auth/wrong-password'){
        setMsgError('Contraseña incorrecta')
      } 
      else if (err.code === 'auth/user-not-found'){
        setMsgError('E-mail incorrecto')
      } else{
        console.log(err.code);
      }
    })
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
              type="text" />
              <input
              onChange={(e) => {setPassowrd(e.target.value)}} 
              className="form-control mt-4"
              placeholder="Password"
              type="password"
              maxLength="20"/>
              <input 
              className="btn btn-dark btn-block mt-4"
              value="Registrar"
              type="submit" />
            </form>
            <button
              onClick={logearUsuario}
              className="btn btn-success btn-block"
              >Iniciar sesión
              </button>
            {

              msgError ? 
              (<Fragment>
                <div className="">
                  {msgError}
                </div>
              </Fragment>)
              :
              (<span></span>)


            }
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login