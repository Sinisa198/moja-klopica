import React, { useState } from 'react';

import arrowmenu from './../../images/arrowmenu.svg';
import arrowSecond from './../../images/arrow-second.svg';

const Accordion = ({ title, text }) => {
  const [selected, toggle] = useState(false);
  return (
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
    </div>
  );
};

export default Accordion;
