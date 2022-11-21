import { 
  COUNTRIES_ORDER_ASC,
  COUNTRIES_ORDER_DES,
  COUNTRIES_ORDER_RANDOM,
  COUNTRIES_FILTER_CONTINENT,
  COUNTRIES_FILTER_ACTIVITY,
  } from './../constants/index.js';


export const orderCountries = (field, order) => {
  return function(dispatch) {
    if (order === 'asc') {
      return dispatch({
        type: COUNTRIES_ORDER_ASC,
        payload: field
      })
    } else if (order === 'desc') {
      return dispatch({
        type: COUNTRIES_ORDER_DES,
        payload: field
      })
    } else {
      return dispatch({
        type: COUNTRIES_ORDER_RANDOM,
        payload: 'random'
      })
    }
  }
}

export const filterBy = (field, data) => {
  return function(dispatch) {
    if (field === 'continent') {
      return dispatch({
        type: COUNTRIES_FILTER_CONTINENT,
        payload: data
      })
    } else {
      return dispatch({
        type: COUNTRIES_FILTER_ACTIVITY,
        payload: data
      })
    }
  }
}