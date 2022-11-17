import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderCountries } from '../../redux/actions';

import styles from './Order.module.css';

const Order = () => {
  const dispatch = useDispatch();
  const order = useSelector(state => state.order);
  const theme = useSelector(state => state.theme);

  const handleSubmit1 = e => {
    e.preventDefault();
    dispatch(orderCountries('name', 'asc'));
  };

  const handleSubmit2 = e => {
    e.preventDefault();
    dispatch(orderCountries('name', 'desc'));
  };

  const handleSubmit3 = e => {
    e.preventDefault();
    dispatch(orderCountries('population', 'asc'));
  };

  const handleSubmit4 = e => {
    e.preventDefault();
    dispatch(orderCountries('population', 'desc'));
  };

  const handleSubmit5 = e => {
    e.preventDefault();
    dispatch(orderCountries('random'));
  };

  return (
    <div className={ `${styles.container} ${styles[theme]}` }>
      <div className={ `${styles.title} ${styles.small}` }>
        Order
      </div>
      <div className={ `${styles.title} ${styles.large}` }>
        Order countries:
      </div>
      <div className={ `${styles.buttonsGroup} ${styles.small}` }>
        <div className={ styles.buttons }>
          <button className={ `${(order.asc === 'name' ? styles.buttonSelected : styles.button)}` } onClick={handleSubmit1}>A-Z</button>
          <button className={ `${(order.desc === 'name' ? styles.buttonSelected : styles.button)}` } onClick={handleSubmit2}>Z-A</button>
        </div>
        <div className={ styles.buttons }>
          <button className={ `${(order.asc === 'population' ? styles.buttonSelected : styles.button)}` } onClick={handleSubmit3}>Pop-</button>
          <button className={ `${(order.desc === 'population' ? styles.buttonSelected : styles.button)}` } onClick={handleSubmit4}>Pop+</button>
        </div>
        <div className={ styles.buttons }>
          <button className={ styles.button } onClick={handleSubmit5}>Random</button>
        </div>
      </div>
      <div className={ `${styles.buttonsGroup} ${styles.large}` }>
        <div className={ styles.buttons }>
          <button className={ `${(order.asc === 'name' ? styles.buttonSelected : styles.button)}` } onClick={handleSubmit1}>Alphabetically A to Z</button>
          <button className={ `${(order.desc === 'name' ? styles.buttonSelected : styles.button)}` } onClick={handleSubmit2}>Alphabetically Z to A</button>
        </div>
        <div className={ styles.buttons }>
          <button className={ `${(order.asc === 'population' ? styles.buttonSelected : styles.button)}` } onClick={handleSubmit3}>Population low to high</button>
          <button className={ `${(order.desc === 'population' ? styles.buttonSelected : styles.button)}` } onClick={handleSubmit4}>Population high to low</button>
        </div>
        <div className={ styles.buttons }>
          <button className={ styles.button } onClick={handleSubmit5}>Random</button>
        </div>
      </div>
    </div>
  );
};

export default Order;