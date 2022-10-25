import { CREATE_ACTIVITY, GET_COUNTRIES, GET_DETAIL } from '../actions';

const initialState = {
  countries: [],
  detail: {}
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
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      }
    default:
      return state;
  }
};

export default rootReducer;
