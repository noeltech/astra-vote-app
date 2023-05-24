import React from "react";
import styled from "styled-components";

function Popup({ onClose, text, isOpen }) {
  const handleOnClose = () => {
    onClose && onClose();
  };

  return (
    <>
      {isOpen ? (
        <Wrapper>
          <Content>
            <h3>{text}</h3>
            <ButtonWrapper>
              <CloseButton onClick={handleOnClose}>Close</CloseButton>
            </ButtonWrapper>
          </Content>
        </Wrapper>
      ) : null}
    </>
  );
}

export default Popup;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  left: 20%;
  right: 20%;
  bottom: 40%;
  top: 30%;
  text-align: center;
  margin: auto;
  border-radius: 15px;
  border-color: black;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 4rem 2rem;
`;

const CloseButton = styled.button`
  text-align: center;
  margin: auto;
  position: absolute;
  bottom: 2rem;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #e6c635;
  cursor: pointer;
`;

const ButtonWrapper = styled.div``;
