import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Country.module.css';

const Country = props => {
  const theme = useSelector(state => state.theme);
  
  return (
    <div key={props.id} className={ `${styles.container} ${styles[theme]}` }>
      <img
        src={props.flag}
        alt={`Flag from ${props.name}`}
        className={ `${styles.flag} ${styles[theme]}` }
      />
      <div className={ styles.infoSection }>
        <div className={ styles.title }>{props.name}</div>
        <div className={ styles.subTitle }>{props.continent}</div>
        <Link to={`/countries/${props.id}`}>
          <button className={ `${styles.button} ${styles[theme]}` }>Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default Country;