import { render, screen } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { userReducer, configReducer, Provider, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import rootReducer from '../redux/reducer/index';

import React from 'react';
import Country from '../components/Country/Country';
import Detail from '../components/Detail/Detail';

let store;

export function createTestStore() {
  const store = createStore(
    combineReducers({
      user: rootReducer,
      // config: configReducer,
    })
  );
  return store;
}

describe('<LandingPage />', () => {
  
  beforeEach(() => {
    store = createTestStore();
  });
  

  test('render LandingPage component', async () => {
    // Create redux store
    console.log(store);
    const { findByText } = render(
      <Provider store={ store }>
        <BrowserRouter>
          <Detail />
        </BrowserRouter>
      </Provider>
    );
    await findByText('Continent');
    // render(<LandingPage />);
    // expect(screen.getByRole('button')).toHaveTextContent('Start');
    // expect(screen.getByText('Start')).toHaveAttribute('href', '/countries');
    // screen.getByRole('');
  })

  // test('render LandingPage component', () => {
  //   render(<LandingPage />);
  //   expect(screen.getByRole('button')).toHaveTextContent('Start');
  //   // expect(screen.getByText('Start')).toHaveAttribute('href', '/countries');
  //   // screen.getByRole('');
  // })
  // test('render Country component', () => {
  //   render(<Country id='ARG' name='Argentina' flag='testflag' />);
  //   expect(screen.getByRole('button')).toHaveTextContent('Detail');
  //   expect(screen.getByRole('link')).toHaveAttribute('href', '/countries/ARG');
  //   expect(screen.getByRole('img')).toHaveAttribute('src', 'testflag');
  //   expect(screen.getByRole('img')).toHaveAttribute('alt', 'Flag from Argentina')
  //   // screen.getByRole('')
  // })
});