import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserStyles = styled.div`
  
`;

class UserProfile extends Component {
    constructor() {
        super();
        this.state= {
            user: {}
        }
    }

    _getUser = async () => {

    }
  render () {
    return (
        <div>
            <h3>{this.state.user.name}</h3>
        </div>
    )
  }
};

export default UserProfile;