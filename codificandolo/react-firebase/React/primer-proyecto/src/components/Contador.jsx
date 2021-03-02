import React, {Fragment, useState} from 'react'



   const Contador = () => {

    const [numero, setNumero] = useState(0)

    const Aumentar = () =>{
      setNumero(numero + 1)
    }
  
    const Reducir = () =>{
      setNumero(numero - 1)
    }
  

  

  return(
    <Fragment>
      <h3>Cantidad del contador: {numero}</h3>
      <button onClick={Aumentar}>Aumentar</button>
      <button onClick={Reducir}>Reducir</button>
    </Fragment>
  )
}

export default Contador