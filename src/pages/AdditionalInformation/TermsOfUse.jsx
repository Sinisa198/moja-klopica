import React from 'react';
import { NavLink } from 'react-router-dom';
import termsofuseLogo from '../../images/termsofuse-logo.png';
import FooterForRestoran from '../../components/Footer/FooterForRestoran';
import tan from '../../images/tan.png';
import favorite from '../../images/input-icon-first.svg';
import arrow from '../../images/input-second-icon.svg';

const TermsOfUse = () => {
  return (
    <div className='terms-of-use'>
      <div className='App-terms-of-use'>
        <div className='main-terms'>
          <img src={termsofuseLogo} alt='' className='logo-termsofuse' />
          <div className='div-title'>
            <h3 className='title-termsofuse'>MOJA KLOPICA</h3>
            <div className='input-for-terms'>
              <img src={favorite} alt='' className='icon-favorite-input' />
              <input
                placeholder='Unesi adresu na kojoj se nalaziš'
                className='inputterms'
              />
              <img src={arrow} alt='' className='arrow-icon-input' />
            </div>
          </div>
          <div className='button-for-restoran-terms'>
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
            <NavLink
              to='/termsofuse'
              activeClassName='active'
              className='text-for-terms-use'
            >
              Često postavljana pitanja
            </NavLink>
            <div className='hr-for-terms'></div>

            <NavLink to='/privacynotices' activeClassName='active'>
              Obaveštenje o privatnosti
            </NavLink>
            <div className='hr-for-terms'></div>

            <NavLink to='/askedquestions' activeClassName='active'>
              Uslovi korišćenja
            </NavLink>
            <div className='hr-for-terms'></div>
          </div>
          <div className='lorem-ipsum'>
            <h4 className='text-for-terms'>Uslovi korišćenja</h4>
            <p className='paragraf-for-terms'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Vivamus quis dolor nec dui auctor lobortis. Ut placerat velit eu
              <br /> placerat molestie. Suspendisse auctor quis quam in semper.
              <br /> Sed ornare laoreet vulputate. Cras sed placerat elit, vitae
              mattis <br />
              sapien. Mauris a ex eu eros tempor congue. Sed eget lacinia
              <br /> massa, sit amet ullamcorper erat. Nam elementum dui ut ante{' '}
              <br />
              porta venenatis at a dolor. Proin vestibulum felis non aliquet{' '}
              <br />
              posuere. Donec quis pharetra odio. Sed rhoncus tellus leo, in
              <br /> elementum turpis iaculis ac. Nullam ut magna felis. Sed
              <br /> egestas dui id eleifend ullamcorper. Curabitur nisi lorem,
              <br /> bibendum et eleifend et, gravida et erat.
              <br /> Maecenas ac varius ipsum. Nullam blandit enim leo, a
              tristique
              <br /> justo scelerisque sit amet. Sed dui dolor, convallis id
              elementum <br />
              non, mollis eget massa. Proin et egestas nisi. Donec feugiat nibh{' '}
              <br />
              quis arcu rutrum efficitur. Nam eget venenatis odio, at mattis{' '}
              <br />
              lectus. Donec commodo id metus a tristique. Vestibulum at dui{' '}
              <br />
              quis risus fringilla rhoncus. Interdum et malesuada fames ac{' '}
              <br />
              ante ipsum primis in faucibus. Donec vel elit vitae elit dapibus{' '}
              <br />
              eleifend. Nulla blandit, elit nec egestas condimentum, arcu
              <br /> nulla euismod risus, nec ultrices felis ipsum eu arcu.
              Praesent
              <br /> pharetra tincidunt libero, vel placerat sem ullamcorper
              nec.
              <br /> Vestibulum hendrerit, erat a ultricies elementum, nibh
              dolor <br />
              eleifend felis, id pharetra tellus est at eros. Donec sodales
              tellus
              <br /> vel est maximus, imperdiet fermentum mauris condimentum.
              <br /> Cras libero est, iaculis non sapien in, feugiat eleifend
              lectus.
              <br /> Aenean ultrices dictum rutrum. Suspendisse mattis congue
              elit <br />
              at ullamcorper.
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
