import style from 'styled-components';

const ComponentButtonForImpressions = style.button`
  max-width: 154px;
  left: 886px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  top: 1765px;
  background: #c63a2f;
  border: 1px solid #c63a2f;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 6.23711px;
`;
const ButtonForImpressions = ({ type, className, id, children }) => {
  return (
    <ComponentButtonForImpressions
      type={type ? type : 'button'}
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