import React from 'react';
import NavBar from '../NavBar/NavBar';
import Paises from '../Paises/Paises';
import './home.css';

const Home = () => {
  
  return (
    <div className='contenedor'>
      <NavBar />
      <Paises />
    </div>
  );
};

export default Home;