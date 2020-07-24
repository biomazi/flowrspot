import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Avatar } from 'assets/profile-holder.svg';
import ProfileDetail from './ProfileDetail';
import Button from 'components/ui/Button';

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  height: 80px;
  margin-bottom: 41px;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  margin-left: 30px;
`;

const StyledDetailsWrapper = styled.div`
  font-family: Ubuntu;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  div { 
    margin-bottom: 31px;
  }
`;

const StyledName = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 25px;
  color: #334144;
  margin-bottom: 6px;
`;

const StyledSightings = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
  color: #949EA0;
`;

const StyledButton = styled(Button)`
  width: 150px;
  height: 50px;
  align-self: center;
  margin-top: auto;

  @media (max-width: 767px) {
    margin-top: 80px;
  }
`;

const Profile = ({ user: { first_name, last_name } }) => (
  <>
    <StyledHeader>
      <Avatar />
      <StyledTitleWrapper>
        <StyledName>{first_name + ' ' + last_name}</StyledName>
        <StyledSightings>47 sightings</StyledSightings>
      </StyledTitleWrapper>
    </StyledHeader>
    <StyledDetailsWrapper>
      <ProfileDetail label="First name" text={first_name} />
      <ProfileDetail label="Last name" text={last_name} />
      <ProfileDetail label="Date of birth" text="May 20, 1980" />
      <ProfileDetail label="Email address" text="michael.berry@gmail.com" />
    </StyledDetailsWrapper>
    <StyledButton>Logout</StyledButton>
  </>
);


export default Profile;
