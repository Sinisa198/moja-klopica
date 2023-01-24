import React from 'react';
import HeaderRestaurant from '../../../components/Header-Restaurant/Header-Restaurant';
import Nav from '../../../components/Nav/Nav';
import { RiStarSFill } from 'react-icons/ri';
import FooterForRestaurant from '../../../components/Footer/FooterForRestaurant';
import emptystar from '../../../images/emptystar.png';
import ButtonForImpressions from '../../../components/ButtonForImpressions';
import starempty from '../../../images/emptystar.svg';

const Impressions = () => {
  return (
    <div className='main-impressions'>
      <div className='navigation-menu-for-restoran'>
        <HeaderRestaurant />
      </div>
      <div className='nav-and-rating'>
        <div className='navigation-menu-for-restoran'>
          <Nav />
        </div>

        <div className='main-i'>
          <div className='impressions-first-box'>
            <p className='paragraf-for-first-box'>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Nullam mi elit, commodo nec ante
              <br /> id, ornare efficitur dui. Nulla in quam sed ex
              <br /> aliquam feugiat. In varius risus est, sed placerat <br />
              tortor mollis a. - <span className='text-name'>Pera Perić</span>
            </p>
            <br />
            <div className='first-hr' />
            <p className='second-paragraf-impressions'>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Nullam mi elit, commodo nec ante
              <br /> id, ornare efficitur dui. -
              <span className='text-name'> Marija Simic</span>
            </p>
            <div className='second-hr' />
            <p className='three-paragraf'>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. -
              <span className='text-name'>Jovan Jovanovic</span>
            </p>
            <div className='three-hr' />
            <p className='four-paragraf'>
              Nullam mi elit, commodo nec ante id, ornare
              <br /> efficitur dui. Nulla in quam sed ex aliquam feugiat.
              <br /> In varius risus est. -
              <span className='text-name'> Sima Simic</span>
            </p>
            <div className='impressions-second-boxs'>
              <p className='impressions'>VAS UTISAK</p>
              <div className='impressions-hr'></div>
              <div className='star-rating-meni'>
                <p className='impressions-text'>
                  Opsta
                  <span className='list-starrating'>
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <img src={starempty} alt='' className='image-empty-star' />
                  </span>
                </p>
                <p className='impressions-text'>
                  Ambijent
                  <span className='list-starrating'>
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <img src={emptystar} alt='' className='image-empty-star' />
                  </span>
                </p>
                <p className='impressions-text'>
                  Atmosfera
                  <span className='list-starrating'>
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <img src={emptystar} alt='' className='image-empty-star' />
                  </span>
                </p>
                <p className='impressions-text'>
                  Hrana
                  <span className='list-starrating'>
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                  </span>
                </p>
                <p className='impressions-text'>
                  Higijena
                  <span className='list-starrating'>
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <img src={emptystar} alt='' className='image-empty-star' />
                  </span>
                </p>
                <p className='impressions-text'>
                  Cena
                  <span className='list-starrating'>
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <img src={emptystar} alt='' className='image-empty-star' />
                  </span>
                </p>
                <p className='impressions-text'>
                  Usluga
                  <span className='list-starrating'>
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <RiStarSFill className='star-for-impressions' />
                    <img src={emptystar} alt='' className='image-empty-star' />
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
                <ButtonForImpressions>Ostavite utisak</ButtonForImpressions>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterForRestaurant />
    </div>
  );
};

export default Impressions;
