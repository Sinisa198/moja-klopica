import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RestartPassowrd from '../RestartPassword';
import errorImage from '../../images/errorImage.svg';
import emailIcon from '../../images/email-icon.svg';
import close from '../../images/close.svg';
import Input from '../Input/Input';
import OpenEmail from '../SuccesMessageRegister/OpenEmail';
import { resetPassword } from '../../store/actions/reset-password';

const ForgetPassword = ({ forgetPasswordModal }) => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: '',
  });
  const [openEmailModal, setOpenEmailModal] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const closeModal = () => {
    setOpenEmailModal(false);
  };
  const toggleModalOpenEmail = () => {
    if (email.length > 5) setOpenEmailModal(!openEmailModal);
  };

  const changeEmail = (email) => {
    setEmail(email);

    setError((prevState) => ({
      ...prevState,
      email:
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        ),
    }));
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    toggleModalOpenEmail();
    dispatch(
      resetPassword({
        email,
      })
    );
  };
  return (
    <div>
      {!openEmailModal && (
        <form onSubmit={handleClickSubmit} className='form-for-forgetpassword'>
          <div className='forget-password-modal '>
            <div className='image-container-forgetpassword'>
              <img
                src={close}
                alt=''
                className='close-icon'
                onClick={forgetPasswordModal}
              />
            </div>
            <p className='checkemail'>ZABORAVILII STE SIFRU?</p>
            <p className='resetemail'>
              Ne brinite, mi cemo Vam poslati instrukcije za resetovanje
            </p>
            <div className='input-hr' style={{ paddingBottom: '20px' }}>
              <div className='icon-and-placeholder'>
                <img src={emailIcon} alt='' />
                <Input
                  placeholder='Email'
                  className='input-login'
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => changeEmail(e.target.value)}
                />
                <div className='input-error-message'>
                  {error.email && (
                    <div className='error-message-forget-password'>
                      <img src={errorImage} className='error-image' alt='' />
                    </div>
                  )}
                </div>
              </div>

              <hr className={!error.email ? 'hr-input' : 'hr-input-error'} />
            </div>
            <div className='button-restart-password'>
              <button className='button-forget-password' type='submit'>
                RESTARARTUJ SIFRU
              </button>
            </div>
          </div>
        </form>
      )}
      {openEmailModal && (
        <div className='modal-for-openemail'>
          <div className='overlay' onClick={toggleModalOpenEmail}></div>
          <OpenEmail email={email} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
