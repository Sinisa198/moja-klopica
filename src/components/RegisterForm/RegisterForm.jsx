import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonRegister from '../Buttons/ButtonRegister';
import nameIcon from '../../images/name-icon.svg';
import phoneIcon from '../../images/phone-icon.svg';
import passwordIcon from '../../images/password-icon.svg';
import emailIcon from '../../images/email-icon.svg';
import { register } from '../../store/actions/register';
import Input from '../Input/Input';
import errorImage from '../../images/errorImage.svg';
import SuccesMessageRegister from '../../components/SuccesMessageRegister/SuccesMessageRegister';

const RegisterForm = ({ toggleModalRegister }) => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [successRegister, setSuccessRegister] = useState(false);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState();
  const [error, setError] = useState({});
  const toggleCloseSuccessModal = () => {
    setSuccessRegister(!successRegister);
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

  const changeName = (name) => {
    setName(name);
    setError((prevState) => ({
      ...prevState,
      name: name.length <= 1,
    }));
  };

  const isValidForm = () => {
    if (password && email && surname && phone) {
      setSuccessRegister(true);
    }
  };

  const changeSurname = (surname) => {
    setSurname(surname);

    setError((prevState) => ({
      ...prevState,
      surname: surname.length <= 3,
    }));
  };

  const changePassword = (password) => {
    setPassword(password);

    setError((prevState) => ({
      ...prevState,
      password: password.length < 8,
    }));
  };
  const changeConfirmPassword = (confirmPassword) => {
    setConfirmPassword(confirmPassword);

    setError((prevState) => ({
      ...prevState,
      confirmPassword: password !== confirmPassword,
    }));
  };
  const changePhone = (phone) => {
    setPhone(phone);

    setError((prevState) => ({
      ...prevState,
      phone: phone.length < 7,
    }));
  };
  const handleSubmit = (event) => {
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
    if (!name) {
      setError((prevState) => ({
        ...prevState,
        name: true,
      }));
    }

    if (!surname) {
      setError((prevState) => ({
        ...prevState,
        surname: true,
      }));
    }
    if (!confirmPassword) {
      setError((prevState) => ({
        ...prevState,
        confirmPassword: true,
      }));
    }

    if (!phone) {
      setError((prevState) => ({
        ...prevState,
        phone: true,
      }));
    }
    dispatch(
      register({
        email,
        surname,
        password,
        confirmPassword,
        phoneNumber: phone,
        name,
      })
    );
    isValidForm();
  };

  return (
    <div>
      {!successRegister && (
        <form onSubmit={handleSubmit}>
          <div className='modal-content'>
            <h4 className='title-login'>REGISTRUJTE SE</h4>
            <div className='div-for-inputs'>
              <div className='input-hr'>
                <div className='icon-and-placeholder'>
                  <img src={nameIcon} alt='' />
                  <div className='container-for-input'>
                    <Input
                      type='text'
                      placeholder='Ime '
                      name='name'
                      className='input-login'
                      value={name}
                      onChange={(event) => changeName(event.target.value)}
                    />
                  </div>
                  <div className='input-error-message'>
                    {error.name && (
                      <div className='error-message'>
                        <img src={errorImage} className='error-image' alt='' />
                      </div>
                    )}
                  </div>
                </div>

                <hr className={!error.name ? 'hr-input' : 'hr-input-error'} />
              </div>
              <div className='input-hr'>
                <div className='icon-and-placeholder'>
                  <img src={nameIcon} alt='' />
                  <div className='container-for-input'>
                    <Input
                      type='text'
                      placeholder='Prezime'
                      name='name'
                      className='input-login'
                      value={surname}
                      onChange={(event) => changeSurname(event.target.value)}
                    />
                  </div>
                  <div className='input-error-message'>
                    {error.surname && (
                      <div className='error-message'>
                        <img src={errorImage} className='error-image' alt='' />
                      </div>
                    )}
                  </div>
                </div>

                <hr
                  className={!error.surname ? 'hr-input' : 'hr-input-error'}
                />
              </div>
              <div className='input-hr'>
                <div className='icon-and-placeholder'>
                  <img src={emailIcon} alt='' />
                  <div className='container-for-input'>
                    <Input
                      type='text'
                      placeholder='Email'
                      name='email'
                      id='email'
                      className='input-login'
                      value={email}
                      onChange={(event) => changeEmail(event.target.value)}
                    />
                  </div>
                  <div className='input-error-message'>
                    {error.email && (
                      <div className='error-message'>
                        <img src={errorImage} className='error-image' alt='' />
                      </div>
                    )}
                  </div>
                </div>

                <hr className={!error.email ? 'hr-input' : 'hr-input-error'} />
              </div>
              <div className='input-hr'>
                <div className='icon-and-placeholder'>
                  <img src={passwordIcon} alt='' />
                  <div className='container-for-input'>
                    <Input
                      type='password'
                      placeholder='Sifra'
                      className='input-login'
                      name='password'
                      value={password}
                      onChange={(event) => changePassword(event.target.value)}
                    />
                  </div>
                  {error.password && (
                    <div className='error-message'>
                      <img src={errorImage} className='error-image' alt='' />
                    </div>
                  )}
                </div>

                <hr
                  className={!error.password ? 'hr-input' : 'hr-input-error'}
                />
              </div>
              <div className='input-hr'>
                <div className='icon-and-placeholder'>
                  <img src={passwordIcon} alt='' />
                  <div className='container-for-input'>
                    <Input
                      type='password'
                      placeholder='Potvrdi sifru'
                      className='input-login'
                      name='password'
                      value={confirmPassword}
                      onChange={(e) => changeConfirmPassword(e.target.value)}
                    />
                  </div>
                  {error.confirmPassword && (
                    <div className='error-message'>
                      <img src={errorImage} className='error-image' alt='' />
                    </div>
                  )}
                </div>

                <hr
                  className={
                    !error.confirmPassword ? 'hr-input' : 'hr-input-error'
                  }
                />
              </div>

              <div className='input-hr'>
                <div className='icon-and-placeholder'>
                  <img src={phoneIcon} alt='' />
                  <div className='container-for-input'>
                    <Input
                      name='phone'
                      placeholder='+381'
                      type='text'
                      className='input-login'
                      value={phone}
                      onChange={(event) => changePhone(event.target.value)}
                      pattern='[0-9]*'
                    />
                  </div>
                  {error.phone && (
                    <div className='error-message'>
                      <img src={errorImage} className='error-image' alt='' />
                    </div>
                  )}
                </div>

                <hr className={!error.phone ? 'hr-input' : 'hr-input-error'} />
              </div>
            </div>
            <div className='div-register-button'>
              <ButtonRegister type='submit'>Registrujte se</ButtonRegister>
            </div>
          </div>
        </form>
      )}
      {successRegister && (
        <div className='modal'>
          <div onClick={toggleCloseSuccessModal} className='overlay'></div>
          <SuccesMessageRegister
            toggleModalRegister={toggleModalRegister}
            email={email}
            toggleCloseSuccessModal={toggleCloseSuccessModal}
          />
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
