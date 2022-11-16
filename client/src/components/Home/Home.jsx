import React from 'react';
import { useSelector } from 'react-redux';

import NavBar from '../NavBar/NavBar.jsx';
import Countries from '../Countries/Countries.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import Order from '../Order/Order.jsx';
import FilterContinent from '../FilterContinent/FilterContinent.jsx';
import FilterActivity from '../FilterActivity/FilterActivity.jsx';

import styles from './Home.module.css';

const Home = () => {
  const theme = useSelector(state => state.theme);

  return (
    <div className={ `${styles.container} ${styles[theme]}` }>
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
