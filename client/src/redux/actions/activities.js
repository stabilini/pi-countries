import { 
  CREATE_ACTIVITY,
  CLEAN_ACTIVITY,
  FILTER_ACTIVITY,
  SET_ERROR,
  SET_LOADING,
  URL
  } from './../constants/index.js';


export const getFilterActivities = () => {
  return function(dispatch) {
    return fetch(URL + 'activities')
      .then(res => res.json())
      .then(obj => obj.status === 'ok' ?
                    dispatch({type: FILTER_ACTIVITY, payload: obj.data})
                    :
                    dispatch({type: SET_ERROR, payload: obj.msg})
      )
      .catch(error => dispatch({type: SET_ERROR, payload: error.msg}))
  }
}

export const createActivity = (payload) => {
  return function(dispatch) {
    return fetch(URL + 'activities', {
                  method: 'POST',
                  body: JSON.stringify(payload),
                  headers: {'Content-type': 'application/json; charset=UTF-8'}
                })
      .then(res => res.json())
      .then(obj => obj.status === 'ok' ? 
                    dispatch({type: SET_LOADING, payload: false}) &&
                    dispatch({type: CREATE_ACTIVITY, payload: obj.data})
                    :       
                    dispatch({type: SET_ERROR, payload: obj.msg})
      )
      .catch(error => dispatch({type: SET_ERROR, payload: error.msg}))
  }
}

export const cleanActivity = () => {
  return function(dispatch) {
    return dispatch({
      type: CLEAN_ACTIVITY,
      payload: {}
    })
  }
}