import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import logo from '../../images/logo-klopica.png';
import DropdownMenu from '../DropDown/DropDown';
import profile from '../../images/profile.svg';
import SideBar from '../SideBar/SideBar';
import burgerIcon from '../../images/sidebar-red.svg';

const Header = () => {
  const [modalLogin, setModalLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const closeSideBar = () => {
    setShowSidebar(false);
  };
  const toggleModalLogin = () => {
    setModalLogin(!modalLogin);
  };
  const showSideBar = () => {
    setShowSidebar(true);
  };
  return (
    <div className='main-div-header'>
      <div>
        <div className='burger-menus'>
          <img src={burgerIcon} alt='' onClick={showSideBar} />
        </div>
        <img src={logo} alt='' className='logo-header' />
      </div>
      <div className='div-for-menu-login-header'>
        <NavLink to='/' className='text-for-menu'>
          Pocetna
        </NavLink>
        <NavLink
          to='/reservation'
          onClick={toggleModalLogin}
          className='text-for-menu-reservation-login'
        >
          Rezervisi
        </NavLink>
        <NavLink to='/aboutus' className='text-for-menu'>
          O nama
        </NavLink>
      </div>
      <div className='dropdown-iconprofile'>
        <img src={profile} alt='' />
        <DropdownMenu />
      </div>
      {modalLogin && (
        <div className='modal'>
          <div onClick={toggleModalLogin} className='overlay'></div>
          <LoginForm />
        </div>
      )}
      {showSidebar && (
        <div className='modal-burger-menu'>
          <div className='overlay'></div>
          <SideBar closeSideBar={closeSideBar} />
        </div>
      )}
    </div>
  );
};
export default Header;
