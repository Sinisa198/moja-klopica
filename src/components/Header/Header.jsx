import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import logo from '../../images/logo-klopica.png';
import DropDown from '../DropDown/DropDown';
import { getCookie } from '../utils/auth';
import profile from '../../images/profile.svg';
import burgerIcon from '../../images/burger-icon.svg';
import SideBar from '../SideBar/SideBar';

const Header = () => {
  const [modalLogin, setModalLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie('token'));
  useEffect(() => {
    setIsLoggedIn(!!getCookie('token'));
  }, [[getCookie('token')]]);
  const closeSideBar = () => {
    setShowSidebar(false);
  };
  if (modalLogin) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  const showSideBar = () => {
    setShowSidebar(true);
  };
  const toggleModalLogin = () => {
    setModalLogin(!modalLogin);
  };
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

        <NavLink to='/aboutus' className='text-for-menu'>
          O nama
        </NavLink>

        {isLoggedIn && (
          <div className='drop-down-forheader'>
            <img src={profile} alt='' />
            <DropDown />
          </div>
        )}
      </div>
      {showSidebar && (
        <div className='modal'>
          <div className='overlay'></div>
          <SideBar closeSideBar={closeSideBar} />
        </div>
      )}

      {modalLogin && (
        <div className='modal'>
          <div onClick={toggleModalLogin} className='overlay'></div>
          <LoginForm />
        </div>
      )}
      <div className='burger-menus'>
        <img src={burgerIcon} alt='' onClick={showSideBar} />
      </div>
    </div>
  );
};
export default Header;
