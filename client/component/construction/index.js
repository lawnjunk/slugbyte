'use strict';

require('./_construction.scss');

import React from 'react';
import BackArrow from '../back-arrow';
import {browserHistory} from 'react-router';

window.browserHistory = browserHistory;

let Construction = () => (
  <div className="construction">
    <BackArrow path="/"> </BackArrow>
    <div className="worker">
    </div>
    <h2> this page under construction </h2> 
  </div>
);

export default Construction;
