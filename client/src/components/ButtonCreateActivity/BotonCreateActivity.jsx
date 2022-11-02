import React from 'react';
import { Link } from 'react-router-dom';

const BotonCreateActivity = () => {
  return (
    <>
      <Link to="/newactivity">
        <button>Crear actividad</button>
      </Link>
    </>
  );
};

export default BotonCreateActivity;
