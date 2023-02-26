import React from 'react';
import profile from '../../images/profile.svg';
import lock from '../../images/lock.svg';
import miniProfile from '../../images/mini-profile.svg';
import email from '../../images/email-changeprofile.svg';
import phone from '../../images/phone-changeprofile.svg';
import pen from '../../images/icon-for-changeprofile.svg';
import Confirm from '../../components/Buttons/Confirm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/FooterForRestoran';

const ChangeProfile = () => {
  return (
    <div className='wrapper-changeprofile'>
      <div className='header-reservation'>
        <Header />
      </div>
      <div className='change-profile-main'>
        <p className='changeprofile-text'>Izmena profila</p>
        <div className='image-change-profile'>
          <img src={profile} alt='' className='icon-changeprofile' />
        </div>
        <div className='lock-text'>
          <img src={lock} alt='' />
          <p>Promeni sifru</p>
        </div>
        <div className='inputs-changeprofile'>
          <div className='icon-input-changeprofile'>
            <img src={miniProfile} alt='' className='icons' />
            <input className='input-changeprofile' placeholder='Ime' />
            <img src={pen} alt='' />
          </div>
          <div className='icon-input-changeprofile'>
            <img src={miniProfile} alt='' className='icons' />
            <input className='input-changeprofile' placeholder='Ime' />
            <img src={pen} alt='' />
          </div>
          <div className='icon-input-changeprofile'>
            <img src={email} alt='' className='icons' />
            <input className='input-changeprofile' placeholder='Ime' />
            <img src={pen} alt='' />
          </div>
          <div className='icon-input-changeprofile'>
            <img src={phone} alt='' className='icons' />
            <input
              type='number'
              className='input-changeprofile-phone'
              placeholder='Broj telefona'
            />
            <img src={pen} alt='' />
          </div>
          <Confirm>Potvrdi</Confirm>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangeProfile;
