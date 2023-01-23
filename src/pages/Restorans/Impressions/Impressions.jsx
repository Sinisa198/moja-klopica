import React from 'react';
import HeaderRestaurant from '../../../components/Header-Restaurant/Header-Restaurant';
import Nav from '../../../components/Nav/Nav';
import FooterForRestoran from '../../../components/Footer/FooterForRestoran';
import ButtonForImpressions from '../../../components/ButtonForImpressions';
import starsImpressions from '../../../images/image-star-for-impressions.svg';
import emptystarr from '../../../images/emptystarr.svg';

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

        <div className='impressions-main-div'>
          <div className='first-box-impressions'>
            <div>
              <p className='paragraf-for-impressions'>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Nullam mi elit, commodo nec ante <br />
                id, ornare efficitur dui. Nulla in quam sed ex
                <br /> aliquam feugiat. In varius risus est, sed placerat <br />
                tortor mollis a.
                <span className='span-for-impressions'> - Pera Perić</span>
              </p>
              <div className='hr-for-impressions-under-text'></div>
            </div>
            <div>
              <p className='paragraf-for-impressions'>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Nullam mi elit, commodo nec ante <br />
                id, ornare efficitur dui.
                <span className='span-for-impressions'> - Marija Simić</span>
              </p>
            </div>
            <div className='three-box-text'>
              <div className='hr-for-impressions-under-text'></div>
              <p className='paragraf-for-impressions'>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit.
                <span className='span-for-impressions'> - Jovan Jovanović</span>
                <div className='hr-for-impressions-under-text4'></div>
              </p>
            </div>

            <p className='paragraf-for-impressions4'>
              Nullam mi elit, commodo nec ante id, ornare <br /> efficitur dui.
              Nulla in quam sed ex aliquam feugiat.
              <br /> In varius risus est.
              <span className='span-for-impressions'>- Sima Simić</span>
            </p>
          </div>
          <div className='rating-impressions'>
            <p className='title-impressions'>Vaš utisak</p>
            <div className='hr-for-impressions-under-text2'></div>
            <div className='div-for-rating-impressions'>
              <p className='paragraf-impressions-p'>Opšta</p>
              <div className='div-for-stars'>
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={emptystarr}
                  alt=''
                  className='stars-for-impressions'
                />
              </div>
            </div>
            <div className='div-for-rating-impressions'>
              <p className='paragraf-impressions-p'>Ambijent</p>
              <div className='div-for-stars'>
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={emptystarr}
                  alt=''
                  className='stars-for-impressions'
                />
              </div>
            </div>{' '}
            <div className='div-for-rating-impressions'>
              <p className='paragraf-impressions-p'>Atmosfera</p>
              <div className='div-for-stars'>
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={emptystarr}
                  alt=''
                  className='stars-for-impressions'
                />
              </div>
            </div>
            <div className='div-for-rating-impressions'>
              <p className='paragraf-impressions-p'>Hrana</p>
              <div className='div-for-stars'>
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
              </div>
            </div>
            <div className='div-for-rating-impressions'>
              <p className='paragraf-impressions-p'>Higijena</p>
              <div className='div-for-stars'>
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={emptystarr}
                  alt=''
                  className='stars-for-impressions'
                />
              </div>
            </div>
            <div className='div-for-rating-impressions'>
              <p className='paragraf-impressions-p'>Cene</p>
              <div className='div-for-stars'>
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={emptystarr}
                  alt=''
                  className='stars-for-impressions'
                />
              </div>
            </div>
            <div className='div-for-rating-impressions'>
              <p className='paragraf-impressions-p'>Usluga</p>
              <div className='div-for-stars'>
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={starsImpressions}
                  alt=''
                  className='stars-for-impressions'
                />
                <img
                  src={emptystarr}
                  alt=''
                  className='stars-for-impressions'
                />
              </div>
            </div>
            <div className='hr-for-impressions-under-text2'></div>
            <div className='input-for-impressions'>
              <p className='text-commentar'>Komentar</p>
              <input
                placeholder='Ovde ostavite komentar'
                className='input-for-impressionss'
              />
              <br />
              <br />

              <ButtonForImpressions>Ostavite komentar</ButtonForImpressions>
            </div>
          </div>
        </div>
      </div>
      <FooterForRestoran />
    </div>
  );
};

export default Impressions;
