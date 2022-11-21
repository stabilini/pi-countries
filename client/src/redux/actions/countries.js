import { 
  GET_COUNTRIES,
  GET_DETAIL,
  CLEAN_DETAIL,
  SET_ERROR,
  SET_LOADING,
  URL
  } from './../constants/index.js';
  

export const getCountries = (name) => {
  return function(dispatch) {
    return fetch(name ? URL + 'countries?name=' + name : URL + 'countries')
      .then(res => res.json())
      .then(obj => obj.status === 'ok' ?
                    dispatch({type: SET_LOADING, payload: false}) &&
                    dispatch({type: GET_COUNTRIES, payload: obj.data.map(v => v.activities.length === 0 ? {...v, activities: [{name: 'No activities'}]} : {...v})})
                    :
                    dispatch({type: SET_ERROR, payload: obj.msg})
      )
      .catch(error => dispatch({type: SET_ERROR, payload: error.msg}))
  }
};

export const getDetail = (id) => {
  return function(dispatch) {
    return fetch(URL + 'countries/' + id)
      .then(res => res.json())
      .then(obj => obj.status === 'ok' ?
                    dispatch({type: SET_LOADING, payload: false}) &&
                    dispatch({type: GET_DETAIL, payload: obj.data})
                    :
                    dispatch({type: SET_ERROR, payload: obj.msg})
      )
      .catch(error => dispatch({type: SET_ERROR, payload: error.msg}))
  }
}

export const cleanDetail = () => {
  return function(dispatch) {
    return dispatch({
      type: CLEAN_DETAIL,
      payload: {}
    })
  }
}