import React, { useState } from 'react';
import ButtonLogin from '../../components/Buttons/ButtonLogin';
import passwordIconLogin from '../../images/password-icon.svg';
import errorImage from '../../images/errorImage.svg';
import showPassword from '../../images/showpassword.svg';
import Input from '../Input/Input';
import close from '../../images/close.svg';

const LoginForm = (props) => {
  const [oldPasswordShow, setOldPasswordShow] = useState(false);
  const [newPasswordShow, setNewPasswordShow] = useState(false);
  const [newPasswordConfirmShow, setNewPasswordConfirmShow] = useState(false);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

  const [error, setError] = useState(false);

  const oldPasswordShowHandle = () => {
    setOldPasswordShow(!oldPasswordShow);
  };
  const newPasswordShowHandle = () => {
    setNewPasswordShow(!newPasswordShow);
  };
  const newPasswordConfirmShowHandle = () => {
    setNewPasswordConfirmShow(!newPasswordConfirmShow);
  };

  const oldPasswordHandle = (oldPassword) => {
    setOldPassword(oldPassword);

    setError((prevState) => ({
      ...prevState,
      oldPassword: oldPassword.length < 5,
    }));
  };
  const newPasswordHandle = (newPassword) => {
    setNewPassword(newPassword);

    setError((prevState) => ({
      ...prevState,
      newPassword: newPassword.length < 5,
    }));
  };
  const newPasswordConfirmHandle = (newPasswordConfirm) => {
    setNewPasswordConfirm(newPasswordConfirm);

    setError((prevState) => ({
      ...prevState,
      newPasswordConfirm: oldPassword !== newPasswordConfirm,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='modalchangepassword'>
      <form onSubmit={handleSubmit}>
        <div className='modal-content-login'>
          <div className='icon-close-container'>
            <img
              src={close}
              alt=''
              className='close-change-password'
              onClick={props.toggleCloseSuccessModal}
            />
          </div>
          <h4 className='title-login'>PROMENI SIFRU</h4>
          <div className='div-for-inputs'>
            <div className='input-hr'>
              <div className='icon-and-placeholder'>
                <img src={passwordIconLogin} alt='' />

                <Input
                  type={oldPasswordShow ? 'text' : 'password'}
                  placeholder='Stara sifra'
                  className='input-login'
                  name='name'
                  value={oldPassword}
                  onChange={(event) => oldPasswordHandle(event.target.value)}
                />
                <img
                  src={showPassword}
                  onClick={oldPasswordShowHandle}
                  className='showpass-icon'
                  alt=''
                />
                {error.oldPassword && (
                  <div>
                    {' '}
                    <img src={errorImage} className='error-image' alt='' />
                  </div>
                )}
              </div>
              <hr
                className={!error.oldPassword ? 'hr-input' : 'hr-input-error'}
              />
            </div>
            <div className='input-hr'>
              <div className='icon-and-placeholder'>
                <img src={passwordIconLogin} alt='' />

                <Input
                  type={newPasswordShow ? 'text' : 'password'}
                  placeholder='Nova sifru'
                  className='input-login'
                  name='name'
                  value={newPassword}
                  onChange={(event) => newPasswordHandle(event.target.value)}
                />
                <img
                  src={showPassword}
                  onClick={newPasswordShowHandle}
                  className='showpass-icon'
                  alt=''
                />
                {error.newPassword && (
                  <div>
                    {' '}
                    <img src={errorImage} className='error-image' alt='' />
                  </div>
                )}
              </div>
              <hr
                className={!error.newPassword ? 'hr-input' : 'hr-input-error'}
              />
            </div>
            <div className='input-hr'>
              <div className='icon-and-placeholder'>
                <img src={passwordIconLogin} alt='' />

                <Input
                  type={newPasswordConfirmShow ? 'text' : 'password'}
                  placeholder='Potvrdi novu sifru'
                  className='input-login'
                  name='name'
                  value={newPasswordConfirm}
                  onChange={(event) =>
                    newPasswordConfirmHandle(event.target.value)
                  }
                />
                <img
                  src={showPassword}
                  onClick={newPasswordConfirmShowHandle}
                  className='showpass-icon'
                  alt=''
                />
                {error.newPasswordConfirm && (
                  <div>
                    {' '}
                    <img src={errorImage} className='error-image' alt='' />
                  </div>
                )}
              </div>
              <hr
                className={
                  !error.newPasswordConfirm ? 'hr-input' : 'hr-input-error'
                }
              />
            </div>
          </div>
          <div className='div-for-login-button'>
            <ButtonLogin>Potvrdi</ButtonLogin>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
