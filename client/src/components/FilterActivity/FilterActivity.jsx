import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtrarPaises } from '../../redux/actions';

const FilterContinent = () => {
  let activities = useSelector(state => state.activities);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    activities[e.target.name] = e.target.checked;
    dispatch(filtrarPaises('activities', activities));
  };

  return (
    <>
      <p>Select activities:</p>
      <ul>
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
      </ul>
    </>
  );
};

export default FilterContinent;
