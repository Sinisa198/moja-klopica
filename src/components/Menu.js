import React from 'react';
import style from 'styled-components';

const MenuComponent = style.p`
 display: flex;
  margin-left: 327px;
  margin-top: -10px;
  width: 39px;
  height: 24px;
  left: 1282.53px;
  top: 1266px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 93px;
  padding: 2px 2px 2px 2px;
  background-color: lightcoral;
  border-radius: 40px;
  color: #333333;
`;
const Menu = ({ className, onClick, id, children }) => {
  return (
    <MenuComponent
      className={className ? ` ${className}` : 'button-for-navigation'}
      id={id}
      onClick={onClick}
    >
      {children}
    </MenuComponent>
  );
};
export default Menu;
