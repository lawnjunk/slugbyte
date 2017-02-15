'use strict';

let randomReducer = (state='', action) => {
  switch (action.type){
    case 'RANDOM_SET_CONTENT':
      return action.payload;
    default: 
      return state;
  }
};

export let RANDOM_SET_CONTENT = (content) => ({
  type: 'RANDOM_SET_CONTENT', 
  payload: content,
});

export default randomReducer;
