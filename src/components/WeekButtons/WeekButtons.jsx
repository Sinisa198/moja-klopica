import React, { useState } from 'react';
import DayButton from '../DayButton';
import days from '../../data/days';

const WeekButtons = () => {
  const now = Date.now();
  const id = new Date(now).getDay();

  const [activeButton, setActiveButton] = useState('5');
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import days from '../../data/days';

const WeekButtons = () => {
  const [activeButton, setActiveButton] = useState('4');
  const days = [
    {
      id: '1',
      name: 'PON',
    },
    {
      id: '2',
      name: 'UTO',
    },
    {
      id: '3',
      name: 'SRE',
    },
    {
      id: '4',
      name: 'CET',
    },
    {
      id: '5',
      name: 'PET',
    },
    {
      id: '6',
      name: 'SUB',
    },
  ];
  const [activeButton, setActiveButton] = useState('2');

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
