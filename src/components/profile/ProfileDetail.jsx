import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 40px;
`;

const ProfileLabel = styled.span`
  font-family: 'Ubuntu' sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 10px;
  color: #949EA0;
  margin-bottom: 16px;
`;

const ProfileText = styled.span`
  font-family: 'Ubuntu' sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 13px;
  color: #334144;
`;

const ProfileDetail = ({ label, text }) => (
  <StyledWrapper>
    <ProfileLabel>{label}</ProfileLabel>
    <ProfileText>{text}</ProfileText>
  </StyledWrapper>
)


export default ProfileDetail;
