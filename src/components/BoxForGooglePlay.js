import style from 'styled-components';

const ComponentGooglePlay = style.p`
  box-sizing: border-box;
  margin-top: 10px;
  width:100%;
  max-width: 194px;
  background: rgba(198, 58, 47, 0.5);
  border: 2px solid #c63a2f;
  border-radius: 10px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;

const BoxForGooglePlay = ({ className, id, children }) => {
  return (
    <ComponentGooglePlay
      className={className ? `home-google ${className}` : 'home-google'}
      id={id}
    >
      {children}
    </ComponentGooglePlay>
  );
};

export default BoxForGooglePlay;
