import { 
  GET_COUNTRIES,
  GET_DETAIL,
  CREATE_ACTIVITY,
  COUNTRIES_ORDER_ASC,
  COUNTRIES_ORDER_DES,
  COUNTRIES_FILTER_CONTINENT,
  COUNTRIES_FILTER_ACTIVITY
  } from '../actions';

const initialState = {
  countries: [],
  detail: {},
  //activities: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      // let activities = {};
      // for (let i = 0; i < action.payload.length; i++) {
      //   for (let x = 0; x < action.payload[i].activities.length; x++) {
      //     activities[action.payload[i].activities[x].name] = true;
      //   } 
      // }
      return {
        ...state,
        countries: action.payload,
        //activities: activities
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
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
    default:
      return state;
  }
};

export default rootReducer;
