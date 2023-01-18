import React from 'react';
import Nav from '../../../components/Nav/Nav';
import HeaderRestoran from '../../../components/Header-Restoran/Header-Restoran';
import lorem1 from '../../../images/lorem1.png';
import FooterForRestoran from '../../../components/Footer/FooterForRestoran';
import leftArrow from '../../../images/left-arrow.svg';
import rightArrow from '../../../images/right-arrow.svg';

const Gallery = () => {
  return (
    <div className='main-galery'>
      <div className='navigation-menu-for-restoran'>
        <HeaderRestoran />
      </div>
      <div className='nav-and-galery'>
        <div className='navigation-menu-for-restoran'>
          <Nav />
        </div>
        <div className='container'>
          <input type='checkbox' name='' id='' className='check' />
          <ul className='menu-items'>
            <li>
              <p>Početna</p>
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
        <div className='main-main-slide'>
          <div className='main-slider'>
            <div className='slider'>
              <img src={leftArrow} alt='' className='arrow-for-slider' />

              <a href='#slide1'>
                <img src={lorem1} className='slide' alt='image1' />
              </a>
              <a href='#slide2'>
                <img src={lorem1} className='slide' alt='image2' />
              </a>
              <a href='#slide3'>
                <img src={lorem1} className='slide' alt='image3' />
              </a>
              <a href='#slide4'>
                <img src={lorem1} className='slide' alt='image3' />
                <img src={rightArrow} alt='' className='arrow-for-slider' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterForRestoran />
    </div>
  );
};

export default Gallery;
