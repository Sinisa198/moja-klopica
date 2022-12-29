import React from 'react';
import Nav from '../Nav/Nav';
import HeaderRestoran from '../Header-Restoran/Header-Restoran';
import lorem1 from '../../../../images/lorem1.png';
import arrow from '../../../../images/arrow.png';
import FooterForRestoran from '../../../Footer/FooterForRestoran';

const Gallery = () => {
  return (
    <div className='main-galery'>
      <HeaderRestoran />
      <div className='nav-and-galery'>
        <Nav />

        <div className='main-slider'>
          <div class='slider'>
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

          <div class='controls'>
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
