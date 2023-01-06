import React from 'react';
import HeaderRestoran from '../Header-Restoran/Header-Restoran';
import Nav from '../Nav/Nav';
import logoMeni from '../../../../images/logo-for-meni.png';
import FooterForRestoran from '../../../Footer/FooterForRestoran';
import itemsMeni from '../../../data/menuitems';
import ButtonMenu from '../../../ButtonMenu';

const Menu = () => {
  return (
    <div className='main-meni'>
      <HeaderRestoran />
      <div className='main-nav-with-meni'>
        <Nav />
        <div className='meni'>
          <div className='nav-meni-meni'>
            <p>SUPE I CORBE</p>
            <p>GLAVNA JELA</p>
            <p>SALATE</p>
            <p>DEZERTI</p>

            {itemsMeni.map((item) => {
              return (
                <div className='shopping-cart'>
                  <p>{item.title}</p>
                  <div className='shopping-hr' />
                  <div className='div-for-complet-meni'>
                    <img src={logoMeni} alt='' className='meni-image' />
                    <div className='title-meni-shopping'>
                      <p className='shopping-title'>{item.name}</p>
                      <span className='dl'>{item.dl}</span>
                      <div className='price-button'>
                        <span className='price'>{item.price}</span>
                        <ButtonMenu>{item.button}</ButtonMenu>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='calculator'>
          <p className='calculator-paragraf'>KALKULATOR</p>
          <div className='calculator-hr' />
        </div>
      </div>
      <FooterForRestoran />
    </div>
  );
};

export default Menu;
