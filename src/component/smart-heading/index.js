'use strict';

require('./_smart-heading.scss');

import React from 'react';
import {Link} from 'react-router';

let getText = (props, index=0) => {
  console.log(props);
  if(typeof props.children === 'string'){
    if (props.children !== ' ')
      return props.children.trim();
  }

  if(typeof props.children[index] === 'string'){
    if (props.children[index] !== ' ')
      return props.children[index].trim();
    return getText(props, ++index);
  }
  return getText(props.children[index].props);
}

let SmartHeading = (props) => {
  console.log('props', props);
  let text = getText(props);
  let id='';
  if(text) 
    id=text.split(' ').join('-');
  let children = props.children;
  if(id)
    children = [<Link className="smart-heading-anchor" key='0' to={`${window.location.pathname}#${id}`}></Link>].concat(props.children);
  return React.createElement(
    `h${props.level}`,
    {id, className: 'smart-heading'},
    children,
  );
}

export default SmartHeading
