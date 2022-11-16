import { getCountries, setTheme } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
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
  
  const theme = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const handleInputChange = e => {
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

  // MEJORAR ESTO, QUE SEA UN INPUT SELECT CON VARIAS OPCIONES DE TEMAS
  const toggleTheme = e => {
    e.preventDefault();
    dispatch(setTheme(e.target.value));
  };

  useEffect(() => {
    if (name) setInput(name);
    
  }, [name]);

  return (
    <div className={ `${styles.container} ${styles[theme]}` }>
      <div className={ styles.logoContainer }>
        <img src={logo} alt='logo' className={ styles.logo }/>
      </div>
      <div className={ styles.centerContainer }>
        <div className={ styles.center }>
          <input
            type="text"
            placeholder="Type text..."
            size="10"
            onChange={handleInputChange}
            value={input}
            onKeyUp={useEnter}
          />
          <button onClick={handleSubmit} className={ `${styles.button} ${styles[theme]}` }>
            Search
          </button>
        </div>
          <Link to="/newactivity">
            <button className={ `${styles.button} ${styles[theme]}` }>Create activity</button>
          </Link>
      </div>
      <div className={ styles.exitContainer }>
        <select  className={ `${styles.button} ${styles[theme]}` } name="theme" id="theme" onChange={toggleTheme} value={theme}>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
          {/* <option value="Retro">Retro</option> */}
          <option value="Zen">Zen</option>
          <option value="Comp">Comp</option>
        </select>
        <Link to="/">
          <button className={ `${styles.button} ${styles[theme]}` }>Exit</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;