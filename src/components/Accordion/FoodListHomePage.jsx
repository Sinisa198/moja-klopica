import React, { useState } from 'react';
import Accordion from './Accordion';
import { useEffect } from 'react';
import WeekButtons from '../WeekButtons/WeekButtons';
import axios from 'axios';
import { isTheSameDay } from '../utils/weekDay';

const FoodListHomePage = ({ changeCurrentMenuDay, currentDayOfTheMenu }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurant/5/menu/week`
      );
      setData(
        result.data.filter((menuDay) =>
          isTheSameDay(currentDayOfTheMenu, menuDay.date)
        )
      );
    }
    fetchData();
  }, [currentDayOfTheMenu]);
  return (
    <div className='main-for-list-reservation'>
      <WeekButtons
        changeCurrentMenuDay={changeCurrentMenuDay}
        currentDayOfTheMenu={currentDayOfTheMenu}
      />
      <div className='wrapper-listhomepage'>
        {data[0]?.meals.map((meal) => (
          <div key={meal.id} className='together-list-image-reservation'>
            <img src={meal.image} alt='' className='image-list-reservation' />
            <Accordion
              title={meal.title}
              text={meal.description}
              count={meal.count}
              updateCount={(value) => meal?.count + value}
            />
            <div className='div-for-menu-price-reservation'>
              <p className='price-reservation'>{meal.price} din</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodListHomePage;
