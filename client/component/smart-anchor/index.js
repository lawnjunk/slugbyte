'use strict';

import React from 'react';
import {Link} from 'react-router';

const urlparser = require('url').parse;

let SmartAnchor = (props) => {
  if(props.href.trim().startsWith('http')){
    console.log('bing', props.href);
     return <a target="_blank" href={props.href}> {props.children} </a>
  }
  let {hash, pathname, query} = urlparser(props.href);
  return <Link to={{hash, pathname, query}}> {props.children} </Link>
}

export default SmartAnchor;
