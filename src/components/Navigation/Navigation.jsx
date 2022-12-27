import React from 'react';
import logo from '../../images/logo.png';
const Navigation = () => {
  return (
    <div className='navigation'>
      <img src={logo} className='logo' alt='' />
      <div className='header-text'>
        <h1>
          {' '}
          Saznaj gde je najbliža <span>TVOJA KLOPICA</span>
        </h1>
      </div>
      <div className='header-button'>
        <button>Ulogujte se</button>
      </div>
    </div>
  );
};

export default Navigation;
