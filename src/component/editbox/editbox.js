'use strict';

import React from 'react';

let Editbox = ({updateText}) => {
  let handleUpdate = (el) => {
    updateText(el.target.value);
  }

  let placeholder = 'Hi,\nI\'m an editor. Feed me markdown!'

  return (
    <div className="editor">
    <textarea onChange={handleUpdate} placeholder={placeholder}>
    </textarea>
    </div>
  );
}
export default Editbox;
