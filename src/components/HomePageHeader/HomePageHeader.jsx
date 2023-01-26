import React from 'react';
import arrowHomePage from '../../images/arrow-homepage.png';

const HomePageHeader = () => {
  return (
    <div className='div-for-forms'>
      <div className='div-for-together-text'>
        <div className='big-title'>
          <p className='text-for-big-title'>MOJA KLOPICA</p>
        </div>
        <div className='lorem-ipsum-text'>
          <p className='lorem-text'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing.
          </p>
        </div>
        <div className='buttons-for-home-page'>
          <button className='text-for-buttons'>Registrujte se</button>
          <button className='text-for-buttons'>Ulogujte se</button>
        </div>
      </div>
      <div className='div-for-today-meny'>
        <p className='text-menu'>
          Dnevni meni
          <img src={arrowHomePage} classname='arrow-image-homepage' alt='' />
        </p>
      </div>
    </div>
  );
};

export default HomePageHeader;
