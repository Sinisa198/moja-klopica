import { React } from 'react';
import { NavLink } from 'react-router-dom';
import RestoranIcon from '../../images/Vector.png';
import Notepad from '../../images/notepad.png';
import Star from '../../images/star.png';
import Picture from '../../images/picture.png';

const Nav = () => {
  return (
    <div className='main-nav'>
      <div className='nav'>
        <div className='nav-restoran' href='#'>
          <img src={RestoranIcon} className='meni-icon' alt='' />
          <NavLink
            to='/topfood'
            activeClassName='active'
            className='paragraf-meni'
          >
            O restoranu
          </NavLink>
        </div>
        <div className='nav-meni' href='#'>
          <img src={Notepad} className='meni-icon' alt='' />
          <NavLink
            to='/meni'
            activeClassName='active'
            className='paragraf-meni'
          >
            Meni
          </NavLink>
        </div>
        <div className='nav-impressions' href='#'>
          <img src={Star} className='meni-icon' alt='' />
          <NavLink
            to='/impressions'
            activeClassName='active'
            className='paragraf-meni'
          >
            Utisci
          </NavLink>
        </div>
        <div className='nav-galery' href='#'>
          <img src={Picture} className='meni-icon' alt='' />
          <NavLink
            to='/gallery'
            activeClassName='active'
            className='paragraf-meni'
          >
            Galerija
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
