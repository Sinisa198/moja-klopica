import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import passwordIconLogin from '../../images/password-icon.svg';
import emailIconLogin from '../../images/email-icon.svg';
import errorImage from '../../images/errorImage.svg';
import showPassword from '../../images/showpassword.svg';
import { login } from '../../store/actions/auth';
import ForgetPassword from '../SuccesMessageRegister/ForgetPassword';
import Input from '../Input/Input';

const LoginForm = () => {
  const dispatch = useDispatch();

  const errorMessage = useSelector(({ stateError }) => stateError.stateError);
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleOnChangePassword = (password) => {
    setPassword(password);

    setError((prevState) => ({
      ...prevState,
      password: password.length < 8,
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
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setError((prevState) => ({
        ...prevState,
        email: true,
      }));
    }

    if (!password) {
      setError((prevState) => ({
        ...prevState,
        password: true,
      }));
    }
    if (password && email && !error.email && !error.password) {
      dispatch(login({ email, password }));
    }
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
                  <div className='container-for-input'>
                    <Input
                      type='email'
                      placeholder='Email'
                      className='input-login'
                      value={email}
                      onChange={(event) =>
                        handleOnChangeEmail(event.target.value)
                      }
                    />
                  </div>
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
                  <div className='container-for-input'>
                    <Input
                      type={passwordShown ? 'text' : 'password'}
                      placeholder='Sifra'
                      className='input-login-passowrd'
                      name='name'
                      value={password}
                      onChange={(event) =>
                        handleOnChangePassword(event.target.value)
                      }
                    />
                  </div>
                  <img
                    src={showPassword}
                    onClick={togglePassword}
                    className='showpass-icon'
                    alt=''
                  />

                  {error.password && (
                    <div>
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
              {errorMessage && <p>Email ili lozinka nisu ispravni.</p>}
            </div>
            <div className='div-for-login-button'>
              <button className='button-for-login-page' type='submit'>
                ULOGUJTE SE
              </button>
            </div>
          </div>
        </form>
      )}

      {forgetPassword && (
        <div className='modal' onClick={setPasswordShown}>
          <div onClick={forgetPasswordModal} className='overlay'></div>
          <ForgetPassword forgetPasswordModal={forgetPasswordModal} />
        </div>
      )}
    </div>
  );
};

export default LoginForm;
