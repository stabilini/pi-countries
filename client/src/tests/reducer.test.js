import rootReducer from '../redux/reducer/index';
import {
  GET_COUNTRIES,
  GET_DETAIL,
  CLEAN_DETAIL,
  CREATE_ACTIVITY,
  CLEAN_ACTIVITY,
  COUNTRIES_ORDER_ASC,
  COUNTRIES_ORDER_DES,
  COUNTRIES_ORDER_RANDOM,
  COUNTRIES_FILTER_CONTINENT,
  COUNTRIES_FILTER_ACTIVITY,
  SET_PAGE_VIEW,
  FILTER_ACTIVITY,
  SET_THEME
} from '../redux/actions/index';


describe('Reducer', () => {
  const state = {
    countries: [],
    detail: {},
    activity: {},
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

  it('Should return initial state if no valid type is passed', () => {
    expect(rootReducer(undefined, [])).toEqual(state);
  });

  it('Should load countries when action GET_COUNTRIES is called', () => {
    const result = rootReducer(state, {
      type: GET_COUNTRIES,
      payload: [{id: 1}, {id: 2}],
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('countries');
    expect(result.countries.length).toEqual(2);
  });

  it('Should load detail when action GET_DETAIL is called', () => {
    const result = rootReducer(state, {
      type: GET_DETAIL,
      payload: {id: 1},
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('detail', {id: 1});
  });

  it('Should clear detail when action CLEAN_DETAIL is called', () => {
    state.detail = {id: 1}
    const result = rootReducer(state, {
      type: CLEAN_DETAIL,
      payload: {},
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('detail', {});
  });

  it('Should create an activity when action CREATE_ACTIVITY is called', () => {
    const result = rootReducer(state, {
      type: CREATE_ACTIVITY,
      payload: {id: 1},
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('activity', {id: 1});
  });

  it('Should clear activity when action CLEAN_ACTIVITY is called', () => {
    state.activity = {id: 1}
    const result = rootReducer(state, {
      type: CLEAN_ACTIVITY,
      payload: {},
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('detail', {});
  });

  it('Should set activity filter when action FILTER_ACTIVITY is called', () => {
    const result = rootReducer(state, {
      type: FILTER_ACTIVITY,
      payload: {'Running': true},
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('filterActivity');
    expect(result.filterActivity).toHaveProperty('Running');
  });

  it('Should order countries by name ascending when action COUNTRIES_ORDER_ASC is called', () => {
    state.order = { asc: 'population'}
    const result = rootReducer(state, {
      type: COUNTRIES_ORDER_ASC,
      payload: 'name',
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('order', {asc: 'name'});
  });

  it('Should order countries by name descending when action COUNTRIES_ORDER_DES is called', () => {
    const result = rootReducer(state, {
      type: COUNTRIES_ORDER_DES,
      payload: 'name',
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('order', {desc: 'name'});
  });

  it('Should order countries by population ascending when action COUNTRIES_ORDER_ASC is called', () => {
    const result = rootReducer(state, {
      type: COUNTRIES_ORDER_ASC,
      payload: 'population',
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('order', {asc: 'population'});
  });

  it('Should order countries by population descending when action COUNTRIES_ORDER_DES is called', () => {
    const result = rootReducer(state, {
      type: COUNTRIES_ORDER_DES,
      payload: 'population',
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('order', {desc: 'population'});
  });

  it('Should order countries randomly when action COUNTRIES_ORDER_RANDOM is called', () => {
    const result = rootReducer(state, {
      type: COUNTRIES_ORDER_RANDOM,
      payload: null,
    });
    expect(result).not.toEqual(state);
  });

  it('Should filter countries by continent when action COUNTRIES_FILTER_CONTINENT is called', () => {
    const result = rootReducer(state, {
      type: COUNTRIES_FILTER_CONTINENT,
      payload: {
        Africa: false,
        Antarctica: true,
        Asia: true,
        Europe: true,
        Oceania: true,
        'South America': true,
        'North America': true,
      },
    });
    expect(result).not.toEqual(state);
    expect(result.filterContinent.Africa).toBe(false);
    expect(result.filterContinent.Asia).toBe(true);
  });

  it('Should filter countries by activities when action COUNTRIES_FILTER_ACTIVITY is called', () => {
    const result = rootReducer(state, {
      type: COUNTRIES_FILTER_ACTIVITY,
      payload: {
        Fishing: false,
        Running: true,
      },
    });
    expect(result).not.toEqual(state);
    expect(result.filterActivity.Fishing).toBe(false);
    expect(result.filterActivity.Running).toBe(true);
  });

  it('Should set page view from pagination when action SET_PAGE_VIEW is called', () => {
    const result = rootReducer(state, {
      type: SET_PAGE_VIEW,
      payload: Number('5'),
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('page', 5);
  });

  it('Should set theme when action SET_THEME is called', () => {
    const result = rootReducer(state, {
      type: SET_THEME,
      payload: 'Dark',
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('theme', 'Dark');
  });
});
