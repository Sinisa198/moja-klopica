import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import days from '../../data/days';

const WeekButtons = ({ currentDayOfTheMenu, changeCurrentMenuDay }) => {
  return (
    <div className='div-for-days'>
      <div className='day-menu'>
        {days.map((day) => {
          return (
            <PrimaryButton
              key={day.id}
              active={day.id === currentDayOfTheMenu}
              text={day.name}
              onPress={() => {
                changeCurrentMenuDay(day.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeekButtons;
