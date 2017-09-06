import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserStyles = styled.div`
  
`;

const UserProfile = (props) => {
  const user = this.state.match.params.user;
  return (
        <h3>{user.name}</h3>
  );
};

export default UserProfile;