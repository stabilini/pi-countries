import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// importo los componentes
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import BotonIngreso from './components/BotonIngreso/BotonIngreso.jsx';
import Detail from './components/Detail/Detail.jsx'
import NewActivity from './components/NewActivity/NewActivity.jsx'

import BotonNew from './components/BotonNew/BotonNew';

function App() {
  return (
    <>
      {/* <Route exact path={['/', '/new']}>
        <BotonNew />
      </Route> */}
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
        {/* <Route path='/newactivity'>
          <BotonNew />
          <NewActivity />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
