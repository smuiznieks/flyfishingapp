import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation/Navigation';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route exact path='/profile' component={Profile} /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;