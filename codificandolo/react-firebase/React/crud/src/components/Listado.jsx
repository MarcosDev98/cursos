import React, { Fragment, useState } from 'react';
import uniqid from 'uniqid';

function Listado() {
  const [nombre, setNombre] = useState('');
  const [listado, setListado] = useState([]);

  const RegistrarNombre = (e) => {
    e.preventDefault();

    const nuevoNombre = {
      id: uniqid(),
      nombre: nombre,
    };

    setListado([...listado, nuevoNombre]);
    setNombre('');
  };

  const borrarNombre = (id) => {
    const nuevoArray = listado.filter( item => item.id !== id)
    setListado(nuevoArray)
  }

  return (
    <Fragment>
      <h2 className="h2">APLICACIÓN CRUD BÁSICA</h2>
      <div className="row">
        <div className="col-md-8">
          <h2>Formulario para agregar nombres</h2>
          <form
            onSubmit={(e) => {
              RegistrarNombre(e);
            }}
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
              value="Registrar nombre"
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
                {item.nombre}
              </li>
            )}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Listado;
