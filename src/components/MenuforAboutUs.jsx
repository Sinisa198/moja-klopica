import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from './PrimaryButton/PrimaryButton';
import navigationMenu from '../data/navigationMenu';

const MenuforAboutUs = () => {
  const [buttonActive, setButtonActive] = useState();
  const navigate = useNavigate();
  return (
    <div className='div-for-days'>
      <div className='day-menu'>
        {navigationMenu.map((day) => {
          return (
            <PrimaryButton
              key={day.id}
              active={day.id === buttonActive}
              text={day.name}
              onPress={() => {
                setButtonActive(day.id);
                navigate(day.url, { replace: true });
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuforAboutUs;
