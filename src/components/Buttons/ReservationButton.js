import style from 'styled-components';

const ReservationButton = style.button`
  
  background: #c63a2f;
  border: 1.19648px solid #d9d9d9;
  border-radius: 30px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  width: 193px;
  height: 51.89px;
  color: #ffffff;
  cursor: pointer;

  @media screen and (max-width:375px){
    box-sizing: border-box;
    width: 149px;
    height: 35px;
    background: #C10016;
    border: 1px solid #C10016;
    border-radius: 12px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    color: #FFFFFF;
  }
`;

const ButtonMenu = ({ type, id, children, callbackAction }) => {
  return (
    <ReservationButton
      onClick={callbackAction}
      type={type ? type : 'button'}
      id={id}
    >
      {children}
    </ReservationButton>
  );
};

export default ButtonMenu;
