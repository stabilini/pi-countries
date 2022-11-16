import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <>
      <div className={ styles.landingBackground }></div>
      <div className={ styles.globesContainer }>
        <div className={ styles.globe }>
          <div className={ styles.logo }>
            <span className={ styles.text }>Countries</span>
            <span className={ styles.ampersand }>&</span>
            <span className={ styles.text }>Activities</span>
          </div>
        </div>
        <div className= { styles.globe }>
          <Link to="/countries">
            <button>Start</button>
          </Link>
        </div>
      </div>
      <div className={ styles.footer }>
        <div className={ styles.footerText }>
          Henry Individual Project
        </div>
      </div>
    </>
    
  );
};

export default LandingPage;