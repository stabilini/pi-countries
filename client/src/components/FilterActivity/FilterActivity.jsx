import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterBy } from '../../redux/actions/order_filter';
import { getFilterActivities } from '../../redux/actions/activities';

import Checkbox from '../Checkbox/Checkbox';

import styles from './FilterActivity.module.css'


const FilterContinent = () => {
  const activities = useSelector(state => state.filterActivity);
  const theme = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    activities[e.target.name] = e.target.checked;
    dispatch(filterBy('activities', activities));
  };

  useEffect(() => {
    dispatch(getFilterActivities());
  }, [dispatch]);

  return (
    <div className={ `${styles.container} ${styles[theme]}` }>
      <div className={ styles.title }>
        Activity 
      </div>
      <div className={ styles.box }>
      {Object.keys(activities).map(act => (
        <div key={act}>
          <Checkbox text={act} name={act} onChange={handleInputChange} defaultChecked={activities[act]} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default FilterContinent;