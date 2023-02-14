import React, { useState } from 'react';
import ButtonRegister from '../ButtonRegister';
import nameIcon from '../../images/name-icon.svg';
import phoneIcon from '../../images/phone-icon.svg';
import passwordIcon from '../../images/password-icon.svg';
import emailIcon from '../../images/email-icon.svg';
import InputName from '../Inputs/InputName';
import InputEmail from '../Inputs/InputEmail';
import InputPhone from '../Inputs/InputPhone';
import InputPassword from '../Inputs/InputPassword';
import errorImage from '../../images/errorImage.svg';

const RegisterForm = () => {
  // const [data, setData] = useState({});
  // const [valid, setValid] = useState(false);
  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [error, setError] = useState(false);

  const validations = () => {
    if (valueName?.length < 8) {
      setError(<img src={errorImage} className='error-image' alt='' />);
      return false;
    } else {
      setError('');
      return true;
    }
  };
  // const onChange = (propName, value) => {
  //   const newData = { ...data, [propName]: value };
  //   setData(newData);
  //   setValid(validateRegistration(newData));
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    validations();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='modal-content'>
        <h4 className='title-login'>REGISTRUJTE SE</h4>
        <div className='div-for-inputs'>
          <div className='input-hr'>
            <div className='icon-and-placeholder'>
              <img src={nameIcon} alt='' />
              <InputName
                type='text'
                placeholder='Ime i prezime'
                name='name'
                className='input-login'
                value={valueName}
                onChange={(event) => setValueName(event.target.value)}
              />
              <div className='input-error-message'>
                {error && <div className='error-message'>{error}</div>}
              </div>
            </div>

            <hr className={!error ? 'hr-input' : 'hr-input-error'} />
          </div>
          <div className='input-hr'>
            <div className='icon-and-placeholder'>
              <img src={emailIcon} alt='' />

              <InputEmail
                placeholder='Email'
                className='input-login'
                type='email'
                name='email'
              />
              <div className='input-error-message'>
                {error && <div className='error-message'>{error}</div>}
              </div>
            </div>

            <hr className={!error ? 'hr-input' : 'hr-input-error'} />
          </div>
          <div className='input-hr'>
            <div className='icon-and-placeholder'>
              <img src={passwordIcon} alt='' />

              <InputPassword
                type='password'
                placeholder='Sifra'
                className='input-login'
                name='password'
              />

              {error && <div className='error-message'>{error}</div>}
            </div>

            <hr className={!error ? 'hr-input' : 'hr-input-error'} />
          </div>
          <div className='input-hr'>
            <div className='icon-and-placeholder'>
              <img src={passwordIcon} alt='' />

              <InputPassword
                type='password'
                placeholder='Potvrdi sifru'
                className='input-login'
                name='password'
              />

              {error && <div className='error-message'>{error}</div>}
            </div>

            <hr className={!error ? 'hr-input' : 'hr-input-error'} />
          </div>

          <div className='input-hr'>
            <div className='icon-and-placeholder'>
              <img src={phoneIcon} alt='' />

              <InputPhone
                name='phone'
                placeholder='+381'
                className='input-login-phone'
              />
              <div className='input-error-message'>
                {error && <div className='error-message'>{error}</div>}
              </div>
            </div>

            <hr className={!error ? 'hr-input-phone' : 'hr-input-error'} />
          </div>
        </div>
        <div className='div-register-button'>
          <ButtonRegister type='submit'>Registrujte se</ButtonRegister>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
