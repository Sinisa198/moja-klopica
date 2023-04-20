import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../images/arrow-login-header.svg';
import reservationIcon from '../../images/reservation.svg';
import changeIcon from '../../images/changeprofile-icon.svg';
import logoutIcon from '../../images/logout-icon.svg';
import { useDispatch } from 'react-redux';
import { logout } from '../utils/auth';

const Dropdown = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dropdown-container'>
      <div className='icon-arrow' onClick={toggleDropdown}>
        <img src={arrow} alt='' />
      </div>
      {isOpen && (
        <div className='dropdown-menu'>
          <NavLink className='text-dropdown' to='/myreservation'>
            <img src={reservationIcon} alt='' />
            Moje rezervacije
          </NavLink>
          <NavLink className='text-dropdown' to='/profile'>
            <img src={changeIcon} alt='' />
            Promeni profil
          </NavLink>
          <NavLink
            className='text-dropdown'
            to='/'
            onClick={() => {
              logout('token');
              dispatch(logout());
            }}
          >
            <img src={logoutIcon} alt='' />
            Odjavi se
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
