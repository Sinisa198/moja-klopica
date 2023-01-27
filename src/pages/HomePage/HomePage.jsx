import React, { useState } from 'react';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import Header from '../../components/Header/Header';
import listitemsmenu from '../../data/listitemsmenu';

import DaysButtons from '../../components/DaysButtons/DaysButtons';
import Accordion from '../../components/Accordion/Accordion';

const ListRestorans = () => {
  return (
    <div className='home-page-wrapper'>
      <Header />
      <HomePageHeader />
      <div className='div-main-homepage'>
        <p className='text-for-meny'>Dnevni meni 1/27/2023</p>
        <DaysButtons />
        <div className='main-for-list'>
          {listitemsmenu.map((items, i) => {
            return (
              <div className='together-list-image'>
                <img src={items.image} alt='' className='image-list' />
                <Accordion title={items.description} text={items.text} />
                <p className='menu-price'>{items.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListRestorans;
