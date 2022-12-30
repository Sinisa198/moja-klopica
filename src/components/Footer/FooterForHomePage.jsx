import React from 'react';
import logo from '../../images/logo-homepage.png';
import { BsInstagram } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { SiTiktok } from 'react-icons/si';
import { BiCopyright } from 'react-icons/bi';
import { BsApple } from 'react-icons/bs';
import GooglePlay from '../../images/googleplay.png';
import BoxForGooglePlay from '../BoxForGooglePlay';
import ListLinks from '../ListLinks';

const FooterForHomePage = () => {
  return (
    <div className='footer-homepage'>
      <div className='logo-googleplay-app'>
        <img src={logo} alt='' className='logo-homepage' />
        <div className='googleplay-app'>
          <div className='home-app'>
            <p className='paragraf-for-home-app'>
              <BsApple className='bsapp' />
              Nabavite na <br />
              <span className='span-home'>APP STORE</span>
            </p>
          </div>
          <BoxForGooglePlay>
            <img src={GooglePlay} alt='' className='google-image' />
            <p className='paragraf-for-home-google'>
              Nabavite na <br />
              <span className='span-home'>APP STORE</span>
            </p>
          </BoxForGooglePlay>
        </div>
      </div>
      <div className='hr-footer'></div>
      <div className='faq'>
        <p>Uslovi korišćenja</p>
        <p> Obaveštenje o privatnosti</p>
        <p> FAQ</p>
      </div>
      <ListLinks>
        <div className='div-instagram'>
          <BsInstagram />
        </div>
        <div className='div-facebook'>
          <GrFacebookOption />
        </div>
        <div className='div-tiktok'>
          <SiTiktok />
        </div>
      </ListLinks>
      <p className='p-footer'>
        <BiCopyright />
        Moja klopica 2022
      </p>
    </div>
  );
};

export default FooterForHomePage;
