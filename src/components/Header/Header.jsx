import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-klopica.png';
import profile from '../../images/profile.svg';
import DropdownMenu from '../DropDown/DropDown';

const Header = () => {
  const pathname = window.location.pathname;
  return (
    <div className='main-div-header'>
      <div>
        <img src={logo} alt='' className='logo-header' />
      </div>
      <div className='div-for-menu'>
        <NavLink to='/' className='text-for-menu'>
          Pocetna
        </NavLink>
        <NavLink to='/reservation' className='text-for-menu'>
          Rezervisi
        </NavLink>
        <NavLink to='/about' className='text-for-menu'>
          O nama
        </NavLink>
        <div className='profile-dropdown'>
          {pathname === '/reservation' && (
            <div className='profile-dropdown'>
              <img src={profile} alt='' className='profile-image' />
              <DropdownMenu />
            </div>
          )}
        </div>

        <div className='profile-dropdown'>
          {pathname === '/myreservation' && (
            <div className='profile-dropdown'>
              <img src={profile} alt='' className='profile-image' />
              <DropdownMenu />
            </div>
          )}
        </div>
        <div className='profile-dropdown'>
          {pathname === '/changeprofile' && (
            <div className='profile-dropdown'>
              <img src={profile} alt='' className='profile-image' />
              <DropdownMenu />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
