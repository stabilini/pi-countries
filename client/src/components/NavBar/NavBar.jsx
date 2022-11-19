import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountries } from '../../redux/actions';

import logo from '../../assets/logo-globe.png';
import SelectTheme from '../SelectTheme/SelectTheme';
import Button from '../Button/Button';
import Input from '../Input/Input';

import styles from './NavBar.module.css';

function NavBar() {

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

  return (
    <div className={ `${styles.container} ${styles[theme]}` }>
      <div className={ styles.logoContainer }>
        <img src={logo} alt='logo' className={ styles.logo }/>
      </div>
      <div className={ styles.centerContainer }>
        <div className={ styles.center }>
          <Input
            label=''
            type='text'
            name='name'
            placeholder="Type text..."
            value={input}
            onChange={handleInputChange} />
          <Button text='Search' onClick={handleSubmit} />
        </div>
          <Button link='/newactivity' text='Create activity' />
      </div>
      <div className={ styles.exitContainer }>
        <SelectTheme />
        <Button link='/about' text='About' />
        <Button link='/' text='Exit' />
      </div>
    </div>
  );
}

export default NavBar;