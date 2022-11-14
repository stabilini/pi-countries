import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBy, getFilterActivities } from '../../redux/actions';

import styles from './FilterActivity.module.css'

const FilterContinent = () => {
  let activities = useSelector(state => state.filterActivity);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    activities[e.target.name] = e.target.checked;
    dispatch(filterBy('activities', activities));
  };

  useEffect(() => {
    dispatch(getFilterActivities());
  }, [dispatch]);

  return (
    <div className={ styles.container }>
      <div className={ styles.title }>
        Activity 
      </div>
      {Object.keys(activities).map(act => (
        <div key={act}>
          <input
            type="checkbox"
            onChange={handleInputChange}
            name={act}
            defaultChecked={activities[act]}
          />
          {act}
        </div>
      ))}
    </div>
  );
};

export default FilterContinent;
