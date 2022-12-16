import React from 'react';
import FooterForRestoran from '../FooterForRestoran/FooterForRestoran';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import logoMeni from '../../../images/logo-for-meni.png';
const Meni = () => {
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
            <div className='shopping-cart'>
              <p>SUPE I CORBE</p>
              <div className='shopping-hr' />
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Domaća supa</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Ragu čorba</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Potaž</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <p>GLAVNA JELA</p>
              <div className='main-hrr' />
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Pileći paprikaš</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Pasulj sa butkicom</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Butkica sa renom</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Piletina u kari sosu</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Pasulj sa kobasicom</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <p>SALATE</p>
              <div className='salate-hr' />
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Kupus</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Paradajz</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Krastavac</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <p>DEZERTI</p> <div className='dezert-hr' />
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Sutlijaš</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Palačinke</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
              <div className='div-for-complet-meni'>
                <img src={logoMeni} alt='' className='meni-image' />
                <div className='title-meni-shopping'>
                  <p className='shopping-title'>Voćna salata</p>
                  <span className='dl'>5dl</span>
                  <div className='price-button'>
                    <span className='price'>200 din</span>
                    <button className='meni-button'>Dodaj</button>
                  </div>
                </div>
              </div>
            </div>
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
