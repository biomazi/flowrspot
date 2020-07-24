import React from 'react'
import styled from 'styled-components';
import Favorite from 'components/ui/Favorite';
import Button from 'components/ui/Button';
import { useSessionContext } from 'hooks/useSessionContext';

const StyledImageContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 280px;
  height: 350px;
  margin: 10px;
  background-size: cover;
  background-position: center;
  background-image: 
    url(${props => props.imgUrl}),
    linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.7) 89.5%);
  p {
      margin: 0;
  }
`

const StyledText = styled.p`
  &&& { margin-bottom: 7px; }
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 15px;
  text-align: center;
  color: #FFFFFF;
  background-color: transparent;
`;
const StyledLatinText = styled.p`
  font-family: Ubuntu;
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.7;
  background-color: transparent;
`;

const StyledButton = styled(Button)`
  background: rgba(0, 0, 0, 0.5);
  padding: 9px 15px;
  height: 30px;
  min-width: 103px;
  width: fit-content;
  border-radius: 20px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  box-shadow: none;
  color: #FFFFFF;
  margin: 20px 0;
`;

const FlowerItem = ({ flower }) => {
  const { authToken } = useSessionContext();
  const isLoggedIn = !!authToken;

  return (
    <StyledImageContainer imgUrl={flower.profile_picture}>
      {isLoggedIn && <Favorite favorite={flower.favorit} />}
      <StyledText>{flower.name}</StyledText>
      <StyledLatinText>{flower.latin_name}</StyledLatinText>
      <StyledButton circular>{flower.sightings} sightings</StyledButton>
    </StyledImageContainer>
  )
};

export default FlowerItem;
