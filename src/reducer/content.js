'use strict';

import {combineReducers} from 'redux';
import homeReducer from './home.js';
import randomReducer from './random.js';
import awesomeReducer from './awesome.js';

let contentReducer = combineReducers({
  home: homeReducer,
  random: randomReducer,
  awesome: awesomeReducer,
});

export default contentReducer;
