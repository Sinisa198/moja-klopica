import React from 'react';
import validateMessageImage from '../../images/validatemessage.svg';
import ButtonClose from '../Buttons/ButtonClose';

const SuccesMessageModal = (props) => {
  return (
    <div className='succes-wrapper'>
      <div className='succes-message'>
        <div className='div-for-image-succesmessage'>
          <img src={validateMessageImage} className='image-validation' alt='' />
        </div>
        <div className='paragraf-success-message'>
          <p className='text-for-succes-message'>
            Poslat je verifikacioni email na {props.email} Neophodno je
            verifikovati nalog kako bi se registracija zavrsila.
          </p>
        </div>
        <div className='button-succesmessage'>
          <ButtonClose
            onClick={(props.toggleCloseSuccessModal, props.toggleModalRegister)}
          >
            ZATVORI
          </ButtonClose>
        </div>
      </div>
    </div>
  );
};

export default SuccesMessageModal;
