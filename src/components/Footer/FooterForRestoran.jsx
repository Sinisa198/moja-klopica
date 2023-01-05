import React from 'react';
import logoFooter from '../../images/logo.png';
import { BsInstagram } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { SiTiktok } from 'react-icons/si';
import { BsApple } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import { BiWorld } from 'react-icons/bi';
import { BiCopyright } from 'react-icons/bi';
import GoogleplayImage from '../../images/googleplay.png';

const FooterForRestoran = () => {
  return (
    <div className='footer-main'>
      <img src={logoFooter} className='logo-footer' alt='' />
      <div className='box-for-appstore'>
        <div>
          <BsApple className='icon-apple' />
          <p className='paragraf-app'>
            Nabavite na
            <br />
            <span className='span-app'>App Store</span>
          </p>
        </div>
        <p className='paragrafApp'></p>
      </div>
      <div className='box-for-googleplay'>
        <div>
          <img src={GoogleplayImage} alt='' className='icons-box' />
        </div>
        <p className='paragrafGoogle'>
          Nabavite na <br /> <span className='span-google'>Google Play</span>
        </p>
      </div>
      <div className='list-icons'>
        <div className='links'>
          <BsInstagram className='iconss' />
          <GrFacebookOption className='iconss' />
          <SiTiktok className='iconss' />
        </div>
        <p className='paragraf-copyright'>
          <BiCopyright className='copy-right' />
          Moja Klopica 2022
        </p>
        <div className='line'></div>
        <div className='location'>
          <div className='text-for-footer'>
            <p>
              <TiLocation />
              Srbija
            </p>
            <p>
              <BiWorld />
              Srpski
            </p>
          </div>
          <div className='left-text'>
            <p>FAQ</p>
            <p>Obaveštenje o privatnosti</p>
            <p>Uslovi korišćenja</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterForRestoran;
