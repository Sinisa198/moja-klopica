import Header from '../../components/Header/Header';
import { useState } from 'react';
import Footer from '../../components/Footer/FooterForRestoran';
import map from '../../images/map.svg';
import watch from '../../images/watch.svg';
import leftArrow from '../../images/left-arrow.svg';
import rightArrow from '../../images/right-arrow.svg';

import locationRestourant from '../../images/location-restourant.svg';
import phoneRestourant from '../../images/phone-restourant.svg';
import imageRestourant from '../../images/image-restourant.svg';

const RestourantTopFood = () => {
  const images = [
    imageRestourant,
    imageRestourant,
    imageRestourant,
    imageRestourant,
    imageRestourant,
    imageRestourant,
  ];
  const [sliderPosition, setSliderPosition] = useState(0);

  const handlePreviousClick = () => {
    setSliderPosition(sliderPosition === 0 ? 0 : sliderPosition - 1);
  };

  const handleNextClick = () => {
    setSliderPosition(
      sliderPosition === images.length - 1 ? sliderPosition : sliderPosition + 1
    );
  };

  return (
    <div className='restourant-wrapper'>
      <div className='div-for-header-background'>
        <Header />
      </div>

      <div className='div-wrapper-restourant'>
        <div className='main-div-restourant'>
          <div className='title-restourant'>Restoran Top Food 021</div>
          <div className='topfood'>
            <div className='day-restourant'>
              <img src={watch} alt='' className='icon-restaurant' />
              <p className='paragraf-information'>Ponedeljak-Petak, 12h-15h</p>
            </div>
            <div className='adress-restourant'>
              <img
                src={locationRestourant}
                alt=''
                className='icon-restaurant'
              />
              <p className='paragraf-information'>
                Svetozara Miletića 26, 21000 Novi Sad
              </p>
            </div>
            <div className='phone-restourant'>
              <img src={phoneRestourant} alt='' className='icon-restaurant' />
              <p className='paragraf-information'> 0644226471</p>
            </div>
          </div>
          <div className='paragraf-text-restourant'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
            elit, commodo nec ante id, ornare efficitur dui. Nulla in quam sed
            ex aliquam feugiat. In varius risus est, sed placerat tortor mollis
            a. Donec nec aliquet ante. Duis dictum, enim vel feugiat ultrices,
            sapien massa lobortis erat, non mollis libero nisl quis quam. Nunc
            tristique eget metus a dictum.
          </div>
        </div>
        <div className='div-image-map'>
          <img src={map} alt='' className='map-image' />
        </div>
      </div>
      <p className='gallery-text'>Galerija</p>

      <div className='list-image'>
        <img src={imageRestourant} className='image-list' alt='' />
        <img src={imageRestourant} className='image-list' alt='' />
        <img src={imageRestourant} className='image-list' alt='' />
        <img src={imageRestourant} className='image-list' alt='' />
        <img src={imageRestourant} className='image-list' alt='' />
        <img src={imageRestourant} className='image-list' alt='' />
      </div>
      <div
        className='slider-container'
        style={{ width: '375px', overflow: 'hidden' }}
      >
        <div
          className='slider-images'
          style={{
            display: 'flex',
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(-${sliderPosition * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img src={image} className='slider-image' key={index} alt='' />
          ))}
        </div>
        <div className='slider-buttons'>
          <img src={leftArrow} onClick={handlePreviousClick} alt='' />
          <img src={rightArrow} onClick={handleNextClick} alt='' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RestourantTopFood;
