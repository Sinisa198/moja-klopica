import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import logo from '../../images/logo-klopica.png';

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
          O nama
        </NavLink>
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
