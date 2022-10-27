export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_DETAIL = 'GET_DETAIL';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const COUNTRIES_ORDER_ASC = 'COUNTRIES_ORDER_ASC';
export const COUNTRIES_ORDER_DES = 'COUNTRIES_ORDER_DES';
export const COUNTRIES_FILTER_CONTINENT = 'COUNTRIES_FILTER_CONTINENT';
export const COUNTRIES_FILTER_ACTIVITY = 'COUNTRIES_FILTER_ACTIVITY';



export const URL = 'http://localhost:3001/';
// son las acciones que buscan la info en el back

export const getCountries = (name) => {
  return function(dispatch) {
    return fetch(name ? URL + 'countries?name=' + name : URL + 'countries')
            .then(res => res.json())
            .then(obj => obj.map(v => ({...v, c_visible: true, a_visible: true}))) // agrego la propiedad visible para los filtros por continente y actividades
            .then(obj => dispatch({type: GET_COUNTRIES, payload: obj}))
  }
};

// wanda repaso M2 usa axios en 1:28:00
export const getDetail = (id) => {
  return function(dispatch) {
    return fetch(URL + 'countries/' + id)
            .then(res => res.json())
            .then(obj => dispatch({type: GET_DETAIL, payload: obj}))
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
  }
}

export const ordenPaises = (field, order) => {
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

export const filtrarPaises = (field, data) => {
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