import React, { useState } from 'react';
import AgainReservation from '../../components/Buttons/AgainReservation';
import succesMessage from '../../images/succesmessage.svg';

const ModalReservation = () => {
  const [closeModal, setcloseModal] = useState(false);

  return (
    <div className='modal-message-reservation' onClick={setcloseModal}>
      <div className='div-image-reservation'>
        <img src={succesMessage} alt='' className='image-reservation' />
      </div>
      <p>USPESNA REZERVACIJA</p>
      <AgainReservation
        className='button-again-reservation'
        handleClick={setcloseModal}
      >
        Rezervisi ponovo
      </AgainReservation>
    </div>
  );
};

export default ModalReservation;
