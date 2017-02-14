'use strict';

import {connect} from 'react-redux';
import {AWESOME_SET_CONTENT} from '../../reducer/awesome.js';
import Page from '../../component/page';

let mapStateToProps = (state) => {
  return {
    content: state.content.awesome,
  }
}

let mapDispatchToProps = (dispatch) => {
  dispatch(AWESOME_SET_CONTENT(require('../../content/awesome/index.md')));
  return {};
};

let HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Page);
export default HomeContainer;
