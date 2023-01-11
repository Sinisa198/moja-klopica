import React from 'react';
import Nav from '../../../components/Nav/Nav';
import HeaderRestoran from '../../../components/Header-Restoran/Header-Restoran';
import lorem1 from '../../../images/lorem1.png';
import arrow from '../../../images/arrow.png';
import FooterForRestoran from '../../../components/Footer/FooterForRestoran';

const Gallery = () => {
  return (
    <div className='main-galery'>
      <HeaderRestoran />
      <div className='nav-and-galery'>
        <Nav />
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
        <div className='main-slider'>
          <div className='slider'>
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
            </a>
          </div>

          <div className='controls'>
            <a href='#slide3' className='next'>
              <img src={arrow} alt='' />
            </a>
            <a href='#slide3' className='next'>
              <img src={arrow} alt='' />
            </a>
          </div>
        </div>
      </div>
      <FooterForRestoran />
    </div>
  );
};

export default Gallery;
