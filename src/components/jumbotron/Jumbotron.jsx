import React from 'react';
import backgroundImage from 'assets/pl-hero.svg';
import styled from 'styled-components';

const StyledBackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
  margin-bottom: 90px;
`

const StyledTitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF;
  margin: 15px;
  background-color: transparent;
`

const StyledSubtitle = styled.h4`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 17px;
  text-align: center;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.7;
  margin: 0 0 45px 0;
  background-color: transparent;
`

const Jumbotron = ({ children }) => (
  <StyledBackgroundDiv>
    <StyledTitle>Discover flowers around you</StyledTitle>
    <StyledSubtitle>Explore between more than 8.427 sightings</StyledSubtitle>
    {children}
  </StyledBackgroundDiv>
);

export default Jumbotron;
