import React from 'react';
import termsofuseLogo from '../../images/logo-for-gallery.png';
import tan from '../../images/tann.png';
import favorite from '../../images/input-icon-first.svg';
import arrow from '../../images/input-second-icon.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const HeaderTermsofuse = () => {
  return (
    <div className='App-terms-of-use'>
      <div className='main-terms'>
        <BurgerMenu />
        <img src={termsofuseLogo} alt='' className='logo-termsofuse' />
        <h3 className='title-termsofuse'>MOJA KLOPICA</h3>
        <div className='div-title'>
          <div className='input-for-terms'>
            <img src={favorite} alt='' className='icon-favorite-input' />
            <input
              placeholder='Unesi adresu na kojoj se nalaziš'
              className='inputterms'
            />
            <img src={arrow} alt='' className='arrow-icon-input' />
          </div>
        </div>
        <div className='button-for-restoran-terms'>
          <button className='button-restoran'>Ulogujte se</button>
        </div>
      </div>
      <div className='title-for-termsofuse'>
        <h1 className='title-for-terms-of-use'>
          <span className='red'>MOJA KLOPICA</span> dodatne informacije
        </h1>
        <img src={tan} alt='' className='tan-image' />
      </div>
    </div>
  );
};

export default HeaderTermsofuse;
