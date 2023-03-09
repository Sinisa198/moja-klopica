import React from 'react';
import RestartPassword from '../RestartPassword';
import close from '../../images/close.svg';

const OpenEmail = (props) => {
  const dontRefresh = (event) => {
    event.preventDefault();
  };
  return (
    <div className='forget-password-modal ' onSubmit={dontRefresh}>
      <img
        src={close}
        alt=''
        className='close-icon'
        onClick={props.toggleModalOpenEmail}
      />
      <p className='checkemail'>PROVERITE SVOJ EMAIL</p>
      <p className='resetemail'>
        Poslali smo Vam link za resetovanje sifre na {props.email}
      </p>

      <div className='button-restart-password'>
        <RestartPassword>OTVORI EMAIL</RestartPassword>
      </div>
      <p className='paragraf-open-email'>
        Nije Vam stigao email?
        <span style={{ color: '#C10016', paddingLeft: '5px' }}>
          Posalji ponovo
        </span>
      </p>
    </div>
  );
};

export default OpenEmail;
