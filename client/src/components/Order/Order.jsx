import React from 'react';
import { useDispatch } from 'react-redux';
import { ordenPaises } from '../../redux/actions';

import styles from './Order.module.css';

const Order = () => {
  const dispatch = useDispatch();

  const handleSubmit1 = e => {
    e.preventDefault();
    dispatch(ordenPaises('name', 'asc'));
  };

  const handleSubmit2 = e => {
    e.preventDefault();
    dispatch(ordenPaises('name', 'desc'));
  };

  const handleSubmit3 = e => {
    e.preventDefault();
    dispatch(ordenPaises('population', 'asc'));
  };

  const handleSubmit4 = e => {
    e.preventDefault();
    dispatch(ordenPaises('population', 'desc'));
  };

  return (
    <div className={ styles.order }>
      <div className={ styles.title }>
        Order
      </div>
      <div className={ styles.buttons }>
        <button onClick={handleSubmit1}>A-Z</button>
        <button onClick={handleSubmit2}>Z-A</button>
      </div>
      <div className={ styles.buttons }>
        <button onClick={handleSubmit3}>Pop+</button>
        <button onClick={handleSubmit4}>Pop-</button>
      </div>
    </div>
  );
};

export default Order;