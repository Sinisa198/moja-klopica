import React, { useState } from 'react';
import ButtonLogin from '../../components/ButtonLogin';
import passwordIconLogin from '../../images/password-icon.svg';
import emailIconLogin from '../../images/email-icon.svg';
import errorImage from '../../images/errorImage.svg';

const LoginForm = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    validateName();
  };
  const validateName = () => {
    if (value.length < 8) {
      setError(<img src={errorImage} alt='' />);
      return false;
    } else {
      setError('');
      return true;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='modal-content-login'>
        <h4 className='title-login'>ULOGUJTE SE</h4>
        <div className='div-for-inputs'>
          <div className='input-hr'>
            <div className='icon-and-placeholder'>
              <img src={emailIconLogin} alt='' />
              <input type='email' placeholder='Email' className='input-login' />
              <div className='div-for-error-image'>
                {error && <div className='error-message'>{error}</div>}
              </div>
            </div>
            <hr className={!error ? 'hr-input' : 'hr-input-error'} />
          </div>
          <div className='input-hr'>
            <div className='icon-and-placeholder'>
              <img src={passwordIconLogin} alt='' />

              <input
                type='password'
                placeholder='Sifra'
                className='input-login'
                name='name'
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              {error && <div className='error-message'>{error}</div>}
            </div>
            <hr className={!error ? 'hr-input' : 'hr-input-error'} />
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
