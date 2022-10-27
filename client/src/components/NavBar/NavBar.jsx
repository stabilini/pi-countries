import './navbar.css';
import { getCountries } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useState } from "react";

import ButtonAlphOrder from '../ButtonAlphOrder/ButtonAlphOrder.jsx';
import ButtonPopOrder from '../ButtonPopOrder/ButtonPopOrder.jsx';
import FilterContinent from '../FilterContinent/FilterContinent.jsx';
import FilterActivity from '../FilterActivity/FilterActivity.jsx';

function NavBar() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    dispatch(getCountries(input));
    // setInput('');
  };

  const usarEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      getCountries(input);
      // setInput('');
    }
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Ingrese texto...'
        className='input'
        onChange={manejarCambio}
        value={input}
        // autofocus
        onKeyUp={usarEnter}
      />
      &nbsp;
      <button className='boton' onClick={manejarEnvio}>
        Buscar paises
      </button>
      &nbsp;
      <Link to='/newactivity'>
        <button>Crear actividades</button>
      </Link>&nbsp;
      <ButtonAlphOrder />&nbsp;
      <ButtonPopOrder />
      <div>
        <FilterContinent />
      </div>
      <div>
        <FilterActivity />
      </div>
    </div>
  );
}

export default NavBar;
