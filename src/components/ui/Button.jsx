import React from 'react';
import styled, { css } from 'styled-components';

const boxShadow = css`
  box-shadow: 0px 15px 20px rgba(234, 168, 159, 0.2);
`;

const StyledButton = styled.button`
  border-radius: ${({ circular }) => circular ? '50px' : '3px'};
  height: 40px;
  cursor: pointer;
  border: none;
  padding: 12px 22px 14px 22px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  outline: none;
  color: ${({ basic }) => basic ? '#DF9186' : '#FFFFFF'};
  background: ${({ basic }) => basic
    ? 'transparent'
    : 'linear-gradient(270deg, #ECBCB3 0%, #EAA79E 100%)'};
  
  ${({ basic }) => !basic && boxShadow}

  &:hover {
    opacity: 0.7
  }
`;

const Button = ({ className, children, circular, basic, clicked }) => (
  <StyledButton className={className} circular={circular} onClick={clicked} basic={basic}>
    {children}
  </StyledButton>
);


export default Button;
