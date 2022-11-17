import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { orderCountries } from '../../redux/actions';

import Button2 from '../Button2/Button2';

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
      <div className={ `${styles.title} ${styles.small}` }>Order</div>
      <div className={ `${styles.title} ${styles.large}` }>Order countries:</div>
      <div className={ `${styles.buttonsGroup} ${styles.small}` }>
        <div className={ styles.buttons }>
          <Button2 selected={order.asc === 'name'} onClick={handleSubmit1} text='A-Z' />
          <Button2 selected={order.desc === 'name'} onClick={handleSubmit2} text='Z-A' />
        </div>
        <div className={ styles.buttons }>
          <Button2 selected={order.asc === 'population'} onClick={handleSubmit3} text='Pop-' />
          <Button2 selected={order.desc === 'population'} onClick={handleSubmit4} text='Pop+' />
        </div>
        <div className={ styles.buttons }>
          <Button2 selected={ false } onClick={handleSubmit5} text='Random' />
        </div>
      </div>
      <div className={ `${styles.buttonsGroup} ${styles.large}` }>
        <div className={ styles.buttons }>
          <Button2 selected={order.asc === 'name'} onClick={handleSubmit1} text='Alphabetically A to Z' />
          <Button2 selected={order.desc === 'name'} onClick={handleSubmit2} text='Alphabetically Z to A' />
        </div>
        <div className={ styles.buttons }>
          <Button2 selected={order.asc === 'population'} onClick={handleSubmit3} text='Population low to high' />
          <Button2 selected={order.desc === 'population'} onClick={handleSubmit4} text='Population high to low' />
        </div>
        <div className={ styles.buttons }>
          <Button2 selected={ false } onClick={handleSubmit5} text='Random' />
        </div>
      </div>
    </div>
  );
};

export default Order;