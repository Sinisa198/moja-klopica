import React, { useState } from 'react';
import profile from '../../images/profile.svg';
import lock from '../../images/lock.svg';
import pen from '../../images/icon-for-changeprofile.svg';
import Input from '../../components/Input/Input';
import Confirm from '../../components/Buttons/Confirm';
import HeaderWithLogin from '../../components/Header/HeaderWithLogin';
import Footer from '../../components/Footer/FooterForRestoran';
import nameIcon from '../../images/name-icon.svg';
import phoneIcon from '../../images/phone-icon.svg';
import emailIcon from '../../images/email-icon.svg';
import ModalChangePassword from '../../components/ModalChangePassword/ModalChangePassword';

const ChangeProfile = () => {
  const [modalChangePassword, setModalChangePassword] = useState(false);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [setError] = useState({});

  const toggleCloseSuccessModal = () => {
    setModalChangePassword(!modalChangePassword);
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
  const isValidPasswordForm = () => {
    if (name.length && surname.length && phone.length > 4) {
      setModalChangePassword(true);
    }
  };
  const changeName = (name) => {
    setName(name);
    setError((prevState) => ({
      ...prevState,
      name: name.length <= 1,
    }));
  };

  const changeSurname = (surname) => {
    setSurname(surname);

    setError((prevState) => ({
      ...prevState,
      surname: surname.length <= 3,
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
  };
  return (
    <div className='wrapper-changeprofile'>
      <div className='header-reservation'>
        <HeaderWithLogin />
      </div>
      <div className='change-profile-main'>
        <p className='changeprofile-text'>Izmena profila</p>
        <div className='image-change-profile'>
          <img src={profile} alt='' className='icon-changeprofile' />
        </div>
        <div className='lock-text'>
          <img src={lock} alt='' />
          <p>Promeni sifru</p>
        </div>
        <div className='inputs-changeprofile'>
          <form onSubmit={handleSubmit}>
            <div className='input-hr'>
              <div className='icon-and-placeholder'>
                <img src={nameIcon} alt='' />
                <Input
                  type='text'
                  placeholder='Ime '
                  name='name'
                  className='input-login'
                  value={name}
                  onChange={(event) => changeName(event.target.value)}
                />
                <img src={pen} alt='' className='pen-icon' />
              </div>

              <hr className='hr-input' />
            </div>
            <div className='input-hr'>
              <div className='icon-and-placeholder'>
                <img src={nameIcon} alt='' />
                <Input
                  type='text'
                  placeholder='Prezime '
                  name='surname'
                  className='input-login'
                  value={surname}
                  onChange={(event) => changeSurname(event.target.value)}
                />
                <img src={pen} alt='' className='pen-icon' />
              </div>

              <hr className='hr-input' />
            </div>
            <div className='input-hr'>
              <div className='icon-and-placeholder'>
                <img src={emailIcon} alt='' />

                <Input
                  type='text'
                  placeholder='Email '
                  name='email'
                  className='input-login'
                  value={email}
                  onChange={(event) => changeEmail(event.target.value)}
                />
              </div>
              <hr className='hr-input' />
            </div>
            <div className='input-hr'>
              <div className='icon-and-placeholder'>
                <img src={phoneIcon} alt='' />
                <Input
                  type='number'
                  placeholder='Telefon '
                  name='phone'
                  className='input-login'
                  value={phone}
                  onChange={(event) => changePhone(event.target.value)}
                />
                <img src={pen} alt='' className='pen-icon' />
              </div>

              <hr className='hr-input' />
            </div>
          </form>
          <Confirm onClick={isValidPasswordForm}>Potvrdi</Confirm>
        </div>
        {modalChangePassword && (
          <div className='modal'>
            <div className='overlay' onClick={toggleCloseSuccessModal}></div>
            <ModalChangePassword
              toggleCloseSuccessModal={toggleCloseSuccessModal}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ChangeProfile;
