import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';

import { filterBy } from '../../redux/actions';

import Checkbox from '../Checkbox/Checkbox';

import styles from './FilterContinent.module.css'


const FilterContinent = () => {
  const continents = useSelector(state => state.filterContinent);
  const theme = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    continents[e.target.name] = e.target.checked;
    dispatch(filterBy('continent', continents));
  };

  return (
    <div className={ `${styles.container} ${styles[theme]}` }>
      <div className={ styles.title }>
        Continent
      </div>
      {Object.keys(continents).map(cont => (
        <div key={cont}>
          <Checkbox name={cont} text={cont} onChange={handleInputChange} defaultChecked={continents[cont]} />
        </div>
      ))}
    </div>
  );
};

export default FilterContinent;