import React from 'react';
import { setTheme } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SelectTheme.module.css';

function SelectTheme() {
  const theme = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const toggleTheme = e => {
    e.preventDefault();
    dispatch(setTheme(e.target.value));
  };

  return (
    <>
      <select  className={ `${styles.button} ${styles[theme]}` } name="theme" id="theme" onChange={toggleTheme} value={theme}>
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
        {/* <option value="Retro">Retro</option> */}
        <option value="Zen">Zen</option>
        <option value="Comp">Comp</option>
      </select>
      
    </>
  );
}

export default SelectTheme;