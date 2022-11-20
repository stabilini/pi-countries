import { render } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from '../redux/reducer/index';

import React from 'react';
import About from '../components/About/About.jsx';

let store;

export function createTestStore() {
  const store = createStore(
    combineReducers({
      user: rootReducer,
    })
  );
  return store;
}

describe('<About />', () => {
  
  beforeEach(() => {
    store = createTestStore();
  });
  
  test('render LandingPage component', async () => {
    // Create redux store
    const { findByText } = render(
      <Provider store={ store }>
        <BrowserRouter>
          <About />
        </BrowserRouter>
      </Provider>
    );
    await findByText('Acerca de este proyecto');
    await findByText('Resumen');
    await findByText('Acerca del Autor');
  })
});