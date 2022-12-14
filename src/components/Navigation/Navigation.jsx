import React from "react";
import logo from '../../images/logo.png';
const Header = () => {
  return(
    <div className='navigation'>
      <img src={logo} className="logo" alt=""/>
      <div className='header-text'>
        <h1> Saznaj gde je najbliza <span>TVOJA KLOPICA</span></h1>
      </div>
      <div className='header-button'>
        <button>Ulogujte se</button>
      </div>
    </div>
  )
}

export default Header;