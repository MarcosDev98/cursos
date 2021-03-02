import React, {Fragment, useState} from 'react'

const Listado = () =>{

  const [numeros, setNumeros] = useState([1,2,3,4,5,6,7])

  return (
    <Fragment>
      <ul>
        {
          numeros.map ( (item,index) => 
            <li key={index}>
              Elemento: {item} - Indice: {index}
              </li>
          )
        }
      </ul>
    </Fragment>
  )

}



export default Listado