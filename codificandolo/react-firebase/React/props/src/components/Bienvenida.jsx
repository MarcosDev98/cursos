import React, {Fragment} from 'react';

function Bienvenida(props){

    const {nombre, apellido, edad} = props

    return(
        <Fragment>
            <h1>Hola soy {nombre} {apellido}. Tengo {edad} años. </h1>
        </Fragment>
    )
}

export default Bienvenida