import React, { useState } from 'react';
import DayButton from '../DayButton';

const WeekButtons = () => {
  const [activeButton, setActiveButton] = useState('2');
  const days = [
    {
      id: '1',
      name: 'Ponedeljak',
    },
    {
      id: '2',
      name: 'Utorak',
    },
    {
      id: '3',
      name: 'Sreda',
    },
    {
      id: '4',
      name: 'Cetvrtak',
    },
    {
      id: '5',
      name: 'Petak',
    },
    {
      id: '6',
      name: 'Subota',
    },
  ];
  return (
    <div className='div-for-days'>
      <div className='day-menu'>
        {days.map((day) => {
          return (
            <DayButton
              key={day.id}
              id={day.id}
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
