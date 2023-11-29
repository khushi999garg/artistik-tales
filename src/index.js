import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './style.css';
import Contact from './views/contact';
import Home from './views/home';
import NotFound from './views/not-found';
import Artwork from './views/artwork.js';
import About from './views/about.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Contact} exact path="/contact" />
        <Route component={Home} exact path="/" />
        <Route component={Artwork} exact path='/artwork'/>
        <Route component={About} exact path='/about'/>
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
