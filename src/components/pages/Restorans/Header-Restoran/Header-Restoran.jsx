import React from 'react';
import logoRestoran from '../../../../images/logo-restoran.png';
import miniLogo from '../../../../images/miniLogo.png';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import firstimageRestoran from '../../../../images/firstimageRestoran.png';
import Burger from '../../../../images/burger.png';
import { AiTwotoneStar } from 'react-icons/ai';
import favorite from '../../../../images/icon-for-input.png';

const Header = () => {
  return (
    <div className='main-header'>
      <div className='burger-logo'>
        <img src={Burger} className='burger-meni' alt='' />
        <img src={miniLogo} alt='' className='logo-restoran' />
        <div>
          <p className='restoran-paragraf'>Moja klopica</p>
        </div>{' '}
        <div class='input'>
          <span class='prefix'>
            <img src={favorite} alt='' />
          </span>
          <input />
          <span class='suffix'>
            <MdOutlineArrowForwardIos />
          </span>
        </div>
        <div className='button-for-restoran'>
          <button className='button-restoran'>Ulogujte se</button>
        </div>
      </div>
      <div className='box-together'>
        <div className='box'>
          <img src={firstimageRestoran} alt='' className='background-for-box' />
          <img src={logoRestoran} alt='' className='logo-for-restoran' />
        </div>
        <div className='second-box'>
          <div className='text-for-restoran'>
            <h2 className='title-for-restoran'>Restoran Top Food 021</h2>
            <p className='paragraf-restoran'>
              RESTORANI * Domaca kuhinja * 4,2
              <AiTwotoneStar /> 60 ocena Besplatna dostava
            </p>
            <p className='second-paragraf'>
              <span className='span-green'> Otvoreno sad </span>* Zatvara se u
              23:30{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
