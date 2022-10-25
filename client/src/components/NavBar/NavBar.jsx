import './navbar.css';
import { getCountries } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import React, { useState } from "react";

function NavBar() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    dispatch(getCountries(input));
    setInput('');
  };

  const usarEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      getCountries(input);
      setInput('');
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
    </div>
  );
}

export default NavBar;
