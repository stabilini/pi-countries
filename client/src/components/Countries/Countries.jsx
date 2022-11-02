import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities } from '../../redux/actions';
import { useLocation } from 'react-router-dom';
import Pais from '../Country/Country';
import './countries.css';

const Countries = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const name = query.get('name');

  const dispatch = useDispatch();
  const paises = useSelector(state => state.countries);
  const page = useSelector(state => state.page);

  React.useEffect(() => {
    dispatch(getCountries(name));
    dispatch(getActivities());
  }, [dispatch, name]);

  return (
    <div className="contenedorpaises">
      {paises.length > 0 ? (
        paises
          .filter(pais => pais.c_visible && pais.a_visible)
          .map((pais, i) => {
            return i >= (page === 1 ? 0 : page * 10 - 11) && i <= (page === 1 ? 8 : page * 10 - 2) ?
            (
              <Pais
                key={pais.id}
                id={pais.id}
                flag={pais.flag[1]}
                name={pais.name}
                continent={pais.continent}
                activities={pais.activities}
              />
            ) : (
              <></>
            );
          })
      ) : (
        <h2>Sin resultados</h2>
      )}
    </div>
  );
};

export default Countries;