'use strict';

require('./style/main.scss');

// npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

// app modules
import Editor from './container/editor.jsx';

let reducer = (state={}, action) => {
  switch (action.type){
    default: 
      return state;
  }
};

let store = createStore(reducer);

let App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Editor} />
    </Router>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
