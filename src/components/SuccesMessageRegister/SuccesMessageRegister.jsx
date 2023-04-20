import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import validateMessageImage from '../../images/validatemessage.svg';
import ButtonClose from '../Buttons/ButtonClose';
import { confirmTokenRequest } from '../../store/actions/auth-confirm';

const SuccesMessageModal = ({ props, email }) => {
  const dispatch = useDispatch();
  const token = props.match.params.token;
  useEffect(() => {
    dispatch(confirmTokenRequest(token));
  }, [dispatch, token]);

  return (
    <div className='succes-wrapper'>
      <div className='succes-message'>
        <div className='div-for-image-succesmessage'>
          <img src={validateMessageImage} className='image-validation' alt='' />
        </div>
        <div className='paragraf-success-message'>
          <p className='text-for-succes-message'>
            Poslat je verifikacioni email na {email} Neophodno je verifikovati
            nalog kako bi se registracija zavrsila.
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
