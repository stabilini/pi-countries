import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import styles from './Country.module.css';

const Country = props => {
  return (
    <div key={props.id} className={ styles.container }>
      <img
        src={props.flag}
        alt={`Flag from ${props.name}`}
        className={ styles.flag }
      />
      <div className={ styles.infoSection }>
        <div className={ styles.title }>{props.name}</div>
        <div className={ styles.subTitle }>{props.continent}</div>
        <BrowserRouter>
          <Link to={`/countries/${props.id}`}>
            <button className={ styles.button }>Detail</button>
          </Link>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Country;