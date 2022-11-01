import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { setPageView } from '../../redux/actions';

const Pagination = () => {

  const dispatch = useDispatch();
  const paises = useSelector(state => state.countries);
  const page = useSelector(state => state.page);
  
  const handleInputChange = (e) => {
    dispatch(setPageView(e.target.value))
  }

  let filtrados = paises.filter(pais => pais.c_visible && pais.a_visible)
  let visibles = filtrados.length;

  return (
    <>{
      visibles < 9 ? null :
        <>
          <p>Paginas: {Math.ceil((visibles - 9) / 10) + 1}</p>
          {/* <ul> */}
            {
              [...Array(Math.ceil((visibles - 9) / 10) + 1).keys()].map(i => i + 1).map(i => (
                // <li>
                  <input type='button' onClick={handleInputChange} name={i} value={i} />
                // </li>
                )
              )
            }
          {/* </ul> */}
        </>
      }
    </>
  )
}

export default Pagination;
