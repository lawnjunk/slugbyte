'use strict';

import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../../component/navbar';

let mapStateToProps = (state) => {
  console.log('state', state);
  return {
    views: state.views.filter(item => item.title),
  }
};

let NavbarContainer = connect(mapStateToProps)(Navbar)
export default NavbarContainer;
