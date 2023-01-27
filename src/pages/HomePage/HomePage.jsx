import React, { useState } from 'react';
import HomePageHeader from '../../components/HomePageHeader/HomePageHeader';
import Header from '../../components/Header/Header';

const ListRestorans = () => {
  const [activeButton, setActiveButton] = useState('');

  function handleClick(id) {
    setActiveButton(id);
  }
  return (
    <div className='home-page-wrapper'>
      <Header />
      <HomePageHeader />
      <div className='div-main-homepage'>
        <p className='text-for-meny'>Dnevni meni 1/27/2023</p>
        <div className='day-menu'>
          <button
            id='button1'
            style={{
              backgroundColor: activeButton === 'button1' ? 'red' : 'white',
            }}
            className='button-for-days'
            onClick={() => handleClick('button1')}
          >
            Ponedeljak
          </button>
          <button
            id='button2'
            style={{
              backgroundColor: activeButton === 'button2' ? 'red' : 'white',
            }}
            className='button-for-days'
            onClick={() => handleClick('button2')}
          >
            Utorak
          </button>
          <button
            id='button3'
            style={{
              backgroundColor: activeButton === 'button3' ? 'red' : 'white',
            }}
            className='button-for-days'
            onClick={() => handleClick('button3')}
          >
            Sreda
          </button>
          <button
            id='button4'
            style={{
              backgroundColor: activeButton === 'button4' ? 'red' : 'white',
            }}
            className='button-for-days'
            onClick={() => handleClick('button4')}
          >
            Cetvrtak
          </button>
          <button
            id='button5'
            style={{
              backgroundColor: activeButton === 'button5' ? 'red' : 'white',
            }}
            className='button-for-days'
            onClick={() => handleClick('button5')}
          >
            Petak
          </button>
          <button
            id='button6'
            style={{
              backgroundColor: activeButton === 'button6' ? 'red' : 'white',
            }}
            className='button-for-days'
            onClick={() => handleClick('button6')}
          >
            Subota
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListRestorans;
