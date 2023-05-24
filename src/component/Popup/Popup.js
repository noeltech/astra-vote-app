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
            <CloseButton onClick={handleOnClose}>Close</CloseButton>
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
  left: 30%;
  right: 30%;
  bottom: 50%;
  top: 30%;
  text-align: center;
  margin: auto;
  border-radius: 15px;
  border-color: black;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CloseButton = styled.button`
  text-align: center;
  margin: auto;
  position: absolute;
  bottom: 2rem;
`;
