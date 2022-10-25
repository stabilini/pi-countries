import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import Pais from '../Pais/Pais';
import './paises.css';


const Paises = () => {

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
              <Pais
                key={pais.id}
                id={pais.id}
                flag={pais.flag[1]}
                name={pais.name}
                continent={pais.continent}
              />
            );
          })
      }
    </div>
  );
};

export default Paises;