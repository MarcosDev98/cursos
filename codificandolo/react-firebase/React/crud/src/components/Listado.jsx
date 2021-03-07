import React, { Fragment, useState } from 'react';
import uniqid from 'uniqid';

function Listado() {
  const [nombre, setNombre] = useState('');
  const [listado, setListado] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [id, setId] = useState('');
  const [error, setError] = useState(null);

  const RegistrarNombre = (e) => {
    e.preventDefault();
    if (!nombre.trim()){
      setError('El campo nombre no debe estar vacío.')
      return
    }else{
      const nuevoNombre = {  
        id: uniqid(),
        nombre: nombre,
      };
  
      setListado([...listado, nuevoNombre]);
      setNombre('');
      setError(null);
    }
    
  };

  const borrarNombre = (id) => {
    const nuevoArray = listado.filter( item => item.id !== id)
    setListado(nuevoArray)
  }


  const editar = (item) => {
    
    setModoEdicion(true)
    setNombre(item.nombre)
    setId(item.id)
  }

  const editarNombre = (e) => {
    e.preventDefault();

    if(!nombre.trim()){
      setError('El campo nombre no debe estar vacío.');
      return;
    }else{
      const nuevoArray = listado.
      map( item => item.id === id ? {id: id, nombre: nombre}: item)
      setListado(nuevoArray);
      setModoEdicion(false);
      setNombre('');
      setError(null);
    }

    
  }

  return (
    <Fragment>
      <h2 className="h2">APLICACIÓN CRUD BÁSICA</h2>
      <div className="row">
        <div className="col-md-8">
          <h2>Formulario para agregar nombres</h2>
          <form
            onSubmit={
              modoEdicion ? editarNombre : RegistrarNombre}
            className="form-group"
          >
            <input
              id="inputNombre"
              className="form-control mt-3"
              placeholder="Introduce el Nombre"
              type="text"
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              value={nombre}
            />
            <input
              className="btn btn-info btn-block mt-3"
              value={modoEdicion ? 'EDITAR NOMBRE' : 'REGISTRAR NOMBRE'}
              type="submit"
            />
          </form>
        </div>
        <div className="col-md-4">
          <h2>Listado de Nombres</h2>
          <ul className="list-group">
            {listado.map( item => 
              <li 
              key={item.id} 
              className="list-group-item">
                <button 
                  className="btn btn-danger float-right"
                  onClick={()  => borrarNombre(item.id)}>
                  BORRAR
                </button>
                <button 
                  className="btn btn-info float-right"
                  onClick={()  => editar(item)}>
                  EDITAR
                </button>
                {item.nombre}
              </li>
            )}
          </ul>
          {
            error != null ? (
              <div className="alert alert-danger">
                {error}
              </div>
            ):
            (
              <div></div>
            )
          }
        </div>
      </div>
    </Fragment>
  );
}

export default Listado;
