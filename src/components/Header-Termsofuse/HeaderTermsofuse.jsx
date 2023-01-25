import React from 'react';
import termsofuseLogo from '../../images/logo-for-terms-of-use.png';
import tan from '../../images/tan-for-terms-of-use.png';
import favorite from '../../images/input-icon-first.svg';
import circle from '../../images/circle.svg';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

const HeaderTermsofuse = () => {
  return (
    <div className='App-terms-of-use'>
      <div className='main-terms'>
        <BurgerMenu />
        <img src={termsofuseLogo} alt='' className='logo-termsofuse' />

        <div className='div-title'>
          <div className='input-for-terms'>
            <img src={favorite} alt='' className='icon-favorite-input' />
            <input
              placeholder='Unesi adresu na kojoj se nalaziš'
              className='inputterms'
            />
            <img src={circle} alt='' className='arrow-icon-input' />
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
