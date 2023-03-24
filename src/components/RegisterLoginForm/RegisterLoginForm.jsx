import React, { useState } from 'react';
import arrowHomePage from '../../images/arrow-homepage.png';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

const RegisterLoginForm = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [modalRegister, setModalRegister] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  const handleClick = () => {
    window.scroll({
      top: scrollAmount + window.innerHeight,
      behavior: 'smooth',
    });
    setScrollAmount(scrollAmount + window.innerHeight);
  };

  const toggleModalRegister = () => {
    setModalRegister(!modalRegister);
  };

  const toggleModalLogin = () => {
    setModalLogin(!modalLogin);
  };
  return (
    <div className='div-for-forms'>
      <div className='div-for-together-text'>
        <div className='big-title'>
          <p className='text-for-big-title'>MOJA KLOPICA</p>
        </div>
        <div className='lorem-ipsum-text'>
          <p className='lorem-text'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing.
          </p>
        </div>
        <div className='buttons-for-home-page'>
          <button className='text-for-buttons' onClick={setModalRegister}>
            Registrujte se
          </button>
          <button className='text-for-buttons' onClick={setModalLogin}>
            Ulogujte se
          </button>
        </div>
      </div>
      <div className='div-for-today-meny'>
        <p className='text-menu' onClick={handleClick}>
          Ponuda
          <img src={arrowHomePage} className='arrow-image-homepage' alt='' />
        </p>
      </div>

      {modalRegister && (
        <div className='modal'>
          <div onClick={toggleModalRegister} className='overlay'></div>
          <RegisterForm toggleModalRegister={toggleModalRegister} />
        </div>
      )}
      {modalLogin && (
        <div className='modal'>
          <div className='overlay' onClick={toggleModalLogin}></div>
          <LoginForm />
        </div>
      )}
    </div>
  );
};
export default RegisterLoginForm;
