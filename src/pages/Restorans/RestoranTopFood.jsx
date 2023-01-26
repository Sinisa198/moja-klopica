import React from 'react';
import map from '../../images/map.png';
import Location from '../../images/location.png';
import HeaderRestaurant from '../../components/Header-Restaurant/Header-Restaurant';
import Phone from '../../images/phone.png';
import RestaurantNavigation from '../../components/RestaurantNavigation/RestaurantNavigation';
import FooterForRestoran from '../../components/Footer/FooterForRestoran';
import atinaImage from '../../images/restoranatina.png';
import topFood from '../../images/restorantopfood.png';
import mimaImage from '../../images/restoranmima.png';
import leftArrow from '../../images/left-arrow.svg';
import rightArrow from '../../images/right-arrow.svg';
import starsImpressions from '../../images/image-star-for-impressions.svg';
import emptystarr from '../../images/emptystarr.svg';

const RestoranTopFood = () => {
  return (
    <div>
      <div className='restoran-top-food'>
        <div className='navigation-menu-for-restoran'>
          <HeaderRestaurant />
        </div>
        <div className='navigation-menu'>
          <div className='navigation-menu-for-restoran'>
            <RestaurantNavigation />
          </div>

          <div className='main-main-restoran'>
            <div className='text-and-location'>
              <p className='text-restoran'>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Nullam mi elit, commodo nec
                <br /> ante id, ornare efficitur dui. Nulla in quam sed
                <br />
                ex aliquam feugiat. In varius risus est, sed
                <br /> placerat tortor mollis a. Donec nec aliquet ante. <br />
                Duis dictum, enim vel feugiat ultrices, sapien <br />
                massa lobortis erat, non mollis libero nisl quis
                <br /> quam. Nunc tristique eget metus a dictum. <br />
                Donec tincidunt tincidunt tellus vel sodales.
                <br /> Orci varius natoque penatibus et magnis dis
                <br /> parturient montes, nascetur ridiculus mus. Sed
                <br /> sapien urna, suscipit nec viverra at,
                <br /> congue at quam. Donec sodales ante a metus consequat,
                <br />
                vitae placerat mi maximus. Pellentesque <br />
                elementum nibh vitae lectus facilisis, in ornare
                <br /> turpis suscipit.
              </p>
              <div className='location'>
                <p className='paragraf-for-location'>Restoran Top Food 021</p>
                <div className='location-restoran'>
                  <img src={Location} alt='' className='location-image' />
                  <p className='text-for-location'>
                    Svetozala Miletica 26, 21000 Novi Sad
                  </p>
                </div>
                <div className='phone-restoran'>
                  <img src={Phone} alt='' className='phone-image' />
                  <p className='text-for-location'>0644226471</p>
                </div>
                <img src={map} className='image-map' alt='' />
              </div>
            </div>
          </div>
          <div className='box-for-slide-top-food'>
            <p className='same-place-restoran'>Slicna mesta</p>
            <div className='slide-box-together'>
              <img src={leftArrow} alt='' className='icon-for-slide' />

              <div className='box-together-topfood'>
                <img src={atinaImage} alt='' className='image-for-slide' />
                <div className='second-placee'>
                  <p className='name-for-restoran'>Restoran Atina</p>
                  <p className='under-name'>RESTORANI Cafe Bar</p>
                  <p className='rating'>
                    4.5
                    <img
                      src={starsImpressions}
                      alt=''
                      className='stars-top-food'
                    />
                    <img
                      src={starsImpressions}
                      alt=''
                      className='stars-top-food'
                    />
                    <img
                      src={starsImpressions}
                      alt=''
                      className='stars-top-food'
                    />
                    <img
                      src={starsImpressions}
                      alt=''
                      className='stars-top-food'
                    />
                    <img src={emptystarr} alt='' className='stars-top-food' />
                  </p>
                </div>
              </div>
              <div className='box-together-topfood'>
                <img src={topFood} alt='' className='image-for-slide' />
                <div className='second-placee'>
                  <p className='name-for-restoran'>Restoran Top FOOD 021</p>
                  <p className='under-name'>RESTORANI * DOmaca Kuhinja</p>
                  <p className='rating'>
                    4.5
                    <img
                      src={starsImpressions}
                      alt=''
                      className='stars-top-food'
                    />
                    <img
                      src={starsImpressions}
                      alt=''
                      className='stars-top-food'
                    />
                    <img
                      src={starsImpressions}
                      alt=''
                      className='stars-top-food'
                    />
                    <img
                      src={starsImpressions}
                      alt=''
                      className='stars-top-food'
                    />
                    <img src={emptystarr} alt='' className='stars-top-food' />
                  </p>
                </div>
              </div>
              <div className='box-together-topfood'>
                <img src={mimaImage} alt='' className='image-for-slide' />
                <div className='second-placee'>
                  <p className='name-for-restoran'>Restoran Mima' s</p>
                  <p className='under-name'>RESTORANI Cafe Bar</p>
                  <p className='rating'>
                    4.5
                    <img
                      src={starsImpressions}
                      alt=''
                      className='stars-top-food'
                    />
                    <img
                      src={starsImpressions}
                      alt=''
                      className='stars-top-food'
                    />
                    <img
                      src={starsImpressions}
                      alt=''
                      className='stars-top-food'
                    />
                    <img
                      src={starsImpressions}
                      alt=''
                      className='stars-top-food'
                    />
                    <img src={emptystarr} alt='' className='stars-top-food' />
                  </p>
                </div>
              </div>
              <img src={rightArrow} alt='' className='icon-for-slide' />
            </div>
          </div>
        </div>
      </div>
      <div className='footer-for-home-page'>
        <FooterForRestoran />
      </div>
    </div>
  );
};

export default RestoranTopFood;
