import { 
  SET_PAGE_VIEW,
  SET_THEME,
  SET_ERROR,
  SET_LOADING
  } from './../constants/index.js';


export const setPageView = (page) => {
  return function(dispatch) {
    return dispatch({
      type: SET_PAGE_VIEW,
      payload: page
    })
  }
}

export const setTheme = (theme) => {
  return function(dispatch) {
    return dispatch({
      type: SET_THEME,
      payload: theme
    })
  }
}

export const cleanError = () => {
  return function(dispatch) {
    return dispatch({
      type: SET_ERROR,
      payload: ''
    })
  }
}

export const setLoading = (state) => {
  return function(dispatch) {
    return dispatch({
      type: SET_LOADING,
      payload: state
    })
  }
}