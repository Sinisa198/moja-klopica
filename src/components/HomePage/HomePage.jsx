import React from 'react';
import Navigation from '../Navigation/Navigation';
import Forms from '../Forms/Forms';
import miniTopFood from '../../images/mini-top-food.png';
import { AiOutlineStar } from 'react-icons/ai';
import restoran from '../../images/home-restoran.png';
import meni from '../../images/home-meni.png';
import phone from '../../images/home-phone.png';
const HomePage = () => {
  return (
    <div className='forms'>
      <div className='main-home'>
        <Navigation />
        <Forms />
      </div>
      <div className='second-box-home'>
        <div className='first-box'>
          <img src={miniTopFood} alt='' className='mini-top-food' />
          <div className='paragraf-stars'>
            <p className='paragraf-home'>RESTORANI * Domaca Kuhinja</p>
            <p className='title-home'>Restoran Top FOOD 021</p>
            <p className='adress'>Svetozara Miletića 26, 21000 Novi Sad</p>
            <p className='text-home'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              lacinia nulla luctus sapien malesuada congue. Phasellus ut felis
              mi. Quis
              <br /> que pulvinar tincidunt arcu quis dignissim. Duis et egestas
              sem...
            </p>
            <div className='home-hr'></div>
            <div className='text-bottom-together'>
              <div className='text-bottom'>
                <p className='working-time'>RADNO VREME</p>
                <div className='day-times-price'>
                  <div className='day-times'>
                    <p className='day-and-price'>
                      Pon-Čet: <span className='span-times'>08:00 - 23:00</span>
                    </p>
                    <p className='day-price'>
                      Cena dnevnog menija:{' '}
                      <span className='home-price'>460-600 din</span>
                    </p>
                    <p className='nav-home'>
                      <img src={restoran} alt='' className='icon-home' />
                      Profil
                    </p>
                  </div>
                  <div className='day-times'>
                    <p className='day-and-price-second'>Pet: 08:00 - 02:00</p>
                    <p className='day-price-second'>
                      Cena Komplet menija:{' '}
                      <span className='home-price'>539-630 din</span>
                    </p>
                    <p className='nav-second'>
                      <img src={meni} alt='' className='icon-home' />
                      Meni
                    </p>
                  </div>
                  <div className='day-times'>
                    <p className='day-and-price-last'>
                      Sub-Ned: <span className='closed'>Zatvoreno</span>
                    </p>
                    <p className='nav-home-last'>
                      <img src={phone} alt='' className='icon-home' />
                      Pozovi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AiOutlineStar className='home-stars' />
          <AiOutlineStar className='home-stars' />
          <AiOutlineStar className='home-stars' />
          <AiOutlineStar className='home-stars' />
          <AiOutlineStar />
          <p>30 ocena</p>
        </div>
      </div>
      <div className='three-box-home'>
        <div className='first-box'>
          <img src={miniTopFood} alt='' className='mini-top-food' />
          <div className='paragraf-stars'>
            <p className='paragraf-home'>RESTORANI * Kineska Kuhinja</p>
            <p className='title-home'>Lorem Ipsum</p>
            <p className='adress'>Lorem Ipsum 26, 21000 Novi Sad</p>
            <p className='text-home'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              lacinia nulla luctus sapien malesuada congue. Phasellus ut felis
              mi. Quis
              <br /> que pulvinar tincidunt arcu quis dignissim. Duis et egestas
              sem...
            </p>
            <div className='home-hr'></div>
            <p className='working-time'>RADNO VREME</p>
            <div className='three-day-times'>
              <p>Pon-Čet: 08:00 - 23:00</p>
              <p>Pet: 08:00 - 02:00</p>
              <p>Sub-Ned: Zatvoreno</p>
            </div>
            <div className='three-price'>
              <p>
                Cena dnevnog menija:{' '}
                <span className='three-span'>460-600 din</span>
              </p>
              <p>
                CENA KOMPLET MENIJA :{' '}
                <span className='three-span'>539-630 din</span>
              </p>
            </div>
            <div className='three-nav'>
              <p>Pozovi</p>
              <p>Pogledaj Meni</p>
              <p>Profil restorana</p>
            </div>
          </div>
          <AiOutlineStar className='home-stars' />
          <AiOutlineStar className='home-stars' />
          <AiOutlineStar className='home-stars' />
          <AiOutlineStar className='home-stars' />
          <AiOutlineStar />
          <p>30 ocena</p>
        </div>
      </div>
      <div className='four-box-home'>
        <div className='first-box'>
          <img src={miniTopFood} alt='' className='mini-top-food' />
          <div className='paragraf-stars'>
            <p className='paragraf-home'>RESTORANI * Domaca Kuhinja</p>
            <p className='title-home'>Lorem Ipsum</p>
            <p className='adress'>Lorem Ipsum 26, 21000 Novi Sad</p>
            <p className='text-home'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              lacinia nulla luctus sapien malesuada congue. Phasellus ut felis
              mi. Quis
              <br /> que pulvinar tincidunt arcu quis dignissim. Duis et egestas
              sem...
            </p>

            <div className='home-hr'></div>
            <p className='working-time'>RADNO VREME</p>
            <div className='three-day-times'>
              <p>Pon-Čet: 08:00 - 23:00</p>
              <p>Pet: 08:00 - 02:00</p>
              <p>Sub-Ned: Zatvoreno</p>
            </div>
            <div className='three-price'>
              <p>
                Cena dnevnog menija:{' '}
                <span className='three-span'>460-600 din</span>
              </p>
              <p>
                CENA KOMPLET MENIJA :{' '}
                <span className='three-span'>539-630 din</span>
              </p>
            </div>
          </div>
          <AiOutlineStar className='home-stars' />
          <AiOutlineStar className='home-stars' />
          <AiOutlineStar className='home-stars' />
          <AiOutlineStar className='home-stars' />
          <AiOutlineStar />
          <p>30 ocena</p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
