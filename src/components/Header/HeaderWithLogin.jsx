import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import logo from '../../images/logo-klopica.png';
import DropdownMenu from '../DropDown/DropDown';
import profile from '../../images/profile.svg';

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
  return (
    <div className='main-div-header'>
      <div>
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
    </div>
  );
};
export default Header;
