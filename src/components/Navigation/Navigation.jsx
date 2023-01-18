import React from 'react';
import logo from '../../images/logo.png';
import Button from '../Button';

const Navigation = () => (
  <div className='navigation'>
    <img src={logo} className='logo' alt='' />
    <div className='header-text'>
      <h1>
        Saznaj gde je najbliža <span>TVOJA KLOPICA</span>
      </h1>
    </div>
    <div className='button-for-navigation'>
      <Button>Ulogujte se</Button>
    </div>
  </div>
);

export default Navigation;
