'use strict';

import {connect} from 'react-redux';
import {RANDOM_SET_CONTENT} from '../reducer/random.js';
import Page from '../component/page';

let mapStateToProps = (state) => {
  return {
    content: state.content.random,
  }
}

let mapDispatchToProps = (dispatch) => {
  dispatch(RANDOM_SET_CONTENT(require('../content/random/index.md')));
  return {};
};

let HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Page);
export default HomeContainer;
