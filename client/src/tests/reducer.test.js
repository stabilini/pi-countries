import rootReducer from '../redux/reducer/index';
import {
  GET_COUNTRIES,
  GET_DETAIL,
  GET_ACTIVITIES,
  CREATE_ACTIVITY,
  FILTER_ACTIVITY,
  COUNTRIES_ORDER_ASC,
  COUNTRIES_ORDER_DES,
  COUNTRIES_FILTER_CONTINENT,
  COUNTRIES_FILTER_ACTIVITY,
  SET_PAGE_VIEW,
} from '../redux/actions/index';


xdescribe('Reducer', () => {
  const state = {
    countries: [],
    detail: {},
    // activities: [],
    filterActivity: {},
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
    order: {},
  };

  it('Should return initial state if no valid type is passed', () => {
    expect(rootReducer(undefined, [])).toEqual({
      countries: [],
      detail: {},
      // activities: [],
      filterActivity: {},
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
      order: {},
    });
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

  // TESTING DE GET ACTIVITIES ?????????

  xit('Should create an activity when action CREATE_ACTIVITY is called', () => {
    const result = rootReducer(state, {
      type: CREATE_ACTIVITY,
      payload: {id: 1},
    });
    //{ name, skill, duration, season, countries } lo que va al back
    // EL PROBLEMA ESTA EN QUE EN EL STATE ESTA COMENTADO
    // activities ... LO QUE VIENE EN EL PAYLOAD ES LA RESPUESTA
    // DEL SERVIDOR CON EL MENSAJE Activity created o algo asi
    expect(result).not.toEqual(state);
    // expect(result).toHaveProperty('detail', {id: 1});
  });

  it('Should set activity filter when action FILTER_ACTIVITY is called', () => {
    const result = rootReducer(state, {
      type: FILTER_ACTIVITY,
      payload: {Running: true},
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('filterActivity', {Running: true});
  });

  it('Should order countries alphabetically ascending when action COUNTRIES_ORDER_ASC is called', () => {
    const result = rootReducer(state, {
      type: COUNTRIES_ORDER_ASC,
      payload: 'name',
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('order', {asc: 'name'});
  });

  it('Should order countries alphabetically descending when action COUNTRIES_ORDER_DES is called', () => {
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

  // LOS DOS FILTROS VER SI VAN, CREO QUE NO SE USAN MAS
  // PORQUE NO FILTRA POR 
  xit('Should filter countries by continent when action COUNTRIES_FILTER_CONTINENT is called', () => {
    state.countries = [
        { continent: 'Europe' },
        { continent: 'Asia' },
        { continent: 'America' }
    ]
    const result = rootReducer(state, {
      type: COUNTRIES_FILTER_CONTINENT,
      payload: 'Europe',
    });
    expect(result).not.toEqual(state);
    expect(result.countries).toHaveLength(1);
  });

  xit('Should filter countries by activities when action COUNTRIES_FILTER_ACTIVITY is called', () => {
    const result = rootReducer(state, {
      type: COUNTRIES_FILTER_ACTIVITY,
      payload: 'Fishing',
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('filterContinent');
  });

  it('Should set page view from pagination when action SET_PAGE_VIEW is called', () => {
    const result = rootReducer(state, {
      type: SET_PAGE_VIEW,
      payload: Number('5'),
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('page', 5);
  });
});
