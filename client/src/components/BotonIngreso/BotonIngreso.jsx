import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';

// lo comentado es para hacerlo con hooks, ojo no va el connect en export
const BotonIngreso = () => {

  return (
    <>
      <Link to='/countries'>
        <button>Ingresar a home</button>
      </Link>
    </>
  )
}

export default BotonIngreso;