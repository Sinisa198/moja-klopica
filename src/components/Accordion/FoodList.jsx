import React, { useState } from 'react';
import Accordion from './Accordion';
import { useEffect } from 'react';
import WeekButtons from '../WeekButtons/WeekButtons';
import ReservationButton from '../Buttons/ReservationButton';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addFood } from '../../store/actions/food';
import { isTheSameDay } from '../utils/weekDay';

const FoodList = ({ changeCurrentMenuDay, currentDayOfTheMenu }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        'https://qfs1bpf9kg.execute-api.us-east-1.amazonaws.com/dev/restaurant/5/menu/week'
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
      {data[0]?.meals.map((meal) => (
        <div key={meal.id} className='together-list-image-reservation'>
          {meal.date}
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
          <div className='button-reservation'>
            <ReservationButton
              callbackAction={() =>
                dispatch(
                  addFood({
                    id: meal.id,
                    name: meal.title,
                    price: meal.price,
                    image: meal.image,
                    count: meal.count,
                  })
                )
              }
            >
              Rezervisi
            </ReservationButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
