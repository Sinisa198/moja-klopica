import { React, useState } from 'react';
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
        <div className='nav-restoran' href='#' onClick={navigateToRestoran}>
          <img src={RestoranIcon} className='meni-icon' alt='' />
          <p className='paragraf-meni'>O restoranu</p>
        </div>
        <div className='nav-meni' href='#' onClick={navigateToMeni}>
          <img src={Notepad} className='meni-icon' alt='' />
          <p className='paragraf-meni'>Meni</p>
        </div>
        <div
          className='nav-impressions'
          href='#'
          onClick={navigateToImpressions}
        >
          <img src={Star} className='meni-icon' alt='' />
          <p className='paragraf-meni'>Utisci</p>
        </div>
        <div className='nav-galery' href='#' onClick={navigateToGalery}>
          <img src={Picture} className='meni-icon' alt='' />
          <p className='paragraf-meni'>Galerija</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
