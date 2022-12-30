import React from 'react';
import styled from 'styled-components';
const ProfileComponent = styled.p`
  margin-left: 328px;
  width: 40px;
  height: 24px;
  left: 1284px;
  top: 1212px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  width: 90px;
  padding: 3px 3px 3px 3px;
  background-color: lightcoral;
  border-radius: 40px;
`;

const Profile = ({ className, children, onClick, id }) => {
  return (
    <ProfileComponent
      className={className ? ` ${className}` : 'button-for-navigation'}
      id={id}
      onClick={onClick}
    >
      {children}
    </ProfileComponent>
  );
};

export default Profile;
