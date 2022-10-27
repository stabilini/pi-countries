import React from 'react';
import NavBar from '../NavBar/NavBar';
import Countries from '../Countries/Countries';
import './home.css';

const Home = () => {
  
  return (
    <div className='contenedor'>
      <NavBar />
      <Countries />
    </div>
  );
};

export default Home;