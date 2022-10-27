import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { useState } from 'react';
import { createActivity } from '../../redux/actions';


const Form = (props) => {
  // formulario controlado
  const [input, setInput] = useState({
    name: '',
    skill: '',
    term: '',
    season: ''
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createActivity(input));
    setInput({name: '',
    skill: '',
    term: '',
    season: ''})
  }
  
  //wanda repaso M2 1.59.0
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
  </>
  )
}


export default connect(null, { createActivity })(Form);
