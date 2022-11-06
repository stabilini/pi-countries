import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createActivity, getCountries } from '../../redux/actions';
import './CreateActivity.css';

export function validate(input) {
  let errors = {};
  
  if (!input.name) {
    errors.name = 'A name is required.';
  } else if (!/^[A-Za-z\s]*$/.test(input.name)) {
    errors.name = 'Invalid name. Only letters and spaces are allowed.';
  }
  
  if (!input.duration) {
    errors.duration = 'A duration is required.';
  } else if (input.duration % 1 !== 0 || input.duration < 1 || input.duration > 60) {
    errors.duration = 'Invalid duration. Only numbers between 1 and 60 are allowed.';
  }

  if (input.countries.length === 0) {
    errors.countries = 'At least one country must be selected.';
  }
  console.log(errors)
  return errors;
};

const Form = props => {
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

  React.useEffect(() => {
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

  const useEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      getCountries(input);
      // setInput('');
    }
  };

  return (
    <>
      <form>
        <label>Activity name:</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleInputChange}
          onKeyUp={useEnter}/><br />
          {errors.name}<br />
        
        {/* puede ir <fieldset></fieldset> tambien, averiguar */}
        <label>Skill:</label>
        {
          [1,2,3,4,5].map(i => (
            <>
              <input type="radio" id={i} name="skill" value={i} onChange={handleInputChange} defaultChecked={i === input.skill}/>
              <label>{i}</label>
            </>
          ))
        }
        <br />
        <label>Duration:</label>
        <input
          type="number"
          name="duration"
          id="duration"
          value={input.duration}
          onChange={handleInputChange} />days<br />
          {errors.duration}<br />
        <label>Season:</label>
        <select name="season" id="season" onChange={handleInputChange}>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
        </select><br />
        <button onClick={handleSubmit} disabled={!input.name || !input.duration || errors.name || errors.duration || input.countries.length === 0 ? true : false}>Create activity</button>
      </form>
      {/* disabled={errors.name || errors.duration ? true : false} */}
      <Link to="/countries">
        <button>Back to countries list</button>
      </Link>
      <br />
      <label>Select countries:</label>
      <input
        type="text"
        name="country"
        id="country"
        value={input.country}
        onChange={handleInputChange}
      />
      <br />{errors.countries}<br />
      {input.countries.length} selected
      <div className="box">
        <ul>
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
                  defaultChecked={input.countries[country.id] ? true : false}
                />
                {country.name}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Form;