import { 
  GET_COUNTRIES,
  GET_DETAIL,
  GET_ACTIVITIES,
  CREATE_ACTIVITY,
  COUNTRIES_ORDER_ASC,
  COUNTRIES_ORDER_DES,
  COUNTRIES_FILTER_CONTINENT,
  COUNTRIES_FILTER_ACTIVITY,
  SET_PAGE_VIEW
  } from '../actions';

const initialState = {
  countries: [],
  detail: {},
  activities: [],
  page: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      }
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      }
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      }
    case COUNTRIES_ORDER_ASC:
      return {
        ...state,
        countries: state.countries.slice().sort((a, b) => a[action.payload] > b[action.payload] ? 1 : -1)
      }
    case COUNTRIES_ORDER_DES:
      return {
        ...state,
        countries: state.countries.slice().sort((a, b) => a[action.payload] < b[action.payload] ? 1 : -1)
      }
    case COUNTRIES_FILTER_CONTINENT:
      let keys_c = Object.keys(action.payload).filter(k => action.payload[k] === true)
      return {
        ...state,
        countries: state.countries.map(c => keys_c.includes(c.continent) ? {...c, c_visible: true} : {...c, c_visible: false})
      }
    case COUNTRIES_FILTER_ACTIVITY:
      let keys_a = Object.keys(action.payload).filter(k => action.payload[k] === true)
      return {
        ...state,
       countries: state.countries.map(c => c.activities.some(obj => keys_a.includes(obj.name)) ? {...c, a_visible: true} : {...c, a_visible: false})
      }
    case SET_PAGE_VIEW:
      return {
        ...state,
        page: Number(action.payload)
      }
    default:
      return state;
  }
};

export default rootReducer;
