import React, { useState } from 'react';
import WeekButtons from '../WeekButtons/WeekButtons';
import listItemsMenu from '../../data/listitemsmenu';
import Accordion from './Accordion';
import ReservationButton from '../Buttons/ReservationButton';
import { useDispatch } from 'react-redux';
import { addFood } from '../../store/actions/food';

const FoodCard = () => {
  const dispatch = useDispatch();
  return (
    <div className='main-for-list-reservation'>
      <WeekButtons />

      {listItemsMenu.map((item) => {
        return (
          <div key={item.id} className='together-list-image-reservation'>
            <img src={item.image} alt='' className='image-list-reservation' />
            <Accordion
              title={item.description}
              text={item.text}
              count={item.count}
              updateCount={(value) => item?.count + value}
            />
            <div className='div-for-menu-price-reservation'>
              <p className='menu-price-reservation'>{item.menu}</p>
              <p className='price-reservation'>{item.price} din </p>
            </div>
            <div className='button-reservation'>
              <ReservationButton
                callbackAction={() =>
                  dispatch(
                    addFood({
                      id: item.id,
                      name: item.description,
                      price: item.price,
                      image: item.image,
                      count: item.count,
                    })
                  )
                }
              >
                Rezervisi
              </ReservationButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodCard;
