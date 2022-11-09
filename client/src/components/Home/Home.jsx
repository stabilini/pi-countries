import React from 'react';
import NavBar from '../NavBar/NavBar';
import OrderFilter from '../OrderFilter/OrderFilter';
import Countries from '../Countries/Countries';
import Pagination from '../Pagination/Pagination';

import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <NavBar  />
      <div className={ styles.main }>
        <div className={ styles.column1 }>
          <OrderFilter />
        </div>
        <div>
          <Countries />
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Home;
