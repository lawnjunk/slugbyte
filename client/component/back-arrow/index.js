'use strict';
require('./_back-arrow.scss');

import React from 'react';
import {browserHistory} from 'react-router';

let BackArrow = ({path}) => (
  <div >
    <span onClick={browserHistory.goBack} className="back-arrow" to={path}> back </span>
    <hr />
  </div>
);

export default BackArrow;
