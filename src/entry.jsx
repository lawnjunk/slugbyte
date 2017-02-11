'use strict';

// npm modules
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

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
    <div>
      <h1> lulwat slug </h1>
      <Editor />
    </div>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
