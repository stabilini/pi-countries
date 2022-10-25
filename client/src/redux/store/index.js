import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'; // para pedidos asincronicos a la API

import rootReducer from '../reducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// ver repaso wanda M2 en 31:00 explica esta parte

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
)

export default store;