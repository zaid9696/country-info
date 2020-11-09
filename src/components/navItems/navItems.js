
import React from 'react';
import {NavLink} from 'react-router-dom';

import './navItems.styles.scss';


const NavtItems = () => (

  <div className="navItems">
      <NavLink className="item" exact activeClassName="active" to="/">
          Home
      </NavLink>
      <NavLink className="item" to="/about">
          About
      </NavLink>
      <NavLink className="item" to="/contact">
          Contact
      </NavLink>
  </div>

);



export default NavtItems;
