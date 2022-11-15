import { render, screen } from '@testing-library/react';
import rootReducer from './redux/reducer/index';
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
  getCountries,
} from './redux/actions/index';

import React from 'react';
import App from './App';
import Country from './components/Country/Country';
import LandingPage from './components/LandingPage/LandingPage';


describe('<LandingPage />', () => {
  test('render LandingPage component', () => {
    render(<LandingPage />);
    expect(screen.getByRole('button')).toHaveTextContent('Start');
    // expect(screen.getByText('Start')).toHaveAttribute('href', '/countries');
    // screen.getByRole('');
  })
  test('render Country component', () => {
    render(<Country id='ARG' name='Argentina' flag='testflag' />);
    expect(screen.getByRole('button')).toHaveTextContent('Detail');
    expect(screen.getByRole('link')).toHaveAttribute('href', '/countries/ARG');
    expect(screen.getByRole('img')).toHaveAttribute('src', 'testflag');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Flag from Argentina')
    // screen.getByRole('')
  })
  // test('render App component', () => {
  //   render(<App />);
  //   screen.getByRole('');
  // })
  // test('renders learn react link', () => {
  //   render(<App />);
  //   //const linkElement = screen.getByText(/learn react/i);
  //   expect(screen.getByRole('button')).toHaveTextContent('Start');
  // });

  // test('<LandingPage />', () => {
  //   render(<LandingPage />);
  //   expect(screen.getByRole('button')).toHaveTextContent('Start');
  // })

  // it('Debería renderizar <NavBar />', () => {
  //   expect(app.find(NavBar).length).toEqual(1);
  // });

});



describe("Reducer", () => {
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

  it("Should return initial state if no valid type is passed", () => {
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

  it('Should create an activity when action CREATE_ACTIVITY is called', () => {
    const result = rootReducer(state, {
      type: CREATE_ACTIVITY,
      payload: {id: 1},
    });
    //{ name, skill, duration, season, countries } lo que va al back
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

  it('Should filter countries by continent when action COUNTRIES_FILTER_CONTINENT is called', () => {
    const result = rootReducer(state, {
      type: COUNTRIES_FILTER_CONTINENT,
      payload: 'Europe',
    });
    expect(result).not.toEqual(state);
    expect(result).toHaveProperty('filterContinent');
  });

  it('Should filter countries by activities when action COUNTRIES_FILTER_ACTIVITY is called', () => {
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
