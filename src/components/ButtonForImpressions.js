import style from 'styled-components';

const ComponentButtonForImpressions = style.button`
  width: 154px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  padding-top:5px;
  padding-bottom:5px;
  background: #c63a2f;
  border: 1px solid #c63a2f;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 6.23711px;
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
