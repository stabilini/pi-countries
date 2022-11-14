import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { filterBy } from '../../redux/actions';

import styles from './FilterContinent.module.css'

const FilterContinent = () => {
  let continents = useSelector(state => state.filterContinent);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    continents[e.target.name] = e.target.checked;
    dispatch(filterBy('continent', continents));
  };

  return (
    <div className={ styles.container }>
      <div className={ styles.title }>
        Continent
      </div>
      {Object.keys(continents).map(cont => (
        <div key={cont}>
          <input
            type="checkbox"
            onChange={handleInputChange}
            name={cont}
            defaultChecked={continents[cont]}
          />
          {cont}
        </div>
      ))}
    </div>
  );
};

export default FilterContinent;