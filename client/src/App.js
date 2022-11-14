import React from 'react';
import { Route, Switch } from 'react-router-dom';

// importo los componentes
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/Detail/Detail.jsx'
import CreateActivity from './components/CreateActivity/CreateActivity.jsx'

import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/countries'>
          <Home />
        </Route>
        <Route exact path='/countries/:id'>
          <Detail />
        </Route>
        <Route path='/newactivity'>
          <CreateActivity />
        </Route>
      </Switch>
    </>
  );
}

export default App;
