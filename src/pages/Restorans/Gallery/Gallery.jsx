import React from 'react';
import Nav from '../../../components/Nav/Nav';
import HeaderRestaurant from '../../../components/Header-Restaurant/Header-Restaurant';
import lorem1 from '../../../images/lorem1.png';
import FooterForRestoran from '../../../components/Footer/FooterForRestoran';
import leftArrow from '../../../images/left-arrow.svg';
import rightArrow from '../../../images/right-arrow.svg';

const Gallery = () => {
  return (
    <div className='main-galery'>
      <div className='navigation-menu-for-restoran'>
        <HeaderRestaurant />
      </div>
      <div className='nav-and-galery'>
        <div className='navigation-menu-for-restoran'>
          <Nav />
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
