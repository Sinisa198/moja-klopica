import React from 'react';
import Navigation from '../Navigation/Navigation';
import Forms from '../Forms/Forms';
import miniTopFood from '../../images/mini-top-food.png';
const HomePage = () => {
  return (
    <div className='main-home'>
      <Navigation />
      <Forms />
      <div className='second-box-home'>
        <div className='first-box'>
          <img src={miniTopFood} alt='' className='mini-top-food' />
          <p>RESTORANI * DOMACA KUHINJA</p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
