import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuForTerms = () => {
  return (
    <div>
      <div className='list-terms'>
        <NavLink
          to='/faq'
          activeClassName='active'
          className='text-for-terms-use'
        >
          Često postavljana pitanja
        </NavLink>
        <NavLink
          to='/privacynotices'
          className='text-for-terms-use'
          activeClassName='active'
        >
          Obaveštenje o privatnosti
        </NavLink>
        <NavLink
          to='/termsofuse'
          activeClassName='active'
          className='text-for-terms-use'
        >
          Uslovi korišćenja
        </NavLink>
      </div>
    </div>
  );
};

export default MenuForTerms;
