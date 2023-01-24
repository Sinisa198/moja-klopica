import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterForRestaurant from '../../components/Footer/FooterForRestaurant';
import HeaderTermsofuse from '../../components/Header-Termsofuse/HeaderTermsofuse';

const TermsOfUse = () => {
  return (
    <div className='terms-of-use'>
      <HeaderTermsofuse />
      <div className='second-box-terms'>
        <div className='box-terms'>
          <div className='list-terms'>
            <NavLink
              to='/faq'
              activeClassName='active'
              className='text-for-terms-use'
            >
              Često postavljana pitanja
            </NavLink>
            <NavLink
              to='/privacynotices'
              activeClassName='active'
              className='text-for-terms-use'
            >
              Obaveštenje o privatnosti
            </NavLink>
            <NavLink
              to='/termsofuse'
              activeClassName='active'
              className='text-for-terms-use'
            >
              Uslovi korišćenja
            </NavLink>
          </div>
          <div className='lorem-ipsum'>
            <h4 className='text-h4'>Lorem ipsum?</h4>
            <p className='paragraf-terms'>
              Nullam mi elit, commodo nec ante id, ornare efficitur dui. Nulla
              <br />
              in quam sed ex aliquam feugiat. In varius risus est.
            </p>
            <h4 className='text-h4'>Lorem ipsum dolor sit?</h4>
            <p className='paragraf-terms'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              <br />
              mi elit, commodo nec ante id, ornare efficitur dui. Nullam mi
              elit,
              <br />
              commodo nec ante id, ornare efficitur dui. Nulla in quam sed ex
              <br />
              aliquam feugiat. In varius risus est.
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
              <br /> feugiat. In varius risus est.
            </p>
            <h4 className='text-terms2'>Lorem ipsum?</h4>
            <p className='paragraf-terms'>
              Nullam mi elit, commodo nec ante id, ornare efficitur dui. Nulla
              <br />
              in quam sed ex aliquam feugiat. In varius risus est.
            </p>
          </div>
        </div>
      </div>
      <div className='footer-terms'>
        <FooterForRestaurant />
      </div>
    </div>
  );
};

export default TermsOfUse;
