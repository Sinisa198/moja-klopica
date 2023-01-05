import React from 'react';
import style from 'styled-components';

const ComponentAppStore = style.div`
margin-top: 45px;
    margin-left: 50px;
    box-sizing: border-box;
    position: absolute;
    max-width: 174.79px;
    left: 217px;
    background: rgba(198, 58, 47, 0.5);
    border: 1.80193px solid #c63a2f;
    border-radius: 9.00966px;
`;
const BoxforAppStore = ({ className, id, type, children }) => {
  return (
    <ComponentAppStore
      type={type ? type : 'div'}
      className={className ? `box-home ${className}` : 'box-home'}
      id={id}
    >
      {children}
    </ComponentAppStore>
  );
};

export default BoxforAppStore;
