import style from 'styled-components';

const ComponentButtonForImpressions = style.button`
 box-sizing: border-box;
position: absolute;
width: 154px;
background:transparent;
height: 42px;
border: 2px solid #C10016;
border-radius: 10px;
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
color: #333333;
`;
const ButtonForImpressions = ({ className, id, children }) => {
  return (
    <ComponentButtonForImpressions
      className={
        className
          ? `button-for-navigation ${className}`
          : 'button-for-navigation'
      }
      id={id}
    >
      {children}
    </ComponentButtonForImpressions>
  );
};

export default ButtonForImpressions;
