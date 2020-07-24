import React from 'react';
import { ReactComponent as Star } from 'assets/star.svg'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 30px;
  height: 30px;
  left: 230px;
  top: 20px;
  background: #FFFFFF;
  border-radius: 50%;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

const Favorite = () => (
  <Wrapper>
    <Star />
  </Wrapper>
);

export default Favorite
