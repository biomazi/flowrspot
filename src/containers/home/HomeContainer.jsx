import React, { useState } from 'react';
import styled from 'styled-components';
import useAxios from 'hooks/useAxios';
import FlowerItem from 'components/flower/FlowerItem';
import Search from 'components/search/Search';
import Jumbotron from 'components/jumbotron/Jumbotron';

const StyledItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomeContainer = () => {
  const { data } = useAxios('/api/v1/flowers');
  const [searchValue, setSearchValue] = useState('');

  const filteredData = data?.flowers?.filter(flower => {
    if (!searchValue) return true
    return flower.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  return (
    <>
      <Jumbotron>
        <Search setSearchValue={setSearchValue} searchValue={searchValue} />
      </Jumbotron>
      <StyledItemsWrapper>
        {filteredData && filteredData.map(flower => <FlowerItem key={flower.id} flower={flower} />)}
      </StyledItemsWrapper>
    </>
  )
}

export default HomeContainer
