import React, {Fragment} from 'react';
import Bienvenida from './components/Bienvenida'
import Card from './components/Card';

function App() {
  return (
   <Fragment>
     {/* <Bienvenida nombre="Marcos" apellido="Aguado" edad="22" />
     <Bienvenida nombre="Catalina" apellido="Massone" edad="22" />
     <Bienvenida nombre="Juan" apellido="Perez" edad="45" />
     <Bienvenida nombre="Pedro" apellido="Gonzales" edad="32" /> */}
     <h1>Propiedades de los componentes</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card
              imagen="https://loremflickr.com/150/150" titulo="Titulo 1"
              texto="Texto del primer Card">
            </Card>
          </div>
          <div className="col-md-4">
          <Card
              imagen="https://placekitten.com/150/150"
              titulo="Titulo 2"
              texto="Texto del segundo Card">
            </Card>
          </div>
          <div className="col-md-4">
          <Card
              imagen="https://www.fillmurray.com/150/150"
              titulo="Titulo 3"
              texto="Texto del tercer Card">
            </Card>
          </div>
        </div>
      </div>
   </Fragment> 
  )
}

export default App;
