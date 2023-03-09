import style from 'styled-components';

const CloseButton = style.button`
display:flex;
flex-direction:column;
justify-content:center;
text-align-center;
align-items:center;
width:350px;
background-color:#C10016;
border:1px solid #C10016;
border-radius:30px;
height: 54.28px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 42px;
color: #FFFFFF;
cursor:pointer;

`;

const ButtonRegister = ({ className, id, children, onClick }) => {
  return (
    <CloseButton
      onClick={onClick}
      className={className ? `register-button ${className}` : 'register-button'}
      id={id}
    >
      {children}
    </CloseButton>
  );
};

export default ButtonRegister;
