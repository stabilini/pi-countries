import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { useDispatch } from 'react-redux';
import { ordenPaises } from '../../../redux/actions';

// opcion 1 con un boton 
const BotonOrdenAlf = () => {
  const [input, setInput] = useState({
    orden: 'asc'
  });

  const dispatch = useDispatch();
  //const paises = useSelector(state => state.countries);

  const handleSubmit1 = (e) => {
    e.preventDefault();
    dispatch(ordenPaises('name', input.orden));
    setInput({
      ...input,
      orden: input.orden === 'asc' ? 'desc' : 'asc'
    })
  }

  const handleSubmit2 = (e) => {
    e.preventDefault();
    dispatch(ordenPaises('population', input.orden));
    setInput({
      ...input,
      orden: input.orden === 'asc' ? 'desc' : 'asc'
    })
  }

  return (
    <>
      
        <button onClick={handleSubmit1}>{input.orden === 'asc' ? 'Ordenar ascendente' : 'Ordenar descendente'}</button>
        <button onClick={handleSubmit2}>{input.orden === 'asc' ? 'Ordenar ascendente' : 'Ordenar descendente'}</button>
      
    </>
  )
}

export default BotonOrdenAlf;