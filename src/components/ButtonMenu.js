import style from 'styled-components';

const ComponentButtonMenu = style.button`
margin-left: 110px;
  background: #c63a2f;
  border: 1.19648px solid #d9d9d9;
  border-radius: 5.98242px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
`;

const ButtonMenu = ({ type, className, id, children, callbackAction }) => {
  return (
    <ComponentButtonMenu
      onClick={callbackAction}
      type={type ? type : 'button'}
      className={className ? `meni-button ${className}` : 'meni-button'}
      id={id}
    >
      {children}
    </ComponentButtonMenu>
  );
};

export default ButtonMenu;
