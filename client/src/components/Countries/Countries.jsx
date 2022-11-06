import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities } from '../../redux/actions';
import { useLocation } from 'react-router-dom';
import Country from '../Country/Country';
import './countries.css';

const Countries = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const name = query.get('name');

  const dispatch = useDispatch();
  const countryes = useSelector(state => state.countries);
  const filtered = countryes.filter(country => country.c_visible && country.a_visible);
  const page = useSelector(state => state.page);


  React.useEffect(() => {
    dispatch(getCountries(name));
    dispatch(getActivities());
  }, [dispatch, name]);

  return (
    <div className="countriescontainer">
      {filtered.length > 0 ? (
        filtered
          .map((country, i) => {
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