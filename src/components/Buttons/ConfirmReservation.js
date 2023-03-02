import style from 'styled-components';

const ConfirmReservation = style.button`
  
  background: #c63a2f;
  border: 1.19648px solid #d9d9d9;
  border-radius: 30px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  width: 280.11px;
  height: 53px;
  color: #ffffff;
  cursor:pointer;
`;

const ButtonMenu = ({ type, id, children, handleClick }) => {
  return (
    <ConfirmReservation
      type={type ? type : 'button'}
      id={id}
      onClick={handleClick}
    >
      {children}
    </ConfirmReservation>
  );
};

export default ButtonMenu;
