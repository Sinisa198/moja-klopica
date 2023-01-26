import React from 'react';
import RestaurantNavigation from '../../../components/RestaurantNavigation/RestaurantNavigation';
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
          <RestaurantNavigation />
        </div>
        <div className='main-main-slide'>
          <img src={leftArrow} alt='' />
          <img src={lorem1} alt='' className='image-for-slide-gallery' />
          <img src={lorem1} alt='' className='image-for-slide-gallery' />
          <img src={lorem1} alt='' className='image-for-slide-gallery' />
          <img src={rightArrow} alt='' />
        </div>
        <div>
          <FooterForRestoran />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
