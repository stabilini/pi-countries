import { render } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from '../redux/reducer/index';

import React from 'react';
import Page404 from '../components/Page404/Page404.jsx';

let store;

export function createTestStore() {
  const store = createStore(
    combineReducers({
      user: rootReducer,
    })
  );
  return store;
}

describe('<Page404 />', () => {
  
  beforeEach(() => {
    store = createTestStore();
  });
  
  test('render LandingPage component', async () => {
    // Create redux store
    const { findByText } = render(
      <Provider store={ store }>
        <BrowserRouter>
          <Page404 />
        </BrowserRouter>
      </Provider>
    );
    await findByText('404');
    await findByText('oops... you are in the wrong place...');
    await findByText('(page not found)');
  })
});