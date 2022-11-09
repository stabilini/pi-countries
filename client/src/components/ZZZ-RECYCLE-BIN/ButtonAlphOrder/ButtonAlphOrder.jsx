import React from 'react';
import { useDispatch } from 'react-redux';
import { ordenPaises } from '../../../redux/actions';

const ButtonAlphOrder = () => {
  const dispatch = useDispatch();

  const handleSubmit1 = e => {
    e.preventDefault();
    dispatch(ordenPaises('name', 'asc'));
  };

  const handleSubmit2 = e => {
    e.preventDefault();
    dispatch(ordenPaises('name', 'desc'));
  };

  return (
    <>
      <button onClick={handleSubmit1}>A-Z</button>
      <button onClick={handleSubmit2}>Z-A</button>
    </>
  );
};

export default ButtonAlphOrder;