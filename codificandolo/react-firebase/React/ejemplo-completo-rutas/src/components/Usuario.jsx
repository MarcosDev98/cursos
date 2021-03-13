import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

function Usuario(){

  const [usuario, setUsuario] = useState([]);
  const {id} = useParams();



  const obtenerUsuario = async () => {
    const res = await axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.data;
    setUsuario(user);
  }


  useEffect(()=>{
    obtenerUsuario()
  },[])

  return(
    <Fragment>
      <h4>Usuario</h4>
      <p>Nombre: {usuario.name}</p>
      <p>Email: {usuario.email}</p>
      <small>Teléfono: {usuario.phone}</small>
    </Fragment>
  )
}


export default Usuario