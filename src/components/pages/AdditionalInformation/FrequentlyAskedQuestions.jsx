import React from 'react';
import { useNavigate } from 'react-router';
import termsofuseLogo from '../../../images/termsofuse-logo.png';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import FooterForRestoran from '../../Footer/FooterForRestoran';
import tan from '../../../images/tan.png';
import burgerw from '../../../images/burger-w.png';

const TermsOfUse = () => {
  const navigate = useNavigate();
  const navigateToNotifications = () => navigate('/privacynotices');
  const navigateToTerms = () => navigate('/termsofuse');
  const toTerms = () => navigate('/askedquestions');

  return (
    <div className='terms-of-use'>
      <div className='App-terms-of-use'>
        <div className='main-terms'>
          <img src={burgerw} alt='' className='burger-w' />
          <img src={termsofuseLogo} alt='' className='logo-termsofuse' />
          <div className='div-title'>
            <h3 className='title-termsofuse'>MOJA KLOPICA</h3>
            <div className='input'>
              <span className='prefix'>
                <MdFavoriteBorder />
              </span>
              <input placeholder='Unesi adresu na kojoj se nalaziš' />
              <span className='suffix'>
                <MdOutlineArrowForwardIos />
              </span>
            </div>
          </div>
          <div className='button-for-restoran'>
            <button className='button-restoran'>Ulogujte se</button>
          </div>
        </div>
        <div className='title-for-termsofuse'>
          <h1>
            <span className='red'>MOJA KLOPICA</span> dodatne informacije
            <img src={tan} alt='' className='tan-image' />
          </h1>
        </div>
      </div>
      <div className='second-box-terms'>
        <div className='box-terms'>
          <div className='list-terms'>
            <div className='hr-for-terms'></div>
            <p onClick={navigateToTerms}>Često postavljana pitanja</p>
            <div className='hr-for-terms'></div>

            <p onClick={navigateToNotifications}>Obaveštenje o privatnosti</p>
            <div className='hr-for-terms'></div>

            <p onClick={toTerms}>Uslovi korišćenja</p>
            <div className='hr-for-terms'></div>
          </div>
          <div className='lorem-ipsum'>
            <h4 className='text-h4'>Lorem ipsum?</h4>
            <p className='paragraf-terms'>
              Nullam mi elit, commodo nec ante id, ornare efficitur dui. Nulla
              <br />
              in quam sed ex aliquam feugiat. In varius risus est.{' '}
            </p>
            <h4 className='text-h4'>Lorem ipsum dolor sit?</h4>
            <p className='paragraf-terms'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam{' '}
              <br />
              mi elit, commodo nec ante id, ornare efficitur dui. Nullam mi
              elit,
              <br />
              commodo nec ante id, ornare efficitur dui. Nulla in quam sed ex
              <br />
              aliquam feugiat. In varius risus est.{' '}
            </p>
            <h4 className='text-terms'>Lorem ipsum?</h4>
            <p className='paragraf-terms'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              <br /> mi elit, commodo nec ante id, ornare efficitur dui. Nullam
              mi elit,
              <br />
              commodo nec ante id, ornare efficitur dui. Nulla in quam sed ex
              <br />
              aliquam feugiat. In varius risus est.
            </p>
            <h4 className='text-terms'>Lorem ipsum dolor sit amet?</h4>
            <p className='paragraf-terms'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              <br /> mi elit, commodo nec ante id, ornare efficitur dui. Nullam
              mi elit,
              <br /> commodo nec ante id, ornare efficitur dui. Nulla in quam
              sed ex
              <br /> aliquam feugiat. In varius risus est. Nullam mi elit,
              commodo
              <br /> nec ante id, ornare efficitur dui. Nulla in quam sed ex
              aliquam
              <br /> feugiat. In varius risus est.{' '}
            </p>
            <h4 className='text-terms2'>Lorem ipsum?</h4>
            <p className='paragraf-terms'>
              Nullam mi elit, commodo nec ante id, ornare efficitur dui. Nulla
              <br />
              in quam sed ex aliquam feugiat. In varius risus est.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='footer-terms'>
        <FooterForRestoran />
      </div>
    </div>
  );
};

export default TermsOfUse;
