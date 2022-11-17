import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Input.module.css';

function Input({label, type, name, placeholder, value, onChange}) {

  const theme = useSelector(state => state.theme);

  return (
    <>
      <label className={ styles.label }>{ label }</label>
        <input
          className={ `${styles.input} ${styles[theme]}` }
          type={ type }
          name={ name }
          placeholder={ placeholder }
          value={ value }
          onChange={ onChange }/>      
    </>
  );
}

export default Input;