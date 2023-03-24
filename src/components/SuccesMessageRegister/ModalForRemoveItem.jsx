import React, { useState } from 'react';
import validationImage from '../../images/validatemessage.svg';
import CancelButton from '../Buttons/CancelButton';

const ModalForRemoveItem = ({ closeModal }) => {
  const [showModalForConfirmRemove, setShowModalForConfrimRemove] =
    useState(false);
  const closeAll = () => {
    cancelModal();
    closeModal();
  };

  const cancelModal = () => setShowModalForConfrimRemove(false);
  const showModalForConfrim = () => setShowModalForConfrimRemove(true);

  const removeAndShowModal = () => {
    showModalForConfrim(true);
  };
  return (
    <div className='remove-wrapper-main'>
      <div className='modal-remove-wrapper'>
        {!showModalForConfirmRemove && (
          <div>
            <p className='paragraf-modalremove'>
              Da li ste sigurni da zelite da otkazete rezervaciju?
            </p>
            <div className='buttons-modalremove'>
              <button
                className='button-for-modalremove'
                onClick={removeAndShowModal}
              >
                Da
              </button>
              <button className='button-for-modalremove' onClick={closeModal}>
                Ne
              </button>
            </div>
          </div>
        )}
        {showModalForConfirmRemove && (
          <div className='modal-cancelmodal'>
            <div classNama='cancelreservation-wrapper'>
              <div className='image-container-cancelreservation'>
                <img
                  src={validationImage}
                  alt=''
                  className='validation-image-cancelmodal'
                />
              </div>
              <p className='paragraf-cancelreservation'>
                Otkazali ste rezervaciju
              </p>
              <CancelButton onClick={closeAll}>Zatvori</CancelButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalForRemoveItem;
