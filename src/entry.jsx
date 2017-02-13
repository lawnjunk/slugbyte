'use strict';

require('./style/main.scss');

// npm modules
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

// reducer  modules
import contentReducer from './reducer/content.js';
import viewsReducer, {VIEWS_SET} from './reducer/views.js';

// component modules
//import Home from './component/home';
import HomeContainer from './container/home';
import RandomContainer from './container/random.js';
import Editor from './container/editor';
import MarkdownEditor from './component/markdown-editor';
import StyleGuide from './component/style-guide/style-guide.jsx';

let store = createStore(combineReducers({
  views: viewsReducer,
  content: contentReducer,
}));

store.dispatch(VIEWS_SET([
  {path: '/', title: 'home', component: HomeContainer},
  {path: '/tutorial', title: 'tutorials', component: HomeContainer},
  {path: '/portfolio', title: 'portfolio', component: HomeContainer},
  {path: '/awesome', title: 'awesome', component: HomeContainer},
  {path: '/random', title: 'random', component: RandomContainer},
  {path: '/style-guide', component: StyleGuide},
  {path: '/editor', component: MarkdownEditor },
]));

let App = () => (
  <Provider store={store}>
  <div>
  <Router history={browserHistory}>
    {store.getState().views.map(view => {
      return <Route key={view.path} path={view.path} component={view.component} />
    })}
  </Router>
  </div>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
