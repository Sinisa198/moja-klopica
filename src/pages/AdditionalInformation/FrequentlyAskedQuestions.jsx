import React from 'react';
import { NavLink } from 'react-router-dom';
import termsofuseLogo from '../../images/termsofuse-logo.png';
import favorite from '../../images/input-icon-first.svg';
import arrow from '../../images/input-second-icon.svg';
import FooterForRestoran from '../../components/Footer/FooterForRestoran';
import tan from '../../images/tan.png';

const TermsOfUse = () => {
  return (
    <div className='terms-of-use'>
      <div className='App-terms-of-use'>
        <div className='main-terms'>
          <div className='container'>
            <input type='checkbox' name='' id='' className='check' />
            <ul className='menu-items'>
              <li>
                <p>Početna</p>
              </li>
              <li>
                <p>Kategorije</p>
              </li>
              <li>
                <p>Ponude</p>
              </li>
              <li>
                <p>Pomoć</p>
              </li>
              <li>
                <p>Kontakt</p>
              </li>
            </ul>
            <div className='ham-menu'>
              <span className='line line1'></span>
              <span className='line line2'></span>
              <span className='line line3'></span>
            </div>
          </div>
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

            <NavLink
              to='/privacynotices'
              activeClassName='active'
              className='text-for-terms-use'
            >
              Obaveštenje o privatnosti
            </NavLink>
            <div className='hr-for-terms'></div>

            <NavLink
              to='/askedquestions'
              activeClassName='active'
              className='text-for-terms-use'
            >
              Uslovi korišćenja
            </NavLink>
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
