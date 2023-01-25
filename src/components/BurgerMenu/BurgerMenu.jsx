import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='burger-menu'>
      <button
        className={`burger-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className='burger-line'></div>
        <div className='burger-line'></div>
        <div className='burger-line'></div>
      </button>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <NavLink to='/'>POCETNA</NavLink>
        <NavLink to='/topfood'>O RESTORANU</NavLink>
        <NavLink to='/menu'>MENI</NavLink>
        <NavLink to='/impressions'>UTISCI</NavLink>
        <NavLink to='/gallery'>GALERIJA</NavLink>
      </nav>
    </div>
  );
};

export default BurgerMenu;
