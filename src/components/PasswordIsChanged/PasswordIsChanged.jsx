import React from 'react';

const PasswordIsChanged = ({ closeModal }) => {
  return (
    <div className='main'>
      <div className='password-is-changed-wrapper'>
        <p className='paragraf-for-modal-changed-password'>
          Promenili ste sifru
        </p>
        <div className='container-for-button-changed-password'>
          <button className='button-for-changed-password' onClick={closeModal}>
            Zatvori
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordIsChanged;
