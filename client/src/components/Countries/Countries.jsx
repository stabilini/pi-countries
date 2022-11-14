import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import { useLocation } from 'react-router-dom';

import Country from '../Country/Country';

import styles from './Countries.module.css';

const Countries = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const name = query.get('name');

  const dispatch = useDispatch();
  
  const countries = useSelector(state => state.countries);
  const continents = useSelector(state => state.filterContinent);
  const activities = useSelector(state => state.filterActivity);

  let keys_c = Object.keys(continents).filter(k => continents[k] === true)
  let keys_a = Object.keys(activities).filter(k => activities[k] === true)

  const filtered = countries.filter(c => keys_c.includes(c.continent) && c.activities.some(obj => keys_a.includes(obj.name)))
  const page = useSelector(state => state.page);


  useEffect(() => {
    dispatch(getCountries(name));
  }, [dispatch, name]);

  return (
    <div className={ `${styles.container} ${
      (page === 1 ? styles.container09 : styles.container10)}` }>
      {filtered.length > 0 ? (
        filtered
          .map((country, i) => {
            // confuso, pero se fija si el country debe ser mostrado en la page actual (9 en la 1ra, 10 en las demas)
            return i >= (page === 1 ? 0 : page * 10 - 11) && i <= (page === 1 ? 8 : page * 10 - 2) ?
            (
              <Country
                key={country.id}
                id={country.id}
                flag={country.flag}
                name={country.name}
                continent={country.continent}
                activities={country.activities}
              />
            ) : (
              null
            );
          })
      ) : (
        <h2>Sin resultados</h2>
      )}
    </div>
  );
};

export default Countries;