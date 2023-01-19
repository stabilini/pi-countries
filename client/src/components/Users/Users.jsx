import React, { useEffect, useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setLoading, cleanError } from '../../redux/actions/index';
import { createUser, getUsers, cleanUser, deleteUser, updateUser } from '../../redux/actions/users';

import Button from '../Button/Button';
import Input from '../Input/Input';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';

import styles from './Users.module.css';


export function validate(input) {
  let errors = {};
  
  if (!input.mail) {
    errors.mail = 'A username is required.';
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.mail)) {
    errors.mail = 'Invalid username. It must be an email address.';
  }
  
  if (!input.pass) {
    errors.pass = 'A password is required.';
  } else if (!/^[a-zA-Z0-9-](?=.{7,})/.test(input.pass)) {
    errors.pass = 'Invalid password. It must contain at least 8 characters.';
  }

  return errors;
};

const Users = () => {
  const [input, setInput] = useState({
    mail: '',
    pass: '',
    find: '',
    updt: '',
  });
  const [errors, setErrors] = useState({});

  const error = useSelector(state => state.error);
  const theme = useSelector(state => state.theme);
  const loading = useSelector(state => state.loading);
  const users = useSelector(state => state.users);
  const user = useSelector(state => state.user);

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    return () => {
      dispatch(cleanUser());
      dispatch(cleanError());
      dispatch(setLoading(false));
      dispatch(getUsers());
    }
  }, [dispatch])

  const handleSubmitCreate = e => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(createUser(input));
    setInput({
      mail: '',
      pass: '',
      find: '',
      updt: '',
    });
    dispatch(getUsers());
  };

  const handleSubmitDelete = e => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(deleteUser({mail: e.target.value}));
    setInput({
        mail: '',
        pass: '',
        find: '',
        updt: '',
    });
    dispatch(getUsers());
  };

  const handleSubmitUpdate = e => {
    e.preventDefault();
    setInput({
      mail: '',
      pass: '',
      find: '',
      updt: e.target.value,
  });
  };

  const handleSubmitUpdateToBD = e => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(updateUser({mail: input.updt, pass: input.pass}));
    setInput({
        mail: '',
        pass: '',
        find: '',
        updt: '',
    });
    dispatch(getUsers());
  };

  return (
    <>
      {
        loading && !error ?
          <LoadingSpinner text='Waiting for response...' />
        :
        <>
          <div className={ `${styles.createActivityBackground} ${styles[theme]}` }></div>
          <div className={ styles.container }>
            <form className={ `${styles.form} ${styles[theme]}` }>
              {
                !error ? (
                  <>
                    { input.updt ?
                        <>
                          <div className={ styles.separator }></div>
                          <div className={ styles.sectionTitle }>Update user</div>
                          <div>{input.updt}</div>
                          <div className={ styles.separator }></div>
                          New password: 
                          <div className={ styles.section }>
                            <Input label='Password:' type='password' name='pass' value={input.pass} onChange={handleInputChange} />
                          </div>
                          { errors.pass ? 
                            <div className={ `${styles.error} ${styles[theme]}` }>{errors.pass}</div>
                            :
                            <div className={ styles.noerror }></div>
                          }
                          {
                            !input.pass || errors.pass
                            ?
                            <Button text='Update!' disabled={ true } />
                            :
                            <Button onClick={handleSubmitUpdateToBD} text='Update!' value={user.pass} />
                          }
                          <Button onClick={handleSubmitUpdate} text='Back to users' value='' />
                        </>
                        :
                        <>
                          <div className={ styles.sectionTitle }>Create new user (experimental)</div>
                          <div className={ styles.section }>
                            <Input label='Username:' type='text' name='mail' value={input.mail} onChange={handleInputChange} />
                          </div>
                          { errors.mail ? 
                            <div className={ `${styles.error} ${styles[theme]}` }>{errors.mail}</div>
                            :
                            <div className={ styles.noerror }></div>
                          }
                          <div className={ styles.section }>
                            <Input label='Password:' type='password' name='pass' value={input.pass} onChange={handleInputChange} />
                          </div>
                          { errors.pass ? 
                            <div className={ `${styles.error} ${styles[theme]}` }>{errors.pass}</div>
                            :
                            <div className={ styles.noerror }></div>
                          }
                          {
                            user.mail ?
                            <div className={ `${styles.createdok} ${styles[theme]}` }>
                              User "{`${user.mail}`}" created succsesfully.
                            </div>
                            :
                            null
                          }
                          <div className={ styles.section }>
                          {
                            !input.mail || !input.pass ||errors.mail || errors.pass
                            ?
                            <Button text='Create user' disabled={ true } />
                            :
                            <Button onClick={handleSubmitCreate} text='Create user' />
                          }
                          </div>
                          <div className={ styles.separator }></div>
                          <div className={ styles.sectionTitle }>Edit users:</div>
                          <div className={ styles.section }>
                            
                            <Input label='Find user:' type='text' name='find' value={input.find} onChange={handleInputChange} />
                            <div className={ `${styles.box} ${styles[theme]}` }>
                              <ul className={ `${styles.orderedList} ${styles[theme]}` }>
                                {users
                                  .sort((a, b) => (a.mail > b.mail ? 1 : b.mail > a.mail ? -1 : 0))
                                  .filter(user =>
                                    user.mail.toLowerCase().includes(input.find.toLowerCase())
                                  )
                                  .map(user => (
                                    <li key={user.mail}>
                                      <Button onClick={handleSubmitDelete} text='Delete' value={user.mail} />
                                      <Button onClick={handleSubmitUpdate} text='Update' value={user.mail} />
                                      {user.mail}
                                    </li>
                                  ))}
                              </ul>
                            </div>
                              
                          </div>
                          {/* { errors.tyc ? 
                            <div className={ `${styles.error} ${styles[theme]}` }>{errors.tyc}</div>
                            :
                            <div className={ styles.noerror }></div>
                          } */}
                          {/* {
                            user.name ?
                            <div className={ `${styles.createdok} ${styles[theme]}` }>
                              User "{`${user.name}`}" created succsesfully.
                            </div>
                            :
                            null
                          } */}
                          <div className={ styles.section }>
                          {/* {
                            !input.mail || !input.pass || !input.tyc ||errors.mail || errors.pass
                            ?
                            <Button text='Create user' disabled={ true } />
                            :
                            <Button onClick={handleSubmit} text='Create user' />
                          } */}
                          </div>
                          <Button link='/countries' text='Back to home' />
                        </>
                      }
                  </>
                )
                :
                (
                  <>
                    <div className={ styles.section }>
                      <h3>
                        An error ocurred: {error}
                      </h3>
                    </div>
                    <Button link='/users' text='Back to users' />
                  </>
                )
              }
            </form>
        </div>
        </>
      }
    </>
  );
};

export default Users;