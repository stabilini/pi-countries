export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_DETAIL = 'GET_DETAIL';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';

export const URL = 'http://localhost:3001/';
// son las acciones que buscan la info en el back

export const getCountries = (name) => {
  return function(dispatch) {
    return fetch(name ? URL + 'countries/name=' + name : URL + 'countries')
            .then(res => res.json())
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