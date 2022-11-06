import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filtrarPaises } from '../../redux/actions';
import { useState } from 'react';

const FilterContinent = () => {
  const [input, setInput] = useState({
    Africa: true,
    Antarctica: true,
    Asia: true,
    Europe: true,
    Oceania: true,
    'South America': true,
    'North America': true,
  });

  const dispatch = useDispatch();

  const handleInputChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.checked,
    });
  };

  useEffect(() => {
    dispatch(filtrarPaises('continent', input));
  });

  return (
    <>
      <p>Select continent:</p>
      <ul>
        {Object.keys(input).map(cont => (
          <li key={cont}>
            <input
              type="checkbox"
              onChange={handleInputChange}
              name={cont}
              defaultChecked={input[cont]}
            />
            {cont}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilterContinent;