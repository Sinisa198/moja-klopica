import React, { useState } from 'react';
import ButtonLogin from '../../components/ButtonLogin';
import passwordIconLogin from '../../images/password-icon.svg';
import emailIconLogin from '../../images/email-icon.svg';
import errorImage from '../../images/errorImage.svg';
import showPassword from '../../images/showpassword.svg';
import { useNavigate } from 'react-router';
import ForgetPassword from '../SuccesMessageRegister/ForgetPassword';
import Input from '../Input/Input';

const LoginForm = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const isValidForm = () => {
    if (password?.length > 5 && email?.length > 7) {
      navigate('/reservation');
    }
  };
  const handleOnChangePassword = (password) => {
    setPassword(password);

    setError((prevState) => ({
      ...prevState,
      password: password.length < 5,
    }));
  };

  const handleOnChangeEmail = (email) => {
    setEmail(email);

    setError((prevState) => ({
      ...prevState,
      email:
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        ),
    }));
  };

  const forgetPasswordModal = () => {
    setForgetPassword(!forgetPassword);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    isValidForm();
  };

  return (
    <div>
      {!forgetPassword && (
        <form onSubmit={handleSubmit}>
          <div className='modal-content-login'>
            <h4 className='title-login'>ULOGUJTE SE</h4>
            <div className='div-for-inputs'>
              <div className='input-hr'>
                <div className='icon-and-placeholder'>
                  <img src={emailIconLogin} alt='' />
                  <Input
                    type='email'
                    placeholder='Email'
                    className='input-login'
                    value={email}
                    onChange={(event) =>
                      handleOnChangeEmail(event.target.value)
                    }
                  />
                  <div className='div-for-error-image'>
                    {error.email && (
                      <div className='error-message-login'>
                        <img src={errorImage} className='error-image' alt='' />
                      </div>
                    )}
                  </div>
                </div>
                <hr className={!error.email ? 'hr-input' : 'hr-input-error'} />
              </div>
              <div className='input-hr'>
                <div className='icon-and-placeholder'>
                  <img src={passwordIconLogin} alt='' />

                  <Input
                    type={passwordShown ? 'text' : 'password'}
                    placeholder='Sifra'
                    className='input-login'
                    name='name'
                    value={password}
                    onChange={(event) =>
                      handleOnChangePassword(event.target.value)
                    }
                  />
                  <img
                    src={showPassword}
                    onClick={togglePassword}
                    className='showpass-icon'
                    alt=''
                  />
                  {error.password && (
                    <div>
                      {' '}
                      <img src={errorImage} className='error-image' alt='' />
                    </div>
                  )}
                </div>
                <hr
                  className={!error.password ? 'hr-input' : 'hr-input-error'}
                />
                <p className='forget-password' onClick={forgetPasswordModal}>
                  Zaboravili ste sifru?
                </p>
              </div>
            </div>
            <div className='div-for-login-button'>
              <ButtonLogin>ULOGUJTE SE</ButtonLogin>
            </div>
          </div>
        </form>
      )}
      {forgetPassword && (
        <div className='modal' onClick={setPasswordShown}>
          <div onClick={forgetPasswordModal} className='overlay'></div>
          <ForgetPassword />
        </div>
      )}
    </div>
  );
};

export default LoginForm;
