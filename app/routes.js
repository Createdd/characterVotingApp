import React from 'react';
import {Route} from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home.jsx';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
  </Route>
);//nest the routes because the navbar and footer will stay the same outside the app component
