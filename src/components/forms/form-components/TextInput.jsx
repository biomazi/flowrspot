import React from 'react';
import { useField } from 'formik';
import styled, { css } from 'styled-components';

const errorStyle = css`
  &::after {
    content: '*';
    margin-left: 5px;
    color: #F00;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin: 10px 0;
  padding: 10px 15px;
  background: #F5F6F7;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({isError}) => isError ? '#F00' : '#DFE5EA'};
  border-radius: 3px;
`;

const StyledLabel = styled.label`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  margin-bottom: 5px;
  font-size: 10px;
  line-height: 10px;
  color: #949EA0;
  background-color: transparent;
  ${({ isError }) => isError && errorStyle}

`;

const StyledInput = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 13px;
  color: #334144;
  background-color: #F5F6F7;
  outline: none;
  border: none;
`;

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  return (
    <StyledWrapper isError={isError}>
      <StyledLabel isError={isError}>{label}</StyledLabel>
      <StyledInput
        type="text"
        {...field}
        {...props}
      />
    </StyledWrapper>
  );
};

export default TextInput;
