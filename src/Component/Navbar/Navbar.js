import React from 'react';
import Navitems from './NavItems';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/copperhead-logo.svg';
import style from './Navbar.module.scss';
import './style.css';
const Navbar = (prop) => {
  return (
    <React.Fragment>
      <div className={style.Navbar}>
        <div className={style.logo}>
          <img src={logo} alt='logo' />
        </div>
        <nav>
          <NavLink exact to='/'>
            <Navitems name='Home' />
          </NavLink>

          <NavLink exact to='/start'>
            <Navitems name='Begin' />
          </NavLink>
          <NavLink exact to='/about'>
            <Navitems name='About' />
          </NavLink>
        </nav>
      </div>
    </React.Fragment>
  );
};
export default Navbar;
