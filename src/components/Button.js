import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  width: 194px;
  height: 67px;
  top: 59px;
  background: #c63a2f;
  border-radius: 10px;
  border: 1px solid #c63a2f;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 34px;
  color: #ffffff;
`;

const Button = ({ className, variant, id, children }) => {
  return (
    <ButtonComponent
      variant={variant}
      className={
        className
          ? `button-for-navigation ${className}`
          : 'button-for-navigation'
      }
      id={id}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
