import { useState } from 'react';
import validateMessageImage from '../../images/validatemessage.svg';
import validationImage from '../../images/validation.svg';
import ButtonClose from '../ButtonClose';

const SuccesMessageModal = () => {
  const [modalSuccesMessage, setSuccesMessage] = useState(false);
  if (modalSuccesMessage) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  return (
    <div>
      {modalSuccesMessage && (
        <div className='modal' onClick={setSuccesMessage}>
          <div onClick={setSuccesMessage} className='overlay'></div>
          <div className='modal-content-div'>
            <div class='modal-content' id='modal'>
              <img src={validateMessageImage} alt='' />
              <p className='register-title'>REGISTRACIJA USPESNA</p>
              <div className='div-icon-validate'>
                <img src={validationImage} alt='' />
                <p className='text-paragraf-message'>
                  Poslat je email na peraperic@gmail.com. Potrebno je kliknuti
                  na link u poruci kako bi aktivirali Vas profil.
                </p>
              </div>
              <ButtonClose>ZATVORI</ButtonClose>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccesMessageModal;
