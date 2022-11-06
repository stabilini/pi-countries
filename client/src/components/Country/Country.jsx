import React from 'react';
import { Link } from 'react-router-dom';
import './country.css';

const Country = props => {
  //let actividades = props.activities.map(a => a.name);

  return (
    <div key={props.id} className="country">
      <img
        src={props.flag}
        alt={`imagen de ${props.name}`}
        className="flag"
      />
      <h3>{props.name}</h3>
      <h4>{props.continent}</h4>
      {/* <p>{actividades}</p> */}
      <Link to={`/countries/${props.id}`}>
        <button>Detail</button>
      </Link>
    </div>
  );
};

export default Country;
