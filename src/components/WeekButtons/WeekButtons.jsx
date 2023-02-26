import React, { useState } from 'react';
import DayButton from '../DayButton';
import days from '../../data/days';

const WeekButtons = () => {
  const now = Date.now();
  const id = new Date(now).getDay();

  const [activeButton, setActiveButton] = useState('5');
  return (
    <div className='div-for-days'>
      <div className='day-menu'>
        {days.map((day) => {
          return (
            <DayButton
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
