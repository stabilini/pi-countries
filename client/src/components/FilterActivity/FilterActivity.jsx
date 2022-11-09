import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtrarPaises, getFilterActivities } from '../../redux/actions';
import styles from './FilterActivity.module.css'

const FilterContinent = () => {
  let activities = useSelector(state => state.filterActivity);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    activities[e.target.name] = e.target.checked;
    dispatch(filtrarPaises('activities', activities));
  };

  useEffect(() => {
    dispatch(getFilterActivities());
  }, [dispatch]);

  return (
    <div className={ styles.filteractivity }>
      <div className={ styles.title }>
        Activities 
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
      
      {/* <ul>
        {Object.keys(activities).map(act => (
          <li key={act}>
            <input
              type="checkbox"
              onChange={handleInputChange}
              name={act}
              defaultChecked={activities[act]}
            />
            {act}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default FilterContinent;
