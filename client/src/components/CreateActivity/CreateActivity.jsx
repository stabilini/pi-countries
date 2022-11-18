import React, { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createActivity, getCountries } from '../../redux/actions';

import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import RadioButton from '../RadioButton/RadioButton';
import Input from '../Input/Input';
// import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';

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

const CreateActivity = () => {
  const [input, setInput] = useState({
    name: '',
    skill: 1,
    duration: '',
    season: 'Winter',
    country: '',
    countries: [],
  });
  const [errors, setErrors] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  const countries = useSelector(state => state.countries);
  const theme = useSelector(state => state.theme);

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
   
    // return setIsLoading(false);
  }, [dispatch])

  const handleSubmit = e => {
    // setIsLoading(true);
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
      {/* {
        isLoading ? <LoadingSpinner /> : */}
        {/* <> */}
        <div className={ `${styles.createActivityBackground} ${styles[theme]}` }></div>
        <div className={ styles.container }>
          <form className={ `${styles.form} ${styles[theme]}` }>
            <div className={ styles.section }>
              <Input label='Activity name:' type='text' name='name' value={input.name} onChange={handleInputChange} />
            </div>
            { errors.name ? 
              <div className={ `${styles.error} ${styles[theme]}` }>{errors.name}</div>
              :
              <div className={ styles.noerror }></div>
            }
            <div className={ styles.section }>
              <div className={ styles.skillLabel }>
                <label>Skill:</label>
              </div>
              <div className={ styles.skill }>
                {
                  [1,2,3,4,5].map(i => (
                    <RadioButton key={i} name='skill' value={i} onChange={handleInputChange} defaultChecked={i === +input.skill ? true : false } />
                  ))
                }
              </div>
            </div>
            <div className={ styles.section }>
              <Input label='Duration:' type='number' name='duration' value={input.duration} onChange={handleInputChange} /> days.
            </div>
            { errors.duration ? 
              <div className={ `${styles.error} ${styles[theme]}` }>{errors.duration}</div>
              :
              <div className={ styles.noerror }></div>
            }
            <div className={ styles.section }>
              <label className={ styles.label }>Season:</label>
              <select name="season" id="season" onChange={handleInputChange}>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
              </select>
            </div>
            <div className={ styles.section }>
              <Input label='Select countries:' type='text' name='country' value={input.country} onChange={handleInputChange} />
              <div className={ `${styles.box} ${styles[theme]}` }>
                <ol className={ `${styles.orderedList} ${styles[theme]}` }>
                  {countries
                    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
                    .filter(country =>
                      country.name.toLowerCase().includes(input.country.toLowerCase())
                    )
                    .map(country => (
                      <li key={country.id}>
                        <Checkbox name={country.id} text={country.name} onChange={handleInputCountries} defaultChecked={input.countries.includes(country.id) ? true : false} />
                      </li>
                    ))}
                </ol>
              </div>
              <div>Selected: {input.countries.length}</div>
            </div>
            { errors.countries ? 
              <div className={ `${styles.error} ${styles[theme]}` }>{errors.countries}</div>
              :
              <div className={ styles.noerror }></div>
            }
            <div className={ styles.section }>
            {
              !input.name || !input.duration || errors.name || errors.duration || input.countries.length === 0
              ?
              <Button text='Create activity' disabled={ true } />
              :
              <Button onClick={handleSubmit} text='Create activity' />
            }
              <Button link='/countries' text='Back to list' />
            </div>
          </form>
        </div>
        {/* </>
      } */}
    </>
    
  );
};

export default CreateActivity;