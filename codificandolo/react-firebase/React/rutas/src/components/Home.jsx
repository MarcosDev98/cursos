import React, {Fragment, useState, useEffect} from 'react';

function Home(){

  const [nombre, setNombre] = useState('marcos');

  useEffect(() =>{
    setTimeout( () => {
      setNombre('Antonio')
    },3500)
  })



  return(
    <Fragment>
      <h1>Hola!</h1>
      <h2>Estás en la página Home</h2>
      <h3>{nombre}</h3>

    </Fragment>
  )
}

export default Home