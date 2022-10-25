import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';

const BotonNew = (props) => {
  

  return (
    <>
      <Link to='/newactivity'>
        <button>Crear actividad</button>
      </Link>
    </>
  )
}

export default connect(null, { getCountries })(BotonNew);
