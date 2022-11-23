import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Button.module.css';

function Button({link, text, onClick, disabled, value}) {

  const theme = useSelector(state => state.theme);

  return (
    <>
      {
        disabled ?
        <button className={ `${styles.button} ${styles[theme]}` } disabled>{ text }</button>
        :
          link ?
          <Link to={ link }>
            <button onClick={ onClick } className={ `${styles.button} ${styles[theme]}` }>{ text }</button>
          </Link>
          :
          <button onClick={ onClick } className={ `${styles.button} ${styles[theme]}` } value={value}>{ text }</button>
      }      
    </>
  );
}

export default Button;