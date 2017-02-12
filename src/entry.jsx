'use strict';

require('./style/main.scss');

// npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

// app modules
import Navbar from './component/navbar';
import Editor from './container/editor.jsx';
import StyleGuide from './component/style-guide/style-guide.jsx';

let reducer = (state={}, action) => {
  switch (action.type){
    default: 
      return state;
  }
};

let store = createStore(reducer);

let views = [
  {path: '/', title: 'style_guide'},
  {editor: '/editor', title: 'editor'},
  {editor: '/editor', title: 'what'},
]

let App = () => (
  <Provider store={store}>
    <div>
      <Navbar views={views}/>
      <Router history={browserHistory}>
        <Route path="/" component={StyleGuide} />
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
