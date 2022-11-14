import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Country.module.css';

const Country = props => {
  return (
    <div key={props.id} className={ styles.container }>
      <img
        src={props.flag}
        alt={`imagen de ${props.name}`}
        className={ styles.flag }
      />
      <div className={ styles.infoSection }>
        <div className={ styles.title }>{props.name}</div>
        <div className={ styles.subTitle }>{props.continent}</div>
        <Link to={`/countries/${props.id}`}>
          <button className={ styles.button }>Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default Country;