import React, { useState } from 'react';

const DaysButtons = () => {
  const [activeButton, setActiveButton] = useState('button2');

  const handleClick = (id) => {
    setActiveButton(id);
  };

  return (
    <div className='div-for-days'>
      <div className='day-menu'>
        <button
          id='button1'
          style={{
            border: '1px solid lightgray',
            backgroundColor: activeButton === 'button1' ? '#C10016' : 'white',
            color: activeButton === 'button1' ? 'white' : ' lightgray',
          }}
          className='button-for-days'
          onClick={() => handleClick('button1')}
        >
          Ponedeljak
        </button>
        <button
          id='button2'
          style={{
            border: '1px solid lightgray',
            backgroundColor: activeButton === 'button2' ? '#C10016' : 'white',
            color: activeButton === 'button2' ? 'white' : ' lightgray',
          }}
          className='button-for-days'
          onClick={() => handleClick('button2')}
        >
          Utorak
        </button>
        <button
          id='button3'
          style={{
            border: '1px solid lightgray',
            backgroundColor: activeButton === 'button3' ? '#C10016' : 'white',
            color: activeButton === 'button3' ? 'white' : 'lightgray',
          }}
          className='button-for-days'
          onClick={() => handleClick('button3')}
        >
          Sreda
        </button>
        <button
          id='button4'
          style={{
            border: '1px solid lightgray',
            backgroundColor: activeButton === 'button4' ? '#C10016' : 'white',
            color: activeButton === 'button4' ? 'white' : 'lightgray',
          }}
          className='button-for-days active'
          onClick={() => handleClick('button4')}
        >
          Cetvrtak
        </button>
        <button
          id='button5'
          style={{
            border: '1px solid lightgray',
            backgroundColor: activeButton === 'button5' ? '#C10016' : 'white',
            color: activeButton === 'button5' ? 'white' : 'lightgray',
          }}
          className='button-for-days'
          onClick={() => handleClick('button5')}
        >
          Petak
        </button>
        <button
          id='button6'
          style={{
            border: '1px solid lightgray',
            backgroundColor: activeButton === 'button6' ? '#C10016' : 'white',
            color: activeButton === 'button6' ? 'white' : 'lightgray',
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
