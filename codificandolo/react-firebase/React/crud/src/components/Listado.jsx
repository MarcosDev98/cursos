import React, {Fragment, useState} from 'react';
import uniqid from 'uniqid'


function Listado(){

  const [nombre, setNombre] = useState("")
  const [listado, setListado] = useState([])



  const RegistrarNombre = (e) =>{
    e.preventDefault()
    
    const nuevoNombre = {
      id: uniqid(),
      nombre: nombre,
    }
      
    setListado([...listado, nuevoNombre])
  }


  return(
    <Fragment>
      <h2 className="h2">APLICACIÓN CRUD BÁSICA</h2>
      <div className="row">
        <div className="col-md-8">
          <h2>Formulario para agregar nombres</h2>
          <form onSubmit={(e) => {RegistrarNombre(e)}} className="form-group">
            <input
            id="inputNombre" 
            className="form-control mt-3" 
            placeholder="Introduce el Nombre" 
            type="text"
            onChange={(e) => {
              setNombre(e.target.value)
            }}/>
            <input 
            className="btn btn-info btn-block mt-3" 
            value="Registrar nombre" 
            type="submit"/>
          </form>
        </div>
        <div className="col-md-4">
        <h2>Listado de Nombres</h2>
        </div>
      </div>
    </Fragment>
  )
}

export default Listado