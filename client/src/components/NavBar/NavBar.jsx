import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountries } from '../../redux/actions/countries';
import { setLoading } from '../../redux/actions/index';

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
    dispatch(setLoading(true));
    dispatch(getCountries(input));
  };

  const handleClear = e => {
    e.preventDefault();
    setInput('');
    dispatch(setLoading(true));
    dispatch(getCountries());
  };

  useEffect(() => {
    return () => {
      dispatch(setLoading(false));
    }
  }, [dispatch])

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
          {
            input ?
            <Button text='❌' onClick={handleClear} />
            :
            <></>
          }
          {
            !input
            ?
            <Button text='Search' disabled={ true } />
            :
            <Button onClick={handleSubmit} text='Search' />
          }
          
        </div>
        <div className={ styles.center }>
          <Button link='/newactivity' text='New activity' />
          <Button link='/users' text='Users' />
        </div>
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