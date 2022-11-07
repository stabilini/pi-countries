import React from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { filtrarPaises } from '../../redux/actions';

const FilterContinent = () => {
  let continents = useSelector(state => state.filterContinent);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    continents[e.target.name] = e.target.checked;
    dispatch(filtrarPaises('continent', continents));
  };

  return (
    <>
      <p>Select continent:</p>
      <ul>
        {Object.keys(continents).map(cont => (
          <li key={cont}>
            <input
              type="checkbox"
              onChange={handleInputChange}
              name={cont}
              defaultChecked={continents[cont]}
            />
            {cont}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilterContinent;