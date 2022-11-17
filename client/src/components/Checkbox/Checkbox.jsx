import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Checkbox.module.css';

function Checkbox({text, onChange, defaultChecked}) {

  const theme = useSelector(state => state.theme);

  return (
    <>
      <label className={ `${styles.label} ${styles[theme]}` }>
        <input
          className={ `${styles.checkbox} ${styles[theme]}` }
          type="checkbox"
          onChange={onChange}
          name={text}
          defaultChecked={defaultChecked}
        />
        <span className={ `${styles.checkmark} ${styles[theme]}` }></span>
        </label>
      {text} 
    </>
  );
}

export default Checkbox;