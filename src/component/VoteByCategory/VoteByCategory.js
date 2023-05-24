import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CanditateCard from "./component/CanditateCard";

function VoteByCategory({ dataList, onSelect, isVoteSuccess }) {
  const { categoryName, categoryID, data } = dataList;

  const [isSelected, setSelected] = useState(null);

  const handleOnSelect = (categoryID, nomineeID, name) => {
    setSelected(nomineeID);
    onSelect && onSelect(categoryID, nomineeID, name);
  };

  useEffect(() => {
    if (isVoteSuccess) {
      setSelected(null);
    }

    return () => {};
  }, [isVoteSuccess]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTitle>Category: {categoryName}</HeaderTitle>
      </HeaderWrapper>
      <ContentWrapper>
        {data.map((item) => {
          return (
            <CanditateCard
              name={item.name}
              imgSrc={item.imgSrc}
              id={item.id}
              key={item.id}
              // If vote is null return false
              // otherwise compare current vote by id
              isSelected={
                !isSelected ? false : item.id === isSelected ? true : false
              }
              onSelect={() => handleOnSelect(categoryID, item.id, item.name)}
            />
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
}

export default VoteByCategory;

const Wrapper = styled.section`
  background-color: #f6a231;
  margin-bottom: 1rem;
`;
const HeaderWrapper = styled.div`
  padding: 0.5rem;
  background-color: #e6c635;
`;
const HeaderTitle = styled.p`
  margin: 0.5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem 2rem;
  row-gap: 1rem;
  column-gap: 4rem;
  flex-wrap: wrap;
`;
