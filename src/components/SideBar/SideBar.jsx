import React from 'react';
import close from '../../images/sideBarClose.svg';
import menu from '../../images/menu.svg';
import home from '../../images/home.svg';
import aboutUs from '../../images/aboutus.svg';

const SideBar = ({ closeSideBar }) => {
  return (
    <div className='side-bar'>
      <img src={close} onClick={closeSideBar} className='close-side-bar' />
      <div className='sidebar-menu'>
        <div className='paragraf-sidebarmenu'>
          <a href='/' className='navigation-sidebar'>
            <img src={home} alt='' className='icon-sidebar' />
            Pocetna
          </a>
        </div>
        <div className='paragraf-sidebarmenu'>
          <a href='/reservation' className='navigation-sidebar'>
            <img src={menu} alt='' className='icon-sidebar' />
            Ponuda
          </a>
        </div>
        <div className='paragraf-sidebarmenu'>
          <a href='/aboutus' className='navigation-sidebar'>
            <img src={aboutUs} alt='' className='icon-sidebar' />O nama
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
