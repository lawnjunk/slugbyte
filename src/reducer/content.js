'use strict';

import {combineReducers} from 'redux';
import homeReducer from './home.js';
import randomReducer from './random.js';

let contentReducer = combineReducers({
  home: homeReducer,
  random: randomReducer,
});

export default contentReducer;
