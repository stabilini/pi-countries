import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {

  const dispatch = useDispatch();
  const paises = useSelector(state => state.countries);

  React.useEffect(() => {
    dispatch(getCountries())
  }, [dispatch]);
  
  return (
    <div className='contenedor'>
      {
        paises &&
        paises.map(pais => {
            return (
              <div key={pais.id} className='pais'>
                <img src={pais.flag[1]} alt={`imagen de ${pais.name}`} className='bandera'/>
                <h3>{pais.name}</h3>
                <h4>{pais.continent}</h4>
                <Link to={`/home/${pais.id}`}><button>Detalles</button></Link>
              </div>
            );
          })
      }
    </div>
  );
};

export default Home;