import React from 'react';
import {Link} from 'react-router-dom';

import NavtItems from '../navItems/navItems';
import {ReactComponent as Logo} from '../../assets/logo.svg';

import './header.styles.scss';


const Nav = () => (

  <header className="header">
      <Link to="/">
          <Logo className="logo" />
      </Link>
    <nav>
        <NavtItems />
    </nav>
  </header>

);


export default Nav;
