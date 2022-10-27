import React from 'react';
import { useDispatch } from 'react-redux';
import { ordenPaises } from '../../redux/actions';

const ButtonAlphOrder = () => {
  
  const dispatch = useDispatch();

  const handleSubmit1 = (e) => {
    e.preventDefault();
    dispatch(ordenPaises('name', 'asc'));
  }

  const handleSubmit2 = (e) => {
    e.preventDefault();
    dispatch(ordenPaises('name', 'desc'));
  }

  return (
    <>
        <button onClick={handleSubmit1}>Ordenar ascendente alfabetico</button>&nbsp;
        <button onClick={handleSubmit2}>Ordenar descendente alfabetico</button>
    </>
  )
}

export default ButtonAlphOrder;