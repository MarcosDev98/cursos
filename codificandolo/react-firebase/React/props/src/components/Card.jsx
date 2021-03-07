import React, { Fragment } from 'react';
import './Card.css';

function Card(props){

  const {imagen, titulo, texto} = props

  return(
    <Fragment>
      <div className="card">
        <img src={imagen} alt="..." className="card-img-top img-thumbnail" />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{texto}</p>
          <a href="#" className="btn btn-primary">Ver más</a>
        </div>
      </div>
    </Fragment>
  )

}

export default Card