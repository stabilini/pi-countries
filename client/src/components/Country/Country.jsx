import React from 'react';
import { Link } from 'react-router-dom';
import './country.css';


const Country = (props) => {

  return (
    
      <div key={props.id} className='pais'>
        <img src={props.flag} alt={`imagen de ${props.name}`} className='bandera'/>
        <h3>{props.name}</h3>
        <h4>{props.continent}</h4>
        <Link to={`/countries/${props.id}`}><button>Detalles</button></Link>
      </div>
            
   
  );
};

export default Country;