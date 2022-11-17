import React from 'react';
import { useSelector } from 'react-redux';

import styles from './RadioButton.module.css';

function RadioButton({name, value, onChange, defaultChecked}) {

  const theme = useSelector(state => state.theme);

  return (
    <>
      <label className={ `${styles.label} ${styles[theme]}` }>
        <input
          className={ `${styles.checkbox} ${styles[theme]}` }
          type="radio"
          id={value}
          name={name}
          value={value}
          onChange={onChange}
          defaultChecked={defaultChecked}
        />
        <span className={ `${styles.checkmark} ${styles[theme]}` }></span>
      </label>
      {value}
      {/* <label className={ `${styles.label} ${styles[theme]}` }>
        <input
          className={ `${styles.checkbox} ${styles[theme]}` }
          type="checkbox"
          onChange={onChange}
          name={text}
          defaultChecked={defaultChecked}
        />
        <span className={ `${styles.checkmark} ${styles[theme]}` }></span>
        </label>
      {text}  */}
    </>
  );
}

export default RadioButton;