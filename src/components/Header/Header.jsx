import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-klopica.png';

const Header = () => {
  return (
    <div className='main-div-header'>
      <div>
        <img src={logo} alt='' className='logo-header' />
      </div>
      <div className='div-for-menu'>
        <NavLink to='/' className='text-for-menu'>
          Pocetna
        </NavLink>
        <NavLink to='/menu' className='text-for-menu'>
          Meni
        </NavLink>
        <NavLink to='/aboutus' className='text-for-menu'>
          O nama
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
