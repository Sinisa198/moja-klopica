import style from 'styled-components';

const ComponentCancelReservation = style.button`
display:flex;
flex-direction:column;
justify-content:center;
text-align-center;
align-items:center;
width: 320px;
height: 50px;
background-color:#C10016;
border:1px solid #C10016;
border-radius:30px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 42px;
color: #FFFFFF;
cursor:pointer;
`;

const CancelReservation = ({ className, id, children, onClick }) => {
  return (
    <ComponentCancelReservation
      onClick={onClick}
      className={className ? `register-button ${className}` : 'register-button'}
      id={id}
    >
      {children}
    </ComponentCancelReservation>
  );
};

export default CancelReservation;
