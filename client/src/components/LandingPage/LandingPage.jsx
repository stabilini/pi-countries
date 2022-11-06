import React from 'react';
import { Link } from 'react-router-dom';
import landingBackImage from './mapa_fondo.jpg';
import styles from './landingpage.css';

const LandingPage = () => {
  return (
    <div className={ styles.landingPage }>
      <h1>Welocome to the Countries APP</h1>
      <img className={ styles.landingPageImage } src={ landingBackImage } alt="Landing page background" />
      <Link to="/countries">
        <button>Start</button>
      </Link>
    </div>
  );
};

export default LandingPage;
