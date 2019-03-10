import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 15px;
  box-sizing: border-box;
  background-color: #e8eff1;
`;

const Image = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 5px;
`;

const UserInfo = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const LogoutButton = styled.button`
  border: none;
  outline: none;
  padding: 8px 8px;
  margin-left: 15px;
  cursor: pointer
`;

const Header = ({avatar, username, logout}) => {
  return(
    <HeaderWrapper>
      <h1>Home</h1>
      <UserInfo>
        <Image src={avatar} alt="avatar."/>
        <span>{username}</span>
        <LogoutButton onClick={logout}>Logout</LogoutButton>
      </UserInfo>
    </HeaderWrapper>
  )
}

export default Header