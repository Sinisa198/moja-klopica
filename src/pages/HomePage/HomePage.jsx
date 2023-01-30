import React from 'react';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import Header from '../../components/Header/Header';
import listitemsmenu from '../../data/listitemsmenu';
import DaysButtons from '../../components/DayButton/DayButton';
import Accordion from '../../components/Accordion/Accordion';

const HomePage = () => {
  return (
    <div className='home-page-wrapper'>
      <Header />
      <HomePageHeader />
      <div className='div-main-homepage'>
        <p className='restourant-title'>Resotran Top FOOD 021</p>
        <p className='text-for-meny'>Dnevni meni 1/27/2023</p>
        <DaysButtons />
        <div className='main-for-list'>
          {listitemsmenu.map((items) => {
            return (
              <div className='together-list-image'>
                <img src={items.image} alt='' className='image-list' />
                <Accordion title={items.description} text={items.text} />
                <div className='div-for-menu-price'>
                  <p className='menu-price'>{items.menu}</p>
                  <p className='price'>{items.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
