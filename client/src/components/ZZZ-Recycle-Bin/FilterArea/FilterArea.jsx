import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { filterBy } from '../../../redux/actions';
import Checkbox from '../../Checkbox/Checkbox';

import styles from './FilterArea.module.css'

const FilterArea = () => {
  const areas = useSelector(state => state.filterArea);
  const theme = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    areas[e.target.name] = e.target.checked;
    dispatch(filterBy('area', areas));
  };

  return (
    <div className={ `${styles.container} ${styles[theme]}` }>
      <div className={ styles.title }>
        Areas
      </div>
      {Object.keys(areas).map(area => (
        <div key={area}>
          <Checkbox text={area} onChange={handleInputChange} defaultChecked={areas[area]} />
        </div>
      ))}
    </div>
  );
};

export default FilterArea;