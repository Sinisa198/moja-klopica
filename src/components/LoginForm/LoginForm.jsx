import React from 'react';
import ButtonLogin from '../../components/ButtonLogin';
import passwordIconLogin from '../../images/password-icon.svg';
import emailIconLogin from '../../images/email-icon.svg';

const LoginForm = () => {
  return (
    <form>
      <div className='modal-content-login'>
        <h4 className='title-login'>ULOGUJTE SE</h4>
        <div className='div-for-inputs'>
          <div className='input-hr'>
            <div className='icon-and-placeholder'>
              <img src={emailIconLogin} alt='' />
              <input
                type='email'
                required
                placeholder='Email'
                className='input-login'
              />
            </div>
            <hr className='hr-input' />
          </div>
          <div className='input-hr'>
            <div className='icon-and-placeholder'>
              <img src={passwordIconLogin} alt='' />

              <input
                type='password'
                placeholder='Sifra'
                className='input-login'
                required
              />
            </div>
            <hr className='hr-input' />
          </div>
        </div>
        <div className='div-for-login-button'>
          <ButtonLogin>ULOGUJTE SE</ButtonLogin>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
