'use strict';

import {connect} from 'react-redux';
import {HOME_SET_CONTENT} from '../../reducer/home.js';
import Page from '../../component/page';

let mapStateToProps = (state) => {
  return {
    content: state.content.home,
  }
}

let mapDispatchToProps = (dispatch) => {
  dispatch(HOME_SET_CONTENT(require('../../content/home/index.md')));
  return {};
};

let HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Page);
export default HomeContainer;
