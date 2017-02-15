'use strict';

let viewsReducer = (state=[], action) => {
  switch (action.type){
    case 'VIEWS_SET':
      return action.payload;
    default:
      return state;
  }
}

export let VIEWS_SET = (views) => ({
  type: 'VIEWS_SET', 
  payload: views,
});

export default viewsReducer;
