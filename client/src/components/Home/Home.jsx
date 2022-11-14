import React from 'react';

import NavBar from '../NavBar/NavBar';
import Countries from '../Countries/Countries';
import Pagination from '../Pagination/Pagination';
import Order from '../Order/Order';
import FilterContinent from '../FilterContinent/FilterContinent';
import FilterActivity from '../FilterActivity/FilterActivity';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={ styles.container }>
      <div className={ styles.header }>
        <NavBar />
      </div>
      <div className={ styles.order }>
        <Order />
      </div>
      <div className={ styles.continent }>
        <FilterContinent />
      </div>
      <div className={ styles.activity }>
        <FilterActivity />
      </div>
      <div className={ styles.grouped }>
        <div className={ styles.item }><Order /></div>
        <div className={ styles.item }><FilterContinent /></div>
        <div className={ styles.item }><FilterActivity /></div>
      </div>
      <div className={ styles.countries }>
        <Pagination />
        <Countries />
      </div>
    </div>
  );
};

export default Home;
