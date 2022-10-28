import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities } from '../../redux/actions';
import Pais from '../Country/Country';
import './countries.css';


const Countries = () => {

  const dispatch = useDispatch();
  const paises = useSelector(state => state.countries);

  React.useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities());
  }, [dispatch]);
  
  // logica que vea cuandos paises visibles hay y en base a eso muestre la cantidad de paginas 
  

  return (
    <div className='contenedor'>
      {
        paises &&
        paises.map(pais => {
            return (
              pais.c_visible && pais.a_visible ?
              <Pais
                key={pais.id}
                id={pais.id}
                flag={pais.flag[1]}
                name={pais.name}
                continent={pais.continent}
                activities={pais.activities}
              />
              : 
              <></>
            );
          })
      }
    </div>
  );
};

export default Countries;