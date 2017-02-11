'use strict';

import React from 'react';

let Editbox = ({updateText}) => {
  let handleUpdate = (el) => {
    updateText(el.target.value);
  }

  return (
    <div>
    <textarea onChange={handleUpdate}>
    </textarea>
    </div>
  );
}
export default Editbox;
