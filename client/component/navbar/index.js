'use strict';

import React from 'react';
import {Link} from 'react-router';
require('./_navbar.scss');

let Navbar = ({views}) => {
  console.log('navbar views props', views);
  return (
    <section className="navbar">
      <h1>slugbyte</h1>
      <nav>
        <ul> 
        {views.map(item => <li key={item.title}> <Link to={item.path}> {item.title} </Link> </li>)}
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
