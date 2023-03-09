import React, { useState } from 'react';

import arrowmenu from './../../images/arrowmenu.svg';
import arrowSecond from './../../images/arrow-second.svg';

const Accordion = ({ title, text, count }) => {
  const [selected, toggle] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className='accordion-wrapper'>
      <div className='accordion'>
        <div className='title'>
          <div>{title}</div>
          <div className='icon-arrow' onClick={() => toggle(!selected)}>
            {selected ? (
              <img src={arrowSecond} alt='' />
            ) : (
              <img src={arrowmenu} alt='' />
            )}
          </div>
        </div>
        <div className={selected ? 'text show' : 'text'}>{text}</div>
        <div className='inc-dec'>
          <span className='incremente-decremente'>-</span>
          <p onChange={submitHandler}>{count}</p>
          <span className='incremente-decremente'>+</span>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
