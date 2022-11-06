import React from 'react';
import { Link } from 'react-router-dom';

const ButtonStart = () => {
  return (
    <>
      <Link to="/countries">
        <button>Ingresar a home</button>
      </Link>
    </>
  );
};

export default ButtonStart;
