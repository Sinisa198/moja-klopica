import React from 'react';
import HomePageHeader from '../../components/RegisterLoginForm/RegisterLoginForm';
import Header from '../../components/Header/Header';
import listItemsMenu from '../../data/listitemsmenu';
import WeekButtons from '../../components/WeekButtons/WeekButtons';
import Accordion from '../../components/Accordion/Accordion';
import Footer from '../../components/Footer/FooterForRestoran';

const HomePage = () => {
  return (
    <div className='home-page-wrapper'>
      <Header />
      <HomePageHeader />
      <div className='div-main-homepage'>
        <p className='restourant-title'>Resotran Top FOOD 021</p>
        <p className='text-for-meny'>Dnevni meni 1/31/2023</p>
        <WeekButtons />
        <div className='modal-hiden' id='modal2'>
          {' '}
        </div>
        <div className='main-for-list'>
          {listItemsMenu.map((item) => {
            return (
              <div key={item.description} className='together-list-image'>
                <img src={item.image} alt='' className='image-list' />
                <Accordion title={item.description} text={item.text} />
                <div className='div-for-menu-price'>
                  <p className='menu-price'>{item.menu}</p>
                  <p className='price'>{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
