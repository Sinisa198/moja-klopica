import React from 'react';
import logoRestoran from '../../images/logo-restoran.png';
import miniLogo from '../../images/miniLogo.png';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import firstimageRestoran from '../../images/firstimageRestoran.png';
import map from '../../images/map.png';
import RestoranIcon from '../../images/Vector.png';
import Notepad from '../../images/notepad.png';
import Star from '../../images/star.png';
import Picture from '../../images/picture.png';
import Burger from '../../images/burger.png';
import Location from '../../images/location.png';
import Phone from '../../images/phone.png';
const RestoranTopFood = () => {
  return (
    <div className='restoran-top-food'>
      <div className='burger-logo'>
        <img src={Burger} className='burger-meni' alt='' />
        <img src={miniLogo} alt='' className='logo-restoran' />
        <div>
          <p className='restoran-paragraf'>Moja klopica</p>
        </div>{' '}
        <div class='input'>
          <span class='prefix'>
            <MdFavoriteBorder />
          </span>
          <input />
          <span class='suffix'>
            <MdOutlineArrowForwardIos />
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
            <h2 className='title-for-restoran'>Restoran Top Food 021</h2>
            <p className='paragraf-restoran'>
              RESTORANI * Domaca kuhinja * 4,2 60 ocena Besplatna dostava
            </p>
            <p className='second-paragraf'>
              <span className='span-green'> Otvoreno sad </span>* Zatvara se u
              23:30{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='navigation-menu'>
        <div className='nav'>
          <div className='nav-restoran'>
            <img src={RestoranIcon} className='meni-icon' alt='' />
            <p className='paragraf-meni'>O restoranu</p>
          </div>
          <div className='nav-meni'>
            <img src={Notepad} className='meni-icon' alt='' />
            <p className='paragraf-meni'>Meni</p>
          </div>
          <div className='nav-impressions'>
            <img src={Star} className='meni-icon' alt='' />
            <p className='paragraf-meni'>Utisci</p>
          </div>
          <div className='nav-galery'>
            <img src={Picture} className='meni-icon' alt='' />
            <p className='paragraf-meni'>Galerija</p>
          </div>
        </div>
        <div className='text-and-location'>
          <p className='text-restoran'>
            {' '}
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Nullam mi elit, commodo nec
            <br /> ante id, ornare efficitur dui. Nulla in quam sed
            <br />
            ex aliquam feugiat. In varius risus est, sed
            <br /> placerat tortor mollis a. Donec nec aliquet ante. <br />
            Duis dictum, enim vel feugiat ultrices, sapien <br />
            massa lobortis erat, non mollis libero nisl quis
            <br /> quam. Nunc tristique eget metus a dictum. <br />
            Donec tincidunt tincidunt tellus vel sodales.
            <br /> Orci varius natoque penatibus et magnis dis
            <br /> parturient montes, nascetur ridiculus mus. Sed
            <br /> sapien urna, suscipit nec viverra at,
            <br /> congue at quam. Donec sodales ante a metus consequat,
            <br />
            vitae placerat mi maximus. Pellentesque <br />
            elementum nibh vitae lectus facilisis, in ornare
            <br /> turpis suscipit.
          </p>
          <div className='location'>
            <p>Restoran Top Food 021</p>
            <div className='location-restoran'>
              <img src={Location} alt='' />
              <p>Svetozala Miletica 26, 21000 Novi Sad</p>
            </div>
            <div className='phone-restoran'>
              <img src={Phone} alt='' className='phone-image' />
              <p>0644226471</p>
            </div>
            <img src={map} className='image-map' alt='' />{' '}
            {/*Stavljena slika samo zbog pregleda*/}
          </div>
          <div className='three-div'>
            <p>Slicna mesta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestoranTopFood;
