import React from 'react';
import termsofuseLogo from '../../images/termsofuse-logo.png';
import tan from '../../images/tan.png';
import favorite from '../../images/input-icon-first.svg';
import arrow from '../../images/input-second-icon.svg';

const HeaderTermsofuse = () => {
  return (
    <div className='App-terms-of-use'>
      <div className='main-terms'>
        <div className='container'>
          <input type='checkbox' name='' id='' className='check' />
          <ul className='menu-items'>
            <li>
              <p className='text'>Početna</p>
            </li>
            <li>
              <p>Kategorije</p>
            </li>
            <li>
              <p>Ponude</p>
            </li>
            <li>
              <p>Pomoć</p>
            </li>
            <li>
              <p>Kontakt</p>
            </li>
          </ul>
          <div className='ham-menu'>
            <span className='line line1'></span>
            <span className='line line2'></span>
            <span className='line line3'></span>
          </div>
        </div>
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
