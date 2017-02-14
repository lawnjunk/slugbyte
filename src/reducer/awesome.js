'use strict';

let awesomeReducer = (state='', action) => {
  switch (action.type){
    case 'AWESOME_SET_CONTENT':
      return action.payload;
    default: 
      return state;
  }
};

export let AWESOME_SET_CONTENT = (content) => ({
  type: 'AWESOME_SET_CONTENT', 
  payload: content,
});

export default awesomeReducer;
