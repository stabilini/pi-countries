import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const Pagination = () => {
  const [pages, setPages] = useState({
    actual: 1,
    pages: [1]
  });

  const dispatch = useDispatch();
  const paises = useSelector(state => state.countries);
  
  const handleInputChange = (e) => {
    setPages({
      ...pages,
      [e.target.name]: e.target.checked
    })
  }
  
  setPages({
    ...pages,
    actual: paises.length / 10
  })

  useEffect(() => {
    
    // dispatch(filtrarPaises('continent', input))
  })

  return (
    <>
      <p>Paginacion:</p>
      <ul>
        {pages.actual
          // Object.keys(input).map( cont => (
          //   <li key={cont}><input type='checkbox' onChange={handleInputChange} name={cont} defaultChecked={input[cont]} />{cont}</li>
          // ))
        }
      </ul>
        
    </>
  )
}

export default Pagination;
