import style from 'styled-components';

const RestartPassword = style.button`
display:flex;
flex-direction:column;
justify-content:center;
text-align-center;
align-items:center;
width:500px;
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


@media screen and (max-width:375px){
  width: 305px;
height: 40px;
background: #C10016;
border: 1px solid #C10016;
border-radius: 15px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: #FFFFFF;
}
`;

const ButtonRegister = ({ className, id, children, onClick }) => {
  return (
    <RestartPassword
      onClick={onClick}
      className={className ? `register-button ${className}` : 'register-button'}
      id={id}
    >
      {children}
    </RestartPassword>
  );
};

export default ButtonRegister;
