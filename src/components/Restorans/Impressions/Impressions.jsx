import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import { RiStarSFill } from 'react-icons/ri';
import FooterForRestoran from '../FooterForRestoran/FooterForRestoran';
const Impressions = () => {
  return (
    <div className='main-impressions'>
      <Header />
      <div className='nav-and-rating'>
        <Nav />

        <div className='main-i'>
          <div className='impressions-first-box'>
            <p className='paragraf-for-first-box'>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Nullam mi elit, commodo nec ante
              <br /> id, ornare efficitur dui. Nulla in quam sed ex
              <br /> aliquam feugiat. In varius risus est, sed placerat <br />
              tortor mollis a. -Pera Perić
            </p>{' '}
            <br />
            <div className='first-hr' />
            <p className='second-paragraf-impressions'>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Nullam mi elit, commodo nec ante
              <br /> id, ornare efficitur dui. - Marija Simic
            </p>
            <div className='second-hr' />
            <p className='three-paragraf'>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. - Jovan Jovanovic
            </p>
            <div className='three-hr' />
            <p className='four-paragraf'>
              Nullam mi elit, commodo nec ante id, ornare
              <br /> efficitur dui. Nulla in quam sed ex aliquam feugiat.
              <br /> In varius risus est. - Sima Simic
            </p>
          </div>
          <div className='impressions-second-box'>
            <p className='impressions'>VAS UTISAK</p>
            <div className='impressions-hr'></div>
            <div className='star-rating-meni'>
              <p className='impressions-text'>
                Opsta{' '}
                <span className='list-starrating'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </span>
              </p>
              <p className='impressions-text'>
                Ambijent{' '}
                <span className='list-starrating'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </span>
              </p>
              <p className='impressions-text'>
                Atmosfera{' '}
                <span className='list-starrating'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </span>
              </p>
              <p className='impressions-text'>
                Hrana{' '}
                <span className='list-starrating'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </span>
              </p>
              <p className='impressions-text'>
                Higijena{' '}
                <span className='list-starrating'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </span>
              </p>
              <p className='impressions-text'>
                Cena{' '}
                <span className='list-starrating'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </span>
              </p>
              <p className='impressions-text'>
                Usluga{' '}
                <span className='list-starrating'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </span>
              </p>
              <div className='impressions-second-hr'></div>
              <h3 className='impressions-comentar'>Komentar</h3>
              <input
                type='text'
                placeholder='Ovde upisite komentar'
                className='impressions-input'
              />
              <br />
              <br />
              <button className='impressions-button'>Ostavite utisak</button>
            </div>
          </div>
        </div>
      </div>
      <FooterForRestoran />
    </div>
  );
};

export default Impressions;
