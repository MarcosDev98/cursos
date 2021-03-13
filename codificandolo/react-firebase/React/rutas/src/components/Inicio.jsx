import React, {Fragment} from 'react';
import { useParams } from 'react-router-dom';

function Inicio(){

  const {id,nombre} = useParams()

  return(
    <Fragment>
      <h1>Hola!!</h1>
      <h2>Estás en la página Inicio.</h2>
      <p>El dato que viajó como párametro por la ruta es <h3>ID: {id}</h3><h3>nombre: {nombre}</h3></p>
    </Fragment>
  )
}

export default Inicio