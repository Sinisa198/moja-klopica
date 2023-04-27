import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import profile from '../../images/profile.svg';
import lock from '../../images/lock.svg';
import pen from '../../images/icon-for-changeprofile.svg';
import Input from '../../components/Input/Input';
import Confirm from '../../components/Buttons/Confirm';
import { getUserProfile } from '../../store/actions/auth';
import HeaderWithLogin from '../../components/Header/HeaderWithLogin';
import Footer from '../../components/Footer/FooterForRestoran';
import nameIcon from '../../images/name-icon.svg';
import phoneIcon from '../../images/phone-icon.svg';
import emailIcon from '../../images/email-icon.svg';
import ModalChangePassword from '../../components/ModalChangePassword/ModalChangePassword';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ authProfile }) => authProfile.user || {});
  const [modalChangePassword, setModalChangePassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [setError] = useState();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const toggleCloseSuccessModal = () => {
    setModalChangePassword(!modalChangePassword);
  };

  const isValidPasswordForm = () => {
    if (user.name.length && user.surname.length > 4) {
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

  const changePhoneNumber = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
    setError((prevState) => ({
      ...prevState,
      phoneNumber: phoneNumber.length <= 1,
    }));
  };
  const changeSurname = (surname) => {
    setSurname(surname);

    setError((prevState) => ({
      ...prevState,
      surname: surname.length <= 3,
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
                <div className='container-for-input'>
                  <Input
                    type='text'
                    placeholder='Ime '
                    name='name'
                    className='input-login'
                    value={user.name}
                    onChange={(event) => changeName(event.target.value)}
                  />
                </div>
                <img src={pen} alt='' className='pen-icon' />
              </div>

              <hr className='hr-input' />
            </div>
            <div className='input-hr'>
              <div className='icon-and-placeholder'>
                <img src={nameIcon} alt='' />
                <div className='container-for-input'>
                  <Input
                    type='text'
                    placeholder='Prezime '
                    name='surname'
                    className='input-login'
                    value={user.surname}
                    onChange={(event) => changeSurname(event.target.value)}
                  />
                </div>
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
                  value={user.email}
                />
              </div>
              <hr className='hr-input' />
            </div>
            <div className='input-hr'>
              <div className='icon-and-placeholder'>
                <img src={phoneIcon} alt='' />
                <div className='together-input-icon'>
                  <Input
                    placeholder='Telefon '
                    name='phoneNumber'
                    className='input-login'
                    value={user.phoneNumber}
                    onChange={(event) => changePhoneNumber(event.target.value)}
                  />
                </div>
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

export default Profile;
