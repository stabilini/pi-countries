import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createActivity, getCountries } from '../../redux/actions';

import styles from './CreateActivity.module.css';


export function validate(input) {
  let errors = {};
  
  if (!input.name) {
    errors.name = 'A name is required.';
  } else if (!/^[A-Za-z0-9\s]*$/.test(input.name)) {
    errors.name = 'Invalid name. Only letters and numbers are allowed.';
  }
  
  if (!input.duration) {
    errors.duration = 'A duration is required.';
  } else if (input.duration % 1 !== 0 || input.duration < 1 || input.duration > 60) {
    errors.duration = 'Invalid duration. Only between 1 and 60.';
  }

  if (input.countries.length === 0) {
    errors.countries = 'At least one country must be selected.';
  }
  return errors;
};

const Form = () => {
  const [input, setInput] = useState({
    name: '',
    skill: 1,
    duration: '',
    season: 'Winter',
    country: '',
    countries: [],
  });
  const [errors, setErrors] = useState({});

  let countries = useSelector(state => state.countries);

  const handleInputChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  const handleInputCountries = e => {
    if (e.target.checked) {
      if (input.countries.indexOf(e.target.name) === -1) {
        setInput({
          ...input,
          countries: [...input.countries, e.target.name],
        });
        setErrors(validate({
          ...input,
          countries: [...input.countries, e.target.name],
        }));
      }
    } else {
      setInput({
        ...input,
        countries: input.countries.filter(item => item !== e.target.name),
      });
      setErrors(validate({
        ...input,
        countries: input.countries.filter(item => item !== e.target.name),
      }));
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createActivity(input));
    setInput({
      name: '',
      skill: 1,
      duration: '',
      season: 'Winter',
      country: '',
      countries: []
    });
  };

  return (
    <>
      <div className={ styles.createActivityBackground }></div>
      <div className={ styles.container }>
        <form className={ styles.form }>
          <div className={ styles.section }>
            <label>Activity name:</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleInputChange}/>
          </div>
          { errors.name ? 
            <div className={ styles.error }>{errors.name}</div>
            :
            <div className={ styles.noerror }></div>
          }
          <div className={ styles.section }>
            <label>Skill:</label>
            {
              [1,2,3,4,5].map(i => (
                <Fragment key={i}>
                  <input type="radio" id={i} name="skill" value={i}
                  onChange={handleInputChange} checked={i === +input.skill ? true : false }/>
                  <label>{i}</label>
                </Fragment>
              ))
            }
          </div>
          <div className={ styles.section }>
            <label>Duration:</label>
            <input
              className={ styles.numberInput }
              type="number"
              maxLength="4"
              name="duration"
              id="duration"
              value={input.duration}
              onChange={handleInputChange} /> days.
          </div>
          { errors.duration ? 
            <div className={ styles.error }>{errors.duration}</div>
            :
            <div className={ styles.noerror }></div>
          }
          <div className={ styles.section }>
            <label>Season:</label>
            <select name="season" id="season" onChange={handleInputChange}>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
            </select>
          </div>
          <div className={ styles.section }>
            <label>Select countries:</label>
            <input
              type="text"
              name="country"
              id="country"
              value={input.country}
              onChange={handleInputChange}
            />
            <div className={ styles.box }>
              <ol>
                {countries
                  .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                  .filter(country =>
                    country.name.toLowerCase().includes(input.country.toLowerCase())
                  )
                  .map(country => (
                    <li key={country.id}>
                      <input
                        type="checkbox"
                        name={country.id}
                        id={country.id}
                        onChange={handleInputCountries}
                        checked={input.countries.includes(country.id) ? true : false}
                      />
                      {country.name}
                    </li>
                  ))}
              </ol>
            </div>
            <div>Selected: {input.countries.length}</div>
          </div>
          { errors.countries ? 
            <div className={ styles.error }>{errors.countries}</div>
            :
            <div className={ styles.noerror }></div>
          }
          <div className={ styles.section }>
            <button onClick={handleSubmit} disabled={!input.name || !input.duration || errors.name || errors.duration || input.countries.length === 0 ? true : false}>Create activity</button>
            <Link to="/countries">
              <button>Back to list</button>
            </Link>
          </div>
        </form>
      </div>
    
    </>
    
  );
};

export default Form;