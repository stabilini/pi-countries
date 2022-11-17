import React, { useState } from 'react';
import { getCountries } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './NavBar.module.css';
import logo from '../../assets/logo-globe.png';
import SelectTheme from '../SelectTheme/SelectTheme';
import Button from '../Button/Button';

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
          <Button text='Search' onClick={handleSubmit} />
        </div>
          <Button link='/newactivity' text='Create activity' />
      </div>
      <div className={ styles.exitContainer }>
        <SelectTheme />
        <Button link='/' text='Exit' />
      </div>
    </div>
  );
}

export default NavBar;