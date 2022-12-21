import React from 'react';
import FooterForRestoran from '../FooterForRestoran/FooterForRestoran';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import logoMeni from '../../../images/logo-for-meni.png';
import { addFood } from '../../../store/actions/food';
const Meni = () => {
  const listmeni = [
    {
      title: 'Supe i čorbe',
      image: logoMeni,
      name: 'Domaća supa',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      image: logoMeni,
      name: 'Ragu čorba',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      image: logoMeni,
      name: 'Potaž',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      title: 'Glavna jela',
      image: logoMeni,
      name: 'Pileći paprikaš',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      image: logoMeni,
      name: 'Pasulj sa butkicom',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      image: logoMeni,
      name: 'Butkica sa renom',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      image: logoMeni,
      name: 'Piletina u kari sosu',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      image: logoMeni,
      name: 'Pasulj sa kobasicom',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      title: 'Salate',
      image: logoMeni,
      name: 'Kupus',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      image: logoMeni,
      name: 'Paradajz',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      image: logoMeni,
      name: 'Krastavac',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      title: 'Dezerti',
      image: logoMeni,
      name: 'Sutlijaš',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      image: logoMeni,
      name: 'Palačinke',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
    {
      image: logoMeni,
      name: 'Voćna salata',
      dl: '5dl',
      price: '200 din',
      button: 'Dodaj',
    },
  ];
  return (
    <div className='main-meni'>
      <Header />
      <div className='main-nav-with-meni'>
        <Nav />

        <div className='meni'>
          <div className='nav-meni-meni'>
            <p>SUPE I CORBE</p>
            <p>GLAVNA JELA</p>
            <p>SALATE</p>
            <p>DEZERTI</p>
            {listmeni.map((data) => (
              <div className='shopping-cart' key={data.title}>
                <p>{data.title}</p>
                <div className='shopping-hr' />
                <div className='div-for-complet-meni'>
                  <img src={logoMeni} alt='' className='meni-image' />
                  <div className='title-meni-shopping'>
                    <p className='shopping-title'>{data.name}</p>
                    <span className='dl'>{data.dl}</span>
                    <div className='price-button'>
                      <span className='price'>{data.price}</span>
                      <button className='meni-button'>{data.button}</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='calculator'>
            <p className='calculator-paragraf'>KALKULATOR</p>
            <div className='calculator-hr' />
          </div>
        </div>
      </div>
      <FooterForRestoran />
    </div>
  );
};

export default Meni;
