import React from 'react';
import style from 'styled-components';

const PhoneComponent = style.p`
  display: flex;
  margin-top: -10px;
  margin-left: 957px;
  width: 51px;
  left: 1282px;
  top: 1320px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  width: 90px;
  left: 1236px;
  top: 1257px;
  background-color: lightcoral;
  border-radius: 40px;
  padding: 3px 2px 2px 2px;`;

const Phone = ({ className, onClick, children, id }) => {
  <PhoneComponent
    className={className ? `nav-home-last ${className}` : 'nav-home-last'}
    id={id}
  >
    {children}
  </PhoneComponent>;
};

export default Phone;
