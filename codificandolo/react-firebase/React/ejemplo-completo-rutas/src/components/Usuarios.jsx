import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Usuarios(){

  const [usuarios, setUsuarios] = useState([])

  const obtenerUsuarios = async () => {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');

    const users = await respuesta.data;
    setUsuarios(users);
    
  }
  
  //  El array vacío que paso al final es para las dependecias.
  //  Todavía no se bien como se usan,
  //  Pero si no paso el array vacio se genera un loop infinito.
  useEffect( () => {
    obtenerUsuarios()
  },[])


  return(
    <Fragment>
      <h2>Lista de Usuarios</h2>
      <div>
      {
        usuarios.map((item) => (
            <Fragment key={item.id}>
              <Link to={`/usuario/${item.id}`} key={item.id}>{item.name}</Link>
              <br/>
            </Fragment>
        )
          
        )
      }
      </div>
      

    </Fragment>
  )
}


export default Usuarios