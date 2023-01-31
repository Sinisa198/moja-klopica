import React from 'react';
import logoFooter from '../../images/logo-footer.svg';
import location from '../../images/location.svg';
import planet from '../../images/planet.png';
import copyRight from '../../images/copyr.svg';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-privacy'>
        <div className='langue-footer'>
          <div className='text-and-icon'>
            <img src={logoFooter} alt='' />
            <div>
              <img src={location} alt='' className='icon-location' />
              Srbija
            </div>
            <div className='text-and-icon-second'>
              <img src={planet} alt='' className='icon-planet' />
              Srpski
            </div>
          </div>
          <div className='terms-of-use-footer'>
            <div className='other-termsofuse'>
              <p>Uslovi koriscenja</p>
              <p>Politika privatnosti</p>
              <p>FAQ</p>
            </div>
            <div className='div-for-copyright'>
              <img src={copyRight} alt='' className='icon-copyright' />
              Moja klopica 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
