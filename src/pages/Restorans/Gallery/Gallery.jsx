import React from 'react';
import Nav from '../../../components/Nav/Nav';
import HeaderRestaurant from '../../../components/Header-Restaurant/Header-Restaurant';
import FooterForRestoran from '../../../components/Footer/FooterForRestoran';
import slideImage from '../../../images/lorem1.png';
import leftArrow from '../../../images/arrow-for-slide.svg';
import rightArrow from '../../../images/icon-right.png';

const Gallery = () => {
  const btnpressprev = () => {
    const containerImage = document.querySelector('.product-container');
    const widthBox = containerImage.clientWidth;
    containerImage.scrollLeft = containerImage.scrollLeft - widthBox;
  };

  const btnpressnext = () => {
    const containerImage = document.querySelector('.product-container');
    const widthBox = containerImage.clientWidth;
    containerImage.scrollLeft = containerImage.scrollLeft + widthBox;
  };
  return (
    <div className='main-galery'>
      <div className='navigation-menu-for-restoran'>
        <HeaderRestaurant />
      </div>
      <div className='nav-and-galery'>
        <div className='navigation-menu-for-restoran'>
          <Nav />
        </div>
        <div className='product-carousel'>
          <img
            src={leftArrow}
            alt=''
            className='pre-btn'
            onClick={btnpressprev}
          />
          <img
            src={rightArrow}
            alt=''
            className='next-btn'
            onClick={btnpressnext}
          />
          <div className='product-container'>
            <img src={slideImage} alt='' className='p-image' />
            <img src={slideImage} alt='' className='p-image' />
            <img src={slideImage} alt='' className='p-image' />
            <img src={slideImage} alt='' className='p-image' />
            <img src={slideImage} alt='' className='p-image' />
            <img src={slideImage} alt='' className='p-image' />
            <img src={slideImage} alt='' className='p-image' />
          </div>
        </div>
      </div>
      <FooterForRestoran />
    </div>
  );
};

export default Gallery;
