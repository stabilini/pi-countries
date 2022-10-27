import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filtrarPaises } from '../../redux/actions';
import { useState } from 'react';

const FilterContinent = () => {
  const [input, setInput] = useState({
    Europe: true,
    Oceania: true,
    Americas: true,
    Africa: true,
    Asia: true,
    Antarctic: true
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.checked
    })
  }
  
  useEffect(() => {
    dispatch(filtrarPaises('continent', input))
  })

  return (
    <>
      <p>Seleccione continentes:</p>
      <ul>
        {
          Object.keys(input).map( cont => (
            <li><input type='checkbox' onChange={handleInputChange} name={cont} defaultChecked={input[cont]} />{cont}</li>
          ))
        }
      </ul>
        
    </>
  )
}

export default FilterContinent;