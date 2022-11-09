import React from 'react';

import Order from '../Order/Order.jsx';
import FilterContinent from '../FilterContinent/FilterContinent.jsx';
import FilterActivity from '../FilterActivity/FilterActivity.jsx';

import styles from './OrderFilter.module.css';

const OrderFilter = () => {
  return (
    <div className= { styles.container }>
      <Order />
      <FilterContinent />
      <FilterActivity />
    </div>
  );
};

export default OrderFilter;