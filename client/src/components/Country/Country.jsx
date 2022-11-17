import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Country.module.css';

const Country = props => {
  const theme = useSelector(state => state.theme);
  
  return (
    <div key={props.id} className={ `${styles.container} ${styles[theme]}` }>
      <Link to={`/countries/${props.id}`}>
        <img
          src={props.flag}
          alt={`Flag from ${props.name}`}
          className={ `${styles.flag} ${styles[theme]}` }
        />
      </Link>
      <div className={ styles.infoSection }>
        <div className={ styles.title }>{props.name}</div>
        <div className={ styles.subTitle }>{props.continent}</div>
      </div>
    </div>
  );
};

export default Country;