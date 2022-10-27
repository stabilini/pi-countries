import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtrarPaises } from '../../redux/actions';
import { useState } from 'react';

const FilterContinent = () => {
  //let countries = useSelector(state => state.countries);

  const [input, setInput] = useState({});
  
  const dispatch = useDispatch();
  
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.checked
    })
  }
  // console.log(activities)
  
  useEffect(() => {
    dispatch(filtrarPaises('activities', input))
  })

  return (
    <>
      <p>Seleccione actividades:</p>
      <ul>
        {
          Object.keys(input).map( act => (
            <li><input type='checkbox' onChange={handleInputChange} name={act} defaultChecked={input[act]} />{act}</li>
          ))
        }
      </ul>
        
    </>
  )
}

export default FilterContinent;