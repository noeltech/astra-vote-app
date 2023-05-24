import React from "react";
import Header from "./component/Header/Header";
import Popup from "./component/Popup/Popup";
import VoteByCategory from "./component/VoteByCategory/VoteByCategory";
import styled from "styled-components";
import useVote from "./hooks/useVote";

import { nominees } from "./data/nominees";

function App() {
  const categoryCount = nominees.length;
  const { submitVote, onVote, submitMessage, clearSubmitMessage } = useVote({
    categoryCount,
  });

  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        <VoteByCategory dataList={nominees[0]} onSelect={onVote} />
        <VoteByCategory dataList={nominees[1]} onSelect={onVote} />
        <SubmitVoteButton onClick={submitVote}>
          Submit Your Votes
        </SubmitVoteButton>
      </ContentWrapper>
      <Popup
        isOpen={submitMessage ? true : false}
        text={submitMessage}
        onClose={clearSubmitMessage}
      />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
  min-width: 480px;
`;

const ContentWrapper = styled.main`
  background-color: #00595c;
  padding-top: 0.7rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1rem;
`;

const SubmitVoteButton = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  background-color: #e6c635;
  cursor: pointer;
`;
