import React from 'react';
import ButtonStart from '../ButtonStart/ButtonStart';
import './landingpage.css';
import fondoLanding from './mapa_fondo.jpg'

const LandingPage = () => {
 
  return (
    <div className='landingpage'>
      <h1>landing page</h1>
      <img src={fondoLanding} alt='fondo landing page' />
      <ButtonStart />
    </div>
  );
};

export default LandingPage;
