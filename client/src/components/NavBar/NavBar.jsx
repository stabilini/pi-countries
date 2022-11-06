import './navbar.css';
import { getCountries } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';

import ButtonAlphOrder from '../ButtonAlphOrder/ButtonAlphOrder.jsx';
import ButtonPopOrder from '../ButtonPopOrder/ButtonPopOrder.jsx';
import FilterContinent from '../FilterContinent/FilterContinent.jsx';
import FilterActivity from '../FilterActivity/FilterActivity.jsx';
import Pagination from '../Pagination/Pagination';

function NavBar() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const name = query.get('name');

  const [input, setInput] = useState('');
  //if (name) setInput(name);

  const dispatch = useDispatch();

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    //conviene usar el siguiente dispatch, pero el PI pide que se use la ruta con query
    dispatch(getCountries(input));

    // setInput('');
  };

  const useEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      dispatch(getCountries(input));
      // setInput('');
    }
  };

  useEffect(() => {
    if (name) setInput(name);
  }, [name]);

  return (
    <>
      <div className="container">
        <div className="parte1">
          <input
            type="text"
            placeholder="Type text..."
            className="input"
            onChange={manejarCambio}
            value={input}
            onKeyUp={useEnter}
          />
          &nbsp;
          <button className="boton" onClick={handleSubmit}>
            Search countries
          </button>
          {/* <Link to={`/countries?name=${input}`}>
            <button>Buscar paises</button>
          </Link> */}
          &nbsp;
          <Link to="/newactivity">
            <button>Create activity</button>
          </Link>
        </div>

        <div className="orden">
          <ButtonAlphOrder />
          &nbsp;
          <ButtonPopOrder />
        </div>
      </div>
      <div className="container">
        <div className="filtercontinent">
          <FilterContinent />
        </div>
        <div className="filteractivity">
          <FilterActivity />
        </div>
        <div className="pagination">
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default NavBar;
