import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import favorite from '../../images/icon-for-input.png';
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
          <MdOutlineArrowForwardIos className='icon-arrow' />
        </div>
      </div>
    </div>
  );
};

export default Forms;
