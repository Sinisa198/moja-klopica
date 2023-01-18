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
        <NavLink
          className='nav-restoran'
          to='/topfood'
          activeClassName='active'
        >
          <img src={RestoranIcon} className='meni-icon' alt='' />
          <p className='paragraf-meni'>O restoranu</p>
        </NavLink>

        <NavLink className='nav-meni' activeClassName='active' to='/menu'>
          <img src={Notepad} className='meni-icon' alt='' />
          <p className='paragraf-meni'>Meni</p>
        </NavLink>
        <NavLink
          className='nav-impressions'
          to='/impressions'
          activeClassName='active'
        >
          <img src={Star} className='meni-icon' alt='' />
          <p className='paragraf-meni'>Utisci</p>
        </NavLink>
        <NavLink className='nav-galery' to='/gallery' activeClassName='active'>
          <img src={Picture} className='meni-icon' alt='' />
          <p className='paragraf-meni'>Galerija</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
