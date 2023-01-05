import React from 'react';
import favorite from '../../images/input-icon-first.svg';
import arrow from '../../images/input-second-icon.svg';

const Forms = () => {
  return (
    <div className='forms-main'>
      <div className='forms-text'>
        <h2 className='form-title'>MOJA KLOPICA</h2>
        <h4 className='form-text'>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </h4>
      </div>
      <div>
        <div className='div-for-input'>
          <img src={favorite} alt='' className='icon-for-input' />
          <input placeholder='Unesi adresu na kojoj se nalazis' />
          <img src={arrow} alt='' className='icon-arrow' />
        </div>
      </div>
    </div>
  );
};

export default Forms;
