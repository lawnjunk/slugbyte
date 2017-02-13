'use strict';

let homeReducer = (state='', action) => {
  switch (action.type){
    case 'HOME_SET_CONTENT':
      return action.payload;
    default: 
      return state;
  }
};

export let HOME_SET_CONTENT = (content) => ({
  type: 'HOME_SET_CONTENT', 
  payload: content,
});

export default homeReducer;
