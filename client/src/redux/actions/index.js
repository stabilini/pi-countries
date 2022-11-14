export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const SET_PAGE_VIEW = 'SET_PAGE_VIEW';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';
export const COUNTRIES_ORDER_ASC = 'COUNTRIES_ORDER_ASC';
export const COUNTRIES_ORDER_DES = 'COUNTRIES_ORDER_DES';
export const COUNTRIES_FILTER_CONTINENT = 'COUNTRIES_FILTER_CONTINENT';
export const COUNTRIES_FILTER_ACTIVITY = 'COUNTRIES_FILTER_ACTIVITY';



export const URL = 'http://192.168.0.10:3001/';

export const getCountries = (name) => {
  return function(dispatch) {
    return fetch(name ? URL + 'countries?name=' + name : URL + 'countries')
            .then(res => res.json())
            .then(obj => obj.map(v => ({...v, c_visible: true, a_visible: true}))) // agrego la propiedad visible para los filtros por continente y actividades
            .then(obj => obj.map(v => v.activities.length === 0 ? {...v, activities: [{name: 'Sin actividades'}]} : {...v}))
            .then(obj => dispatch({type: GET_COUNTRIES, payload: obj}))
  }
};

export const getDetail = (id) => {
  return function(dispatch) {
    return fetch(URL + 'countries/' + id)
            .then(res => res.json())
            .then(obj => dispatch({type: GET_DETAIL, payload: obj}))
  }
}

export const getActivities = () => {
  return function(dispatch) {
    return fetch(URL + 'activities')
            .then(res => res.json())
            .then(obj => ({...obj, 'Sin actividades': true}))
            .then(obj => dispatch({type: GET_ACTIVITIES, payload: obj}))
  }
}

export const getFilterActivities = () => {
  return function(dispatch) {
    return fetch(URL + 'activities')
            .then(res => res.json())
            .then(obj => ({...obj, 'Sin actividades': true}))
            .then(obj => dispatch({type: FILTER_ACTIVITY, payload: obj}))
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
            .then(obj => dispatch({type: CREATE_ACTIVITY, payload: obj}))
            .catch(error => console.log(error))
  }
}

export const orderCountries = (field, order) => {
  return function(dispatch) {
    if (order === 'asc') {
      return dispatch({
        type: COUNTRIES_ORDER_ASC,
        payload: field
      })
    } else {
      return dispatch({
        type: COUNTRIES_ORDER_DES,
        payload: field
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

export const setPageView = (page) => {
  return function(dispatch) {
    return dispatch({
      type: SET_PAGE_VIEW,
      payload: page
    })
  }
}