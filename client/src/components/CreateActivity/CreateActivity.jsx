import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createActivity, getCountries } from '../../redux/actions';
import './CreateActivity.css';


const Form = (props) => {
  const [input, setInput] = useState({
    name: '',
    skill: '',
    term: '',
    season: '',
    country: '',
    countries: []
  });
  
  let countries = useSelector(state => state.countries);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  
  const handleInputCountries = (e) => {
    if (e.target.checked) {
      if (input.countries.indexOf(e.target.name) === -1) {
        setInput({
          ...input,
          countries: [...input.countries, e.target.name]
        })
      }
    } else {
      setInput({
        ...input,
        countries: input.countries.filter(item => item !== e.target.name)
      })
    }
  }

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getCountries())
  }, [dispatch]);


  const handleSubmit = (e) => {
    //e.preventDefault();
    dispatch(createActivity(input));
    // setInput({name: '',
    // skill: '',
    // term: '',
    // season: '',
    // country: '',
    // countries: []});
  }

  return (
    <>
      <form>
        <label>Nombre:</label>
        <input name='name' value={input.name} onChange={handleInputChange}/><br/>
        <label>Skill:</label>
        <input name='skill' value={input.skill}  onChange={handleInputChange}/><br/>
        <label>Duracion:</label>
        <input name='term' value={input.term}  onChange={handleInputChange}/><br/>
        <label>Temporada:</label>
        <input name='season' value={input.season} onChange={handleInputChange}/><br/>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
      <Link to='/countries'>
        <button>Volver a listado de paises</button>
      </Link>
      <br />
      <input name='country' value={input.country} onChange={handleInputChange}/><br/>
      {input.countries.length} paises elegidos
      <div className='box'>
      <ul>
        {
          countries
            .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            .filter(x => x.name.toLowerCase().includes(input.country.toLowerCase()))
            .map( c => (
              <li key={c.id}><input type='checkbox' onChange={handleInputCountries} name={c.id} defaultChecked={
                input.countries[c.id] ? true : false
              } />{c.name}</li>
            ))
        }
      </ul>
      </div>
  </>
  )
}


export default connect(null, { createActivity })(Form);
