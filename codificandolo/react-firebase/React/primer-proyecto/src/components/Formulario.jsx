import React, {Fragment} from 'react';


function Formulario(){
  return(
    <Fragment>
      <div className="container">
        <form className="form-group mt-3">
          <input placeholder="Introduzca el nombre" className="form-control mt-3" type="text"/>
          <input placeholder="Introduzca la edad" className="form-control mt-3" type="text"/>
          <input className="btn btn-info btn-block mt-3" type="submit"/>
        </form>
      </div>
    </Fragment>
  )
}


export default Formulario