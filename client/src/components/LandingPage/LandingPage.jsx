import React from 'react';
import { Link } from 'react-router-dom';
import landingBackImage from './mapa_fondo.jpg';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={ styles.landingBackground }>
      <div className={ styles.container }>
        <div className= { styles.globe }>
          <h1>Countries<br />&<br />Activities</h1>
        </div>
        <div className= { styles.globe }>
          <Link to="/countries">
            <button>Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
