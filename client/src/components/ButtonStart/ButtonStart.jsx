import React from 'react';
import { Link } from 'react-router-dom';

// lo comentado es para hacerlo con hooks, ojo no va el connect en export
const ButtonStart = () => {

  return (
    <>
      <Link to='/countries'>
        <button>Ingresar a home</button>
      </Link>
    </>
  )
}

export default ButtonStart;