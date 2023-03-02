import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import logo from '../../images/logo-klopica.png';
import profile from '../../images/profile.svg';
import DropdownMenu from '../DropDown/DropDown';

const Header = () => {
  const [modalLogin, setModalLogin] = useState(false);

  if (modalLogin) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  const toggleModalLogin = () => {
    setModalLogin(!modalLogin);
  };
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
        <span
          onClick={toggleModalLogin}
          className='text-for-menu-reservation-login'
        >
          Rezervisi
        </span>
        <NavLink to='/about' className='text-for-menu'>
        <NavLink to='/reservation' className='text-for-menu'>
          Rezervisi
        </NavLink>
        <NavLink to='/aboutus' className='text-for-menu'>
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
      {modalLogin && (
        <div className='modal'>
          <div onClick={toggleModalLogin} className='overlay'></div>
          <LoginForm />
        </div>
      )}
    </div>
  );
};
export default Header;
