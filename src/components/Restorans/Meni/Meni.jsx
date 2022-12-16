import React from 'react';
import FooterForRestoran from '../FooterForRestoran/FooterForRestoran';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
const Meni = () => {
  return (
    <div className='main-meni'>
      <Header />
      <Nav />
      <div className='main'>
        <div className='meni'>
          <p>SUPE I ČORBE </p>
          <p>GLAVNA JELA</p>
          <p>SALATE</p>
          <p>DEZERTI</p>
          <div className='meni-shop'>
            <p>SUPE I CORBE</p>
            <div className='hr-line' />
          </div>
          <div className='calculator'>
            <p>Kalkulator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meni;
