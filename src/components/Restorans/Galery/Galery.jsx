import React from 'react';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import FooterForRestoran from '../FooterForRestoran/FooterForRestoran';
const Galery = () => {
  return (
    <div className='main-galery'>
      <Header />
      <div className='nav-and-galery'>
        <Nav />
      </div>
      <FooterForRestoran />
    </div>
  );
};

export default Galery;
