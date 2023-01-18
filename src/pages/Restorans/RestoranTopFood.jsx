import React from 'react';
import map from '../../images/map.png';
import Location from '../../images/location.png';
import HeaderRestoran from '../../components/Header-Restoran/Header-Restoran';
import Phone from '../../images/phone.png';
import listpicture from '../../images/listpicture.png';
import { RiStarSFill } from 'react-icons/ri';
import itemsBox from '../../components/data/restoranItems';
import Nav from '../../components/Nav/Nav';
import FooterForRestoran from '../../components/Footer/FooterForRestoran';

const RestoranTopFood = () => {
  return (
    <div>
      <div className='restoran-top-food'>
        <div className='navigation-menu-for-restoran'>
          <HeaderRestoran />
        </div>
        <div className='navigation-menu'>
          <div className='navigation-menu-for-restoran'>
            <Nav />
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
                <span className='same-place'>Slična mesta</span>
              </p>
              <div className='location'>
                <p>Restoran Top Food 021</p>
                <div className='location-restoran'>
                  <img src={Location} alt='' className='location-image' />
                  <p>Svetozala Miletica 26, 21000 Novi Sad</p>
                </div>
                <div className='phone-restoran'>
                  <img src={Phone} alt='' className='phone-image' />
                  <p>0644226471</p>
                </div>
                <img src={map} className='image-map' alt='' />{' '}
                {/* <div className='hr-for-restoran'></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className='list-restoran-div'>
          {itemsBox.map((item) => (
            <div className='main-div' key={item.title + item.paragraf}>
              <div className='div-for-list-restoran'>
                <div>
                  <img
                    src={listpicture}
                    alt=''
                    className='image-div-restoran'
                  />
                  <p className='list-paragraf-restoran'>{item.paragraf}</p>
                  <div className='div-for-title-rating'>
                    <div className='list-title-restoran'>{item.title}</div>
                    <div className='rating-div'>
                      <p className='rating-restoran'>{item.rating}</p>{' '}
                      <RiStarSFill className='rating-star-restoran' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='footer-for-home-page'>
        <FooterForRestoran />
      </div>
    </div>
  );
};

export default RestoranTopFood;
