import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrowSecond from '../../images/arrow-second.svg';
import arrowMenu from '../../images/arrowmenu.svg';
import logOut from '../../images/logout.svg';
import reservation from '../../images/reservation.svg';
import profile from '../../images/profiledropdown.svg';

const DropdownMenu = () => {
  const [selected, toggle] = useState(false);

  return (
    <div className='dropdown'>
      <div className='accordion'>
        <div className='title'>
          <div className='icon-arrow' onClick={() => toggle(!selected)}>
            {selected ? (
              <img src={arrowSecond} alt='' />
            ) : (
              <img src={arrowMenu} alt='' />
            )}
          </div>
        </div>
        <div>
          <div className={selected ? 'text show' : 'text'}>
            <div className='text-menu'>
              <img src={reservation} alt='' className='icon-menu' />
              <NavLink to='/myreservation' className='paragraf-menu'>
                Moje rezervacije
              </NavLink>
            </div>
            <div className='text-menu'>
              <img src={profile} alt='' className='icon-menu' />
              <NavLink to='/changeprofile' className='paragraf-menu'>
                Izmena profila
              </NavLink>
            </div>
            <div className='text-menu'>
              <img src={logOut} alt='' className='icon-menu' />
              <NavLink to='/' className='paragraf-menu'>
                Odjavi se
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
