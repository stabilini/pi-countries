import { 
  GET_COUNTRIES,
  GET_DETAIL,
  CLEAN_DETAIL,
  CREATE_ACTIVITY,
  CLEAN_ACTIVITY,
  GET_USERS,
  CREATE_USER,
  DELETE_USER,
  CLEAN_USER,
  UPDATE_USER,
  COUNTRIES_ORDER_ASC,
  COUNTRIES_ORDER_DES,
  COUNTRIES_ORDER_RANDOM,
  COUNTRIES_FILTER_CONTINENT,
  COUNTRIES_FILTER_ACTIVITY,
  SET_PAGE_VIEW,
  FILTER_ACTIVITY,
  SET_THEME,
  SET_ERROR,
  SET_LOADING
  } from './../constants/index.js';

const initialState = {
  countries: [],
  detail: {},
  activity: {},
  users: [],
  user: {},
  filterActivity: {
    'No activities': true
  },
  filterContinent: {
    Africa: true,
    Antarctica: true,
    Asia: true,
    Europe: true,
    Oceania: true,
    'South America': true,
    'North America': true,
  },
  page: 1,
  order: { asc: 'name'},
  theme: 'Light',
  error: '',
  loading: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        error: '',
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
        error: '',
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: action.payload,
      }
    case CREATE_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
        error: '',
      }
    case CLEAN_ACTIVITY:
      return {
        ...state,
        detail: action.payload,
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        error: '',
      }
    case CREATE_USER:
      return {
        ...state,
        user: action.payload,
        error: '',
      }
    case DELETE_USER:
      return {
        ...state,
        user: action.payload,
        error: '',
      }
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        error: '',
      }
    case CLEAN_USER:
      return {
        ...state,
        user: action.payload,
      }
    case FILTER_ACTIVITY:
      return {
        ...state,
        filterActivity: {...action.payload, ...state.filterActivity} // el orden importa!
      }
    case COUNTRIES_ORDER_ASC:
      return {
        ...state,
        order: {asc: action.payload},
      }
    case COUNTRIES_ORDER_DES:
      return {
        ...state,
        order: {desc: action.payload},
      }
    case COUNTRIES_ORDER_RANDOM:
      return {
        ...state,
        order: { },
        countries: state.countries.slice().sort(() => Math.random() - 0.5),
      }
    case COUNTRIES_FILTER_CONTINENT:
      return {
        ...state,
        countries: state.countries.map(c => c),
        filterContinent: action.payload
      }
    case COUNTRIES_FILTER_ACTIVITY:
      return {
        ...state,
       countries: state.countries.map(c => c),
       filterActivity: action.payload
      }
    case SET_PAGE_VIEW:
      return {
        ...state,
        page: Number(action.payload)
      }
    case SET_THEME:
      return {
        ...state,
        theme: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;