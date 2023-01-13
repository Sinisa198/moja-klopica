import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Forms from '../../components/Forms/Forms';
import miniTopFood from '../../images/mini-top-food.png';
import restoran from '../../images/home-restoran.png';
import meni from '../../images/meni-home.png';
import phone from '../../images/home-phone.png';
import FooterForHomePage from '../../components/Footer/FooterForHomePage';
import { RiStarSFill } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import Menu from '../../components/Menu';
import Profile from '../../components/Profile';

const HomePage = () => {
  const navigate = useNavigate();
  const goToMeni = () => navigate('/meni');
  const goToRestoran = () => navigate('/topfood');
  const goToPhone = () => navigate('/topfood');

  return (
    <div className='forms'>
      <div className='main-home'>
        <div className='home-page-navigation'>
          <Navigation />
        </div>
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
              <div className='stars-home'>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <AiOutlineStar />
                <p className='paragraf-rating'>30 ocena</p>
              </div>
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
                    <Profile>
                      <img src={restoran} alt='' className='icon-home' />
                      Profil
                    </Profile>
                  </div>
                  <div className='day-times'>
                    <p className='day-and-price-second'>Pet: 08:00 - 02:00</p>
                    <p className='day-price-second'>
                      Cena Komplet menija:{' '}
                      <span className='home-price'>539-630 din</span>
                    </p>
                    <Menu>
                      <img src={meni} alt='' className='icon-home' />
                      Meni
                    </Menu>
                  </div>
                  <div className='day-times'>
                    <p className='day-and-price-last'>
                      Sub-Ned: <span className='closed'>Zatvoreno</span>
                    </p>
                    <p className='nav-home-last' onClick={goToPhone}>
                      <img src={phone} alt='' className='icon-home' />
                      Pozovi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <div className='stars-home'>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <AiOutlineStar />
                <p className='paragraf-rating'>50 ocena</p>
              </div>
            </p>
            <div className='home-hr'></div>
            <p className='working-time'>RADNO VREME</p>
            <div className='three-day-times'>
              <p>
                Pon-Čet: <span className='time'>08:00 - 23:00</span>
              </p>
              <p>
                Pet: <span className='time'>08:00 - 02:00</span>
              </p>
              <p>
                Sub-Ned: <span className='time'>Zatvoreno</span>
              </p>
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
            <div className='hr-for-nav'></div>
            <div className='three-nav'>
              <div className='div-call'>
                <p className='phone-navigation' onClick={goToPhone}>
                  <img src={phone} alt='' className='nav-icons' />
                  Pozovi
                </p>
              </div>
              <div className='div-meni'>
                <p className='meni-navigation' onClick={goToMeni}>
                  {' '}
                  <img src={meni} alt='' className='nav-icons' />
                  Pogledaj Meni
                </p>
              </div>
              <div className='div-restoran'>
                <p className='restoran-navigation' onClick={goToRestoran}>
                  {' '}
                  <img src={restoran} alt='' className='nav-icons' />
                  Profil Restorana
                </p>
              </div>
            </div>
          </div>
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
              <div className='stars-home'>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <AiOutlineStar />
                <p className='paragraf-rating'>30 ocena</p>
              </div>
            </p>

            <div className='home-hr'></div>

            <p className='working-time'>RADNO VREME </p>
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
            <div className='hr-for-nav'></div>
            <div className='three-nav'>
              <p className='phone-navigation'>
                <img
                  src={phone}
                  alt=''
                  className='nav-icons'
                  onClick={goToPhone}
                />
                Pozovi
              </p>
              <p className='meni-navigation' onClick={goToMeni}>
                <img src={meni} alt='' className='nav-icons' />
                Pogledaj Meni
              </p>
              <p className='restoran-navigation' onClick={goToRestoran}>
                {' '}
                <img src={restoran} alt='' className='nav-icons' />
                Profil Restorana
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-restoran'>
        {' '}
        <FooterForHomePage />{' '}
      </div>
    </div>
  );
};
export default HomePage;
