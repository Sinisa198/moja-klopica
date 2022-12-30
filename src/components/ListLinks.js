import style from 'styled-components';

const ComponentListLinks = style.div`
 display: flex;
  margin-left: 1116px;
  margin-top: -50px;
  width: 100px;
  grid-column-gap: 30px;
  color: black;
  font-size: 30px;
`;
const ListLinks = ({ className, id, type, children }) => {
  return (
    <ComponentListLinks
      type={type ? type : 'button'}
      className={
        className
          ? `button-for-navigation ${className}`
          : 'button-for-navigation'
      }
      id={id}
    >
      {children}
    </ComponentListLinks>
  );
};

export default ListLinks;
