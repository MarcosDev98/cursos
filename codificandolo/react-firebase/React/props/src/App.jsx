import React, {Fragment} from 'react';
import Bienvenida from './components/Bienvenida'

function App() {
  return (
   <Fragment>
     <Bienvenida nombre="Marcos" apellido="Aguado" edad="22" />
     <Bienvenida nombre="Catalina" apellido="Massone" edad="22" />
     <Bienvenida nombre="Juan" apellido="Perez" edad="45" />
     <Bienvenida nombre="Pedro" apellido="Gonzales" edad="32" />
   </Fragment> 
  )
}

export default App;
