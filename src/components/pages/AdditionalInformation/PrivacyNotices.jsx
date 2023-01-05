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
            <div className='input-for-terms'>
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
            <p onClick={() => navigateToTerms()}>Često postavljana pitanja</p>
            <div className='hr-for-terms'></div>

            <p onClick={() => navigateToNotifications()}>
              Obaveštenje o privatnosti
            </p>
            <div className='hr-for-terms'></div>

            <p onClick={() => toTerms()}>Uslovi korišćenja</p>
            <div className='hr-for-terms'></div>
          </div>
          <div className='lorem-ipsum'>
            <h3 className='notification-text'>
              MOJA KLOPICA Obaveštenje o privatnosti
            </h3>
            <p className='notification-paragraf'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Vivamus quis dolor nec dui auctor lobortis. Ut placerat
              velit eu
              <br /> placerat molestie. Suspendisse auctor quis quam in semper.{' '}
              <br />
              Sed ornare laoreet vulputate. Cras sed placerat elit, vitae mattis
              <br /> sapien. Mauris a ex eu eros tempor congue. Sed eget lacinia
              <br /> massa, sit amet ullamcorper erat. Nam elementum dui ut ante{' '}
              <br />
              porta venenatis at a dolor. Proin vestibulum felis non aliquet{' '}
              <br />
              posuere. Donec quis pharetra odio. Sed rhoncus tellus leo, in{' '}
              <br />
              elementum turpis iaculis ac. Nullam ut magna felis. Sed
              <br /> egestas dui id eleifend ullamcorper. Curabitur nisi lorem,
              <br /> bibendum et eleifend et, gravida et erat. <br />
              Maecenas ac varius ipsum. Nullam blandit enim leo, a tristique
              <br /> justo scelerisque sit amet. Sed dui dolor, convallis id
              elementum
              <br /> non, mollis eget massa. Proin et egestas nisi. Donec
              feugiat nibh
              <br /> quis arcu rutrum efficitur. Nam eget venenatis odio, at
              mattis
              <br /> lectus. Donec commodo id metus a tristique. Vestibulum at
              dui
              <br /> quis risus fringilla rhoncus. Interdum et malesuada fames
              ac
              <br /> ante ipsum primis in faucibus. Donec vel elit vitae elit
              dapibus <br />
              eleifend. Nulla blandit, elit nec egestas condimentum, arcu <br />
              nulla euismod risus, nec ultrices felis ipsum eu arcu. Praesent{' '}
              <br />
              pharetra tincidunt libero, vel placerat sem ullamcorper nec.
              <br /> Vestibulum hendrerit, erat a ultricies elementum, nibh
              dolor
              <br /> eleifend felis, id pharetra tellus est at eros. Donec
              sodales tellus
              <br /> vel est maximus, imperdiet fermentum mauris condimentum.
              <br /> Cras libero est, iaculis non sapien in, feugiat eleifend
              lectus.
              <br /> Aenean ultrices dictum rutrum. Suspendisse mattis congue
              elit
              <br /> at ullamcorper.
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
