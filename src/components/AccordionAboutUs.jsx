import { useState } from 'react';
import arrow from '../images/arrowmenu.svg';
import arrowSecond from '../images/arrow-second.svg';

const Accordion = ({ title, content }) => {
  const [show, setShow] = useState(false);
  const toggleAccordion = () => {
    setShow(!show);
  };
  return (
    <div className='accordion-about-us'>
      <div className='accordion-item'>
        <div className='accordion-title-aboutus' active={show ? show : false}>
          <div>{title}</div>
          <div className='accordion-icon-aboutus' onClick={toggleAccordion}>
            {show ? (
              <img src={arrow} alt='' />
            ) : (
              <img src={arrowSecond} alt='' />
            )}
          </div>
        </div>
        {show && (
          <div className='content-aboutus'>
            <div>{content}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
