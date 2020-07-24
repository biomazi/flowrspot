import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/pl-icon-search.svg'

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 70px;
  padding: 10px 40px 10px 20px;
  background-color: #FFFFFF;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #DFE5EA;
  border-radius: 3px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  
  @media (max-width: 767px) {
    width: 80%;
    height: 56px !important;
  }
`;

const StyledInput = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #334144;
  background-color: #FFFFFF;
  outline: none;
  border: none;

  &::placeholder {
    font-weight: 300;
    color: #949EA0;
  }
`;

const Search = ({ className, searchValue, setSearchValue }) => (
  <StyledWrapper className={className}>
    <StyledInput
      onChange={e => setSearchValue(e.target.value)}
      value={searchValue}
      id="search"
      type="text"
      name="search"
      placeholder="Looking for something specific"
    />
    <SearchIcon />
  </StyledWrapper>
);


export default Search;

