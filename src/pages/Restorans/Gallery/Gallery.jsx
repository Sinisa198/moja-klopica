import React from 'react';
import Nav from '../../../components/Nav/Nav';
import HeaderRestaurant from '../../../components/Header-Restaurant/Header-Restaurant';
import FooterForRestoran from '../../../components/Footer/FooterForRestoran';
import slideImage from '../../../images/lorem1.png';
import leftArrow from '../../../images/arrow-for-slide.svg';
import rightArrow from '../../../images/icon-right.png';

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
        <img src={leftArrow} alt='' className='icon-arrow' />
        <img src={slideImage} alt='' className='image-for-slide' />
        <img src={slideImage} alt='' className='image-for-slide2' />
        <img src={rightArrow} alt='' />
      </div>
      <FooterForRestoran />
    </div>
  );
};

export default Gallery;
