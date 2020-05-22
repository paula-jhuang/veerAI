import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Currency from './Currency';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
      <Route path="/" component={App} />
      <Route path="/currency" component={Currency}/>
    </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();
