import React from 'react';
import BotonIngreso from '../BotonIngreso/BotonIngreso';
import './landingpage.css';
import fondoLanding from './mapa_fondo.jpg'

const LandingPage = () => {
 
  return (
    <div className='landingpage'>
      <h1>landing page</h1>
      <img src={fondoLanding} alt='fondo landing page' />
      <BotonIngreso />
    </div>
  );
};

export default LandingPage;
