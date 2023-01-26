import logoRestoran from '../../images/logo-restoran.png';
import firstimageRestoran from '../../images/firstimageRestoran.png';
import { AiTwotoneStar } from 'react-icons/ai';
import favorite from '../../images/input-icon-first.svg';
import arrow from '../../images/input-second-icon.svg';
import timerIcon from '../../images/timer-for-closed.png';
import logo from '../../images/logo-klopica.png';
import burgermenu from '../../images/burgermenu.svg';

const HeaderRestaurant = () => {
  return (
    <div className='main-header'>
      <div className='burger-logo'>
        <img src={burgermenu} alt='' />
        <img src={logo} alt='' className='logo-restoran' />
        <div className='input'>
          <span className='prefix'>
            <img src={favorite} alt='' className='icon-favorite-input' />
          </span>
          <input placeholder='Unesite adresu gde se nalazite' />
          <span className='suffix'>
            <img src={arrow} alt='' className='arrow-icons-input' />
          </span>
        </div>
        <div className='button-for-restoran'>
          <button className='button-restoran'>Ulogujte se</button>
        </div>
      </div>
      <div className='box-together'>
        <div className='box'>
          <img src={firstimageRestoran} alt='' className='background-for-box' />
          <img src={logoRestoran} alt='' className='logo-for-restoran' />
        </div>
        <div className='second-box'>
          <div className='text-for-restoran'>
            <h2 className='title-for-restoran'>Restoran Top FOOD 021</h2>
            <p className='paragraf-restoran'>
              RESTORANI * Domaca kuhinja * 4,2
              <AiTwotoneStar /> 60 ocena Besplatna dostava
            </p>
            <p className='second-paragraf'>
              <img src={timerIcon} alt='' className='timer-icon' />
              <span className='span-green'> Otvoreno sad </span>* Zatvara se u
              23:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRestaurant;
