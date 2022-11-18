import React from 'react';
import { useSelector } from 'react-redux';

import Country from '../Country/Country.jsx';

import styles from './Countries.module.css';

const Countries = () => {
  
  const countries = useSelector(state => state.countries);
  const continents = useSelector(state => state.filterContinent);
  const activities = useSelector(state => state.filterActivity);
  const order = useSelector(state => state.order);
  const theme = useSelector(state => state.theme);

  let keys_c = Object.keys(continents).filter(k => continents[k] === true)
  let keys_a = Object.keys(activities).filter(k => activities[k] === true)

  console.log(keys_a);

  let filtered = countries.filter(c => keys_c.includes(c.continent) && c.activities.some(obj => keys_a.includes(obj.name)))

  if (Object.keys(order)[0] === 'asc') {
    filtered = filtered.slice().sort((a, b) => a[order.asc] > b[order.asc] ? 1 : -1);
  } else if (Object.keys(order)[0] === 'desc' ){
    filtered = filtered.slice().sort((a, b) => a[order.desc] < b[order.desc] ? 1 : -1);
  } 
  
  const page = useSelector(state => state.page);

  return (
    <div className={ `${styles.container} ${styles[theme]} ${
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
        <h3 className={ `${styles.noResult} ${styles[theme]}` }>No results for given search options</h3>
      )}
    </div>
  );
};

export default Countries;