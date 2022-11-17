import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Button2.module.css';

function Button2({text, onClick, selected}) {

  const theme = useSelector(state => state.theme);

  return (
    <button
      className={ selected ? (`${styles.button2} ${styles.button2Selected} ${styles[theme]}`) : (`${styles.button2} ${styles[theme]}`) }
      onClick={ onClick }
      >
      { text }
      </button>
  );
}

export default Button2;