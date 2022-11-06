import React from 'react';
import { useDispatch } from 'react-redux';
import { ordenPaises } from '../../redux/actions';

const ButtonPopOrder = () => {
  const dispatch = useDispatch();

  const handleSubmit1 = e => {
    e.preventDefault();
    dispatch(ordenPaises('population', 'asc'));
  };

  const handleSubmit2 = e => {
    e.preventDefault();
    dispatch(ordenPaises('population', 'desc'));
  };

  return (
    <>
      <button onClick={handleSubmit1}>Population +</button>
      <button onClick={handleSubmit2}>Population -</button>
    </>
  );
};

export default ButtonPopOrder;
