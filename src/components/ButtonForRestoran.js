import style from 'styled-components';

const ButtonForRestoranComponent = style.button`
 border-radius: 10px;
    justify-content: center;
    color: #ffffff;
    width: 112px;
    height: 43px;
    left: 657px;
    top: 2382px;
    background: #8a8a8a;
    opacity: 0.2;
    border-radius: 40px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: black;
`;
const ButtonForRestoran = ({ type, className, id, children }) => {
  return (
    <ButtonForRestoranComponent
      type={type ? type : 'button'}
      className={
        className
          ? `button-for-navigation ${className}`
          : 'button-for-navigation'
      }
      id={id}
    >
      {children}
    </ButtonForRestoranComponent>
  );
};

export default ButtonForRestoran;
