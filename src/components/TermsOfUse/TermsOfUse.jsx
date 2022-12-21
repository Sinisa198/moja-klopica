import React from 'react';
import { useNavigate } from 'react-router';
import termsofuseLogo from '../../images/termsofuse-logo.png';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import FooterForRestoran from '../Restorans/FooterForRestoran/FooterForRestoran';
const TermsOfUse = () => {
  const navigate = useNavigate();

  const navigateToNotifications = () => {
    navigate('/notifications');
  };
  const navigateToTerms = () => {
    navigate('/termsofuse');
  };
  const toTerms = () => {
    navigate('/terms');
  };
  return (
    <div className='terms-of-use'>
      <div className='App-terms-of-use'>
        <div className='main-terms'>
          <img src={termsofuseLogo} alt='' className='logo-termsofuse' />
          <div className='div-title'>
            <h3 className='title-termsofuse'>MOJA KLOPICA</h3>
            <div class='input'>
              <span class='prefix'>
                <MdFavoriteBorder />
              </span>
              <input placeholder='Unesi adresu na kojoj se nalaziš' />
              <span class='suffix'>
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
          </h1>
        </div>
      </div>
      <div className='second-box-terms'>
        <div className='box-terms'>
          <div className='list-terms'>
            <p onClick={() => navigateToTerms()}>Često postavljana pitanja</p>
            <p onClick={() => navigateToNotifications()}>
              Obaveštenje o privatnosti
            </p>
            <p onClick={() => toTerms()}>Uslovi korišćenja</p>
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
        <div className='ss'>
          <FooterForRestoran />
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
