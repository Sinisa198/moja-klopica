import React, { useState, useEffect } from 'react';
import close from '../../images/sideBarClose.svg';
import { useSelector, useDispatch } from 'react-redux';
import menu from '../../images/menu.svg';
import home from '../../images/home.svg';
import aboutUs from '../../images/aboutus.svg';
import profile from '../../images/profile.svg';
import { getCookie } from '../utils/auth';
import { getUserProfile } from '../../store/actions/auth';
import { logout } from '../utils/auth';
import reservation from '../../images/menu-sidebar.svg';
import myReservation from '../../images/myreservation-sidebar.svg';
import changeProfile from '../../images/changeprofile-sidebar.svg';
import logoutIcon from '../../images/logout-sidebar.svg';

const SideBar = ({ closeSideBar }) => {
  const dispatch = useDispatch();
  const user = useSelector(({ authProfile }) => authProfile.user || {});
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie('token'));
  useEffect(() => {
    setIsLoggedIn(!!getCookie('token'));
  }, [[getCookie('token')]]);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  return (
    <div className='side-bar'>
      <img src={close} onClick={closeSideBar} className='close-side-bar' />
      <div className='sidebar-menu'>
        <div className='paragraf-sidebarmenu'>
          {isLoggedIn && (
            <div className='icon-sidebar-and-name'>
              <img src={profile} alt='' className='profile-icon-sidebar' />
              <p className='name-surname-sidebar'>
                {user.name}
                <span className='span-surname'>{user.surname}</span>
              </p>
            </div>
          )}

          <a href='/' className='navigation-sidebar'>
            <img src={home} alt='' className='icon-sidebar' />
            Pocetna
          </a>
        </div>
        {isLoggedIn && (
          <div className='login-sidebar'>
            <a href='/reservation' className='navigation-sidebar'>
              <img src={reservation} alt='' className='icon-sidebar' />
              Rezervisi
            </a>
            <a href='/' className='navigation-sidebar'>
              <img src={myReservation} alt='' className='icon-sidebar' />
              Moje rezervacije
            </a>

            <a href='/' className='navigation-sidebar'>
              <img src={changeProfile} alt='' className='icon-sidebar' />
              Izmena profila
            </a>
          </div>
        )}
        <div className='paragraf-sidebarmenu'>
          <a href='/reservation' className='navigation-sidebar'>
            <img src={menu} alt='' className='icon-sidebar' />
            Ponuda
          </a>
        </div>
        <div className='paragraf-sidebarmenu'>
          <a href='/aboutus' className='navigation-sidebar'>
            <img src={aboutUs} alt='' className='icon-sidebar' />O nama
          </a>
        </div>
        {isLoggedIn && (
          <a
            href='/'
            className='navigation-sidebar'
            onClick={() => {
              logout('token');
              dispatch(logout());
            }}
          >
            <img src={logoutIcon} alt='' className='icon-sidebar' />
            Odjavi se
          </a>
        )}
      </div>
    </div>
  );
};

export default SideBar;
