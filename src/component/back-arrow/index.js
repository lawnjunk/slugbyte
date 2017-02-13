'use strict';
require('./_back-arrow.scss');

import React from 'react';
import {Link} from 'react-router';

let BackArrow = ({path}) => (
  <div>
    <Link className="back-arrow" to={path}> back </Link>
    <hr />
  </div>
);

export default BackArrow;
