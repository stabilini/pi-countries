import { 
  GET_USERS,
  CREATE_USER,
  CLEAN_USER,
  DELETE_USER,
  UPDATE_USER,
  SET_ERROR,
  SET_LOADING,
  URL
  } from './../constants/index.js';


export const getUsers = (payload) => {
    return function(dispatch) {
        return fetch(URL + 'users', {
                    method: 'GET',
                    body: JSON.stringify(payload),
                    headers: {'Content-type': 'application/json; charset=UTF-8'}
                    })
        .then(res => res.json())
        .then(obj => obj.status === 'ok' ?
                        dispatch({type: GET_USERS, payload: obj.data})
                        :
                        dispatch({type: SET_ERROR, payload: obj.msg})
        )
        .catch(error => dispatch({type: SET_ERROR, payload: error.msg}))
    }
}

export const createUser = (payload) => {
  return function(dispatch) {
    return fetch(URL + 'users', {
                  method: 'POST',
                  body: JSON.stringify(payload),
                  headers: {'Content-type': 'application/json; charset=UTF-8'}
                })
      .then(res => res.json())
      .then(obj => obj.status === 'ok' ? 
                    dispatch({type: SET_LOADING, payload: false}) &&
                    dispatch({type: CREATE_USER, payload: obj.data})
                    :       
                    dispatch({type: SET_ERROR, payload: obj.msg})
      )
      .catch(error => dispatch({type: SET_ERROR, payload: error.msg}))
  }
}

export const deleteUser = (payload) => {
  return function(dispatch) {
    return fetch(URL + 'users', {
                  method: 'DELETE',
                  body: JSON.stringify(payload),
                  headers: {'Content-type': 'application/json; charset=UTF-8'}
                })
      .then(res => res.json())
      .then(obj => obj.status === 'ok' ? 
                    dispatch({type: SET_LOADING, payload: false}) &&
                    dispatch({type: UPDATE_USER, payload: obj.data})
                    :       
                    dispatch({type: SET_ERROR, payload: obj.msg})
      )
      .catch(error => dispatch({type: SET_ERROR, payload: error.msg}))
  }
}

export const updateUser = (payload) => {
  return function(dispatch) {
    return fetch(URL + 'users', {
                  method: 'PUT',
                  body: JSON.stringify(payload),
                  headers: {'Content-type': 'application/json; charset=UTF-8'}
                })
      .then(res => res.json())
      .then(obj => obj.status === 'ok' ? 
                    dispatch({type: SET_LOADING, payload: false}) &&
                    dispatch({type: DELETE_USER, payload: obj.data})
                    :       
                    dispatch({type: SET_ERROR, payload: obj.msg})
      )
      .catch(error => dispatch({type: SET_ERROR, payload: error.msg}))
  }
}

export const cleanUser = () => {
  return function(dispatch) {
    return dispatch({
      type: CLEAN_USER,
      payload: {}
    })
  }
}