import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import days from '../../data/days';

const WeekButtons = () => {
  const [activeButton, setActiveButton] = useState('4');

  return (
    <div className='div-for-days'>
      <div className='day-menu'>
        {days.map((day) => {
          return (
            <PrimaryButton
              key={day.id}
              active={day.id === activeButton}
              text={day.name}
              onPress={() => {
                setActiveButton(day.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeekButtons;
