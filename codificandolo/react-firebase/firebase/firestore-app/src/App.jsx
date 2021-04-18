import React, { Fragment, useState, useEffect } from 'react';
import { db } from './firebaseconfig';

function App() {

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);
  const [aviso, setAviso] = useState(null);


  //solo un comentario para git   
  //otro
  useEffect(() => {
    const obtenerUsuarios = async () => {
      const { docs } = await db.collection('agenda').get();
      const nuevoArray = docs.map(item => ({id:item.id, ...item.data()}));
      setUsuarios(nuevoArray);
    }
    obtenerUsuarios()
  },[])


  const validarUsuarios = (e) => {
    e.preventDefault()

    if(!nombre.trim()){
      setError('El campo Nombre está vacío');
    } else if(!telefono.trim()){
      setError('El campo teléfono está vacío');
    }
    guardarEnDB()
  }

  const guardarEnDB = async () => {
    // acá recien agrego los datos al firestore de firebase.
    //db.collection('') seria la Tabla, como es una base de datos no relacional se llaman colecciones.

    try{
      const usuario = {
        nombre: nombre,
        telefono: telefono
      }
      const data = await db.collection('agenda').add(usuario);
      setAviso('Contacto Registrado');
    }catch(e){
      console.log(e);
    }
    setNombre('')
    setTelefono('')
    setInterval(() => {
      setAviso(null);
    }, 5000);
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Formulario de Usuarios</h2>
            <form onSubmit={validarUsuarios}
            className="form-group">
              <input
              value={nombre} 
              onChange={(e) => {setNombre(e.target.value)}}
              className="form-control"
              placeholder="Ingrese el nombre"
              maxLength="30"
              type="text"/>
              <input
              value={telefono}
              onChange={(e) => {setTelefono(e.target.value)}} 
              className="form-control mt-3"
              placeholder="Ingrese el número"
              maxLength="14"
              type="text"/>
              <input
              className="btn btn-primary btn-block mt-3" 
              type="submit" 
              value="Registrar"/>
            </form>
            {
              error ? 
              (<div>
                <p className="alert alert-danger">{error}</p>
              </div>)
              :
              (<span></span>)
            }
            {
              aviso ? 
              (<div>
                <p className="alert alert-success">{aviso}</p>
              </div>)
              :
              (<span></span>)
            }
          </div>
          <div className="col-md-6">
            <h2>Tu Agenda</h2>
            <ul className="mt-5">
            {
              usuarios.length !== 0 ?
              (
                
                usuarios.map((item) => (
                  <li key={item.id}>{item.nombre}     -   {item.telefono} </li>
                ))
                
              )
              :
              (
                <span className="alert alert-info mt-5"> No hay contactos en la agenda</span>
              )
            }
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
