import React, { useState } from 'react';
import ButtonRegister from '../ButtonRegister';
import nameIcon from '../../images/name-icon.svg';
import phoneIcon from '../../images/phone-icon.svg';
import passwordIcon from '../../images/password-icon.svg';
import emailIcon from '../../images/email-icon.svg';
import googleIcon from '../../images/icon-register-left.svg';
import registerEmail from '../../images/icon-register-right.svg';
import InputName from '../Inputs/InputName';
import InputEmail from '../Inputs/InputEmail';
import InputPhone from '../Inputs/InputPhone';
import InputPassword from '../Inputs/InputPassword';
import { validateRegistration } from '../utils/validations';

const RegisterForm = () => {
  const [data, setData] = useState({});
  const [valid, setValid] = useState(false);

  function onChange(propName, value) {
    const newData = { ...data, [propName]: value };
    setData(newData);
    setValid(validateRegistration(newData));
  }

  return (
    <form onSubmit={onChange}>
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
                onChange={(value) => onChange('name', value)}
              />
            </div>
            <hr className='hr-input' />
          </div>
          <div className='input-hr'>
            <div className='icon-and-placeholder'>
              <img src={emailIcon} alt='' />

              <InputEmail
                placeholder='Email'
                className='input-login'
                type='email'
                name='email'
                require
              />
            </div>
            <hr className='hr-input' />
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
            </div>

            <hr className='hr-input' />
          </div>
          <div className='input-hr'>
            <div className='icon-and-placeholder'>
              <img src={phoneIcon} alt='' />

              <InputPhone
                name='phone'
                placeholder='Broj telefona'
                className='input-login'
              />
            </div>

            <hr className='hr-input' />
          </div>
        </div>
        <div className='div-register-button'>
          <ButtonRegister type='submit'>Registrujte se</ButtonRegister>
        </div>
        <div className='div-for-line'>
          <hr className='hr-for-or-left' /> <p>ILI</p>
          <hr className='hr-for-or-right' />
        </div>
        <div className='icon-email-google'>
          <img src={googleIcon} alt='' />
          <img src={registerEmail} alt='' />
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
