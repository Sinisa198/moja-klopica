import React from 'react';
import { NavLink } from 'react-router-dom';
import logoFooter from '../../images/logofooter.png';
import location from '../../images/location.svg';
import planet from '../../images/planet.png';
import appBox from '../../images/app-box.svg';
import googleBox from '../../images/google-box.svg';
import copyRight from '../../images/copyr.svg';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-nav'>
        <div className='footer-logo'>
          <img src={logoFooter} alt='' className='logo-for-footer' />
        </div>
        <div className='footer-links'>
          <NavLink to='' className='links'>
            Pocetna
          </NavLink>
          <NavLink to='/menu' className='links'>
            Meni
          </NavLink>
          <NavLink to='/about' className='links'>
            O nama
          </NavLink>
        </div>
        <div className='app-google-box'>
          <div className='app-box'>
            <img src={appBox} alt='' />
          </div>
          <div className='google-box'>
            <img src={googleBox} alt='' />
          </div>
        </div>
      </div>

      <hr className='hr-footer' />

      <div className='footer-privacy'>
        <div className='langue-footer'>
          <div className='text-and-icon'>
            <img src={location} alt='' className='icon-location' />
            Srbija
          </div>
          <div className='text-and-icon-second'>
            <img src={planet} alt='' className='icon-planet' />
            Srpski
          </div>
        </div>
        <div className='terms-of-use-footer'>
          <div className='other-termsofuse'>
            <p>Uslovi koriscenja</p>
            <p>Politika privatnosti</p>
            <p>FAQ</p>
          </div>
          <div className='div-for-copyright'>
            <img src={copyRight} alt='' className='icon-copyright' />
            Moja klopica 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
