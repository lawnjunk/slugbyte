'use strict';

import React from 'react';
import Displaybox from '../displaybox/displaybox.js';
import NavbarContainer from '../../container/navbar';

let Page = ({content}) => {
  return (
    <div>
      <NavbarContainer />
      <Displaybox text={content} />
    </div>
  );
}

export default Page;
