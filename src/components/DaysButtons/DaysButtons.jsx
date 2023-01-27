import React, { useState } from 'react';

const DaysButtons = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleClick = (id) => {
    setActiveButton(id);
  };

  return (
    <div className='div-for-days'>
      <div className='day-menu'>
        <button
          id='button1'
          style={{
            backgroundColor: activeButton === 'button1' ? 'red' : 'white',
            color: activeButton === 'button1' ? 'white' : 'gray',
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
            color: activeButton === 'button2' ? 'white' : 'gray',
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
            color: activeButton === 'button3' ? 'white' : 'gray',
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
            color: activeButton === 'button4' ? 'white' : 'gray',
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
            color: activeButton === 'button5' ? 'white' : 'gray',
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
            color: activeButton === 'button6' ? 'white' : 'gray',
          }}
          className='button-for-days'
          onClick={() => handleClick('button6')}
        >
          Subota
        </button>
      </div>
    </div>
  );
};

export default DaysButtons;
