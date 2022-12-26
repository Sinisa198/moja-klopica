import React from 'react';
import { BsApple } from 'react-icons/bs';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
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
        <div className='divv'>
          <span>
            <MdFavoriteBorder className='icon-favorite' />
          </span>
          <input placeholder='Unesi adresu na kojoj se nalazis' />
          <span className='span-arrow'>
            <MdOutlineArrowForwardIos className='icon-arrow' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Forms;
