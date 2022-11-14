import { getCountries } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';

import styles from './NavBar.module.css';
import logo from '../../assets/logo-globe.png';

function NavBar() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const name = query.get('name');

  const [input, setInput] = useState('');
  
  const dispatch = useDispatch();

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    //no conviene usar el siguiente dispatch porque llama al back, pero el readme del PI pide que se use la ruta con query
    dispatch(getCountries(input));
  };

  const useEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      //no conviene usar el siguiente dispatch porque llama al back, pero el readme del PI pide que se use la ruta con query
      dispatch(getCountries(input));
    }
  };

  useEffect(() => {
    if (name) setInput(name);
  }, [name]);

  return (
    <div className={ styles.container }>
      <div className={ styles.logoContainer }>
        <img src={logo} alt='logo' className={ styles.logo }/>
      </div>
      <div className={ styles.centerContainer }>
        <div className={ styles.center }>
          <input
            type="text"
            placeholder="Type text..."
            size="10"
            onChange={manejarCambio}
            value={input}
            onKeyUp={useEnter}
          />
          <button onClick={handleSubmit}>
            Search
          </button>
        </div>
          <Link to="/newactivity">
            <button>Create activity</button>
          </Link>
      </div>
      <div className={ styles.exitContainer }>
        <Link to="/">
          <button>Exit</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
