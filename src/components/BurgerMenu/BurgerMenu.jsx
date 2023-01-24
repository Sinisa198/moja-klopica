import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

const BurgerMenu = () => {
  const [state] = useState(false);

  return (
    <Menu isOpen={state.menuOpen}>
      <NavLink className='menu-item' to='/'>
        POCETNA
      </NavLink>
      <NavLink className='menu-item' to='/topfood'>
        O RESTORANU
      </NavLink>
      <NavLink className='menu-item' to='/menu'>
        MENI
      </NavLink>
      <NavLink className='menu-item' to='/impressions'>
        UTISCI
      </NavLink>
      <NavLink className='menu-item' to='/gallery'>
        GALERIJA
      </NavLink>
    </Menu>
  );
};
export default BurgerMenu;
