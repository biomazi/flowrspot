import React from 'react';
import styled from 'styled-components';
import useAxios from 'hooks/useAxios';
import FlowerItem from 'components/flower/FlowerItem';
import Search from 'components/search/Search';

const StyledItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 767px) {
    background-color: #F2F2F2;
  }
`;

const StyledBackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  @media (max-width: 767px) {
    background-color: #F2F2F2;
  }
`;

const StyledSearch = styled(Search)`
  height: 60px;
`;

const FlowersContainer = () => {
  const { data } = useAxios('/api/v1/flowers');
  return (
    <>
      <StyledBackgroundDiv>
        <StyledSearch />
      </StyledBackgroundDiv>
      <StyledItemsWrapper>
        {data && data.flowers.map(flower => <FlowerItem key={flower.id} flower={flower} />)}
      </StyledItemsWrapper>
    </>
  )
}

export default FlowersContainer
