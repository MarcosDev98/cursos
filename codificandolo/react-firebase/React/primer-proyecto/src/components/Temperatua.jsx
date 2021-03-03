import React, {Fragment, useState} from 'react'

const Temperatura = () =>{

  const [temperatura, setTemperatura] = useState(19)

  const subir = () =>{
    setTemperatura(temperatura + 1)
  }

  const bajar = () =>{
    setTemperatura(temperatura - 1)
  }


  return(
    <Fragment>
      <h2>La temepratura es: {temperatura}</h2>
      <p>
        {
        temperatura > 21 
        ? 'Hace calorcito' 
        : 'Hace fresquito'
        }
      </p>
      <button className="btn btn-outline-info" onClick={subir}>Aumentar</button>
      <button className="btn btn-outline-info" onClick={bajar}>Reducir</button>
    </Fragment>
  )

}



export default Temperatura