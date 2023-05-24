import React from "react";
import styled from "styled-components";

function Header() {
  const handleNewUser = () => {
    window.localStorage.removeItem("astra-votes");
  };

  return (
    <Wrapper>
      <HeaderTitle>Online Votes</HeaderTitle>
      <NewUserButton onClick={handleNewUser}>New Voter</NewUserButton>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  position: relative;
  box-sizing: border-box;
  padding: 1rem;
  background-color: #363636;
`;

const HeaderTitle = styled.h1`
  margin: 0.5rem;
  color: white;
  font-size: 4rem;
  font-weight: 500;
`;

const NewUserButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 1rem;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #e6c635;
  cursor: pointer;
`;
