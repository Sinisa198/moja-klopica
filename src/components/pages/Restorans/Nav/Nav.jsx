import React from 'react';
import { useNavigate } from 'react-router';
import RestoranIcon from '../../../../images/Vector.png';
import Notepad from '../../../../images/notepad.png';
import Star from '../../../../images/star.png';
import Picture from '../../../../images/picture.png';
const Nav = () => {
  const navigate = useNavigate();
  const navigateToMeni = () => navigate('/meni');
  const navigateToRestoran = () => navigate('/topfood');
  const navigateToGalery = () => navigate('/gallery');
  const navigateToImpressions = () => navigate('/impressions');

  return (
    <div className='main-nav'>
      <div className='nav'>
        <div className='nav-restoran'>
          <img src={RestoranIcon} className='meni-icon' alt='' />
          <p className='paragraf-meni' onClick={navigateToRestoran}>
            O restoranu
          </p>
        </div>
        <div className='nav-meni'>
          <img src={Notepad} className='meni-icon' alt='' />
          <p className='paragraf-meni' onClick={navigateToMeni}>
            Meni
          </p>
        </div>
        <div className='nav-impressions'>
          <img src={Star} className='meni-icon' alt='' />
          <p className='paragraf-meni' onClick={navigateToImpressions}>
            Utisci
          </p>
        </div>
        <div className='nav-galery'>
          <img src={Picture} className='meni-icon' alt='' />
          <p className='paragraf-meni' onClick={navigateToGalery}>
            Galerija
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
