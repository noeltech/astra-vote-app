import React from "react";
import styled from "styled-components";

function CanditateCard({ name, imgSrc, id, isSelected, onSelect }) {
  return (
    <Wrapper>
      <CandidateName>{name}</CandidateName>
      <CandidateImage src={imgSrc}></CandidateImage>
      <VoteButton isSelected={isSelected} onClick={() => onSelect()}>
        Vote
      </VoteButton>
    </Wrapper>
  );
}

export default CanditateCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 180px;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: #fed6ae;
  border-radius: 1rem;
  border: 1px solid gray;
`;

const CandidateName = styled.span``;

const CandidateImage = styled.img`
  width: 100%;
  height: 180px;
`;

const VoteButton = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? "#E6C635" : "#B8BCB5")};
  color: white;
  padding: 0.4rem;
  cursor: pointer;
`;
