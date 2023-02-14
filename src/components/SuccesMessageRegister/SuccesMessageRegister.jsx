import validateMessageImage from '../../images/validatemessage.svg';
import ButtonClose from '../ButtonClose';

const SuccesMessageModal = () => {
  return (
    <div className='succes-wrapper'>
      <div className='succes-message'>
        <div className='div-for-image-succesmessage'>
          <img src={validateMessageImage} className='image-validation' alt='' />
        </div>
        <div className='paragraf-success-message'>
          <p className='text-for-succes-message'>
            Poslat je verifikacioni email na peraperic@gmail.com. Neophodno je
            verifikovati nalog kako bi se registracija zavrsila.{' '}
          </p>
        </div>
        <div className='button-succesmessage'>
          <ButtonClose>ZATVORI</ButtonClose>
        </div>
      </div>
    </div>
  );
};

export default SuccesMessageModal;
