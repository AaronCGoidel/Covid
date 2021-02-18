import styled from "styled-components";
import { device } from "./devices";

export const ResourceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 100%;
  margin: 0;

  @media ${device.tablet} {
    width: 100vw;
  }
`;

export const ResourceButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f4f3f3;
  width: 160px;
  height: 60px;
  border-radius: 18px;
  margin: 0.3rem;
  border: none;
  font-family: inherit;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    transform: scale(1.05, 1.05);

    box-shadow: 0 0.8px 2.2px rgba(0, 0, 0, 0.031),
      0 1.3px 3.7px rgba(0, 0, 0, 0.044), 0 1.7px 5px rgba(0, 0, 0, 0.055),
      0 2px 6.5px rgba(0, 0, 0, 0.066), 0 2.4px 8.8px rgba(0, 0, 0, 0.079),
      0 4px 15px rgba(0, 0, 0, 0.11);

    cursor: pointer;
  }
  &:active {
    transform: scale(1.05, 1.05);
    box-shadow: 0 0.8px 2.2px rgba(0, 0, 0, 0.031),
      0 1.3px 3.7px rgba(0, 0, 0, 0.044), 0 1.7px 5px rgba(0, 0, 0, 0.055),
      0 2px 6.5px rgba(0, 0, 0, 0.066), 0 2.4px 8.8px rgba(0, 0, 0, 0.079),
      0 4px 15px rgba(0, 0, 0, 0.11);
  }
  &:focus {
    outline: none;
  }
`;

export const ResourceIcon = styled.div`
  padding-left: 10px;
  }
`;

export const ResourceText = styled.div`
  color: black;
  font-size: 1rem;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.25);
`;

export const ModalSquare = styled.div`
  width: 70vw;
  height: 80vh;
  background-color: white;
  z-index: 1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.3s;
  animation-name: slide-in;
  animation-duration: 0.3s;

  @media ${device.tablet} {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-in {
    from {
      transform: translateY(-100vh);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const ModalHeader = styled.div`
  padding-left: 5vw;
  padding-right: 5vw;
  text-align: center;
`;

export const ModalContent = styled.div`
  flex-grow: 1;
`;

export const ModalExit = styled.button`
  display: none;
  background-color: inherit;
  position: fixed;
  right: 20px;
  top: 20px;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
  @media ${device.tablet} {
    display: block;
  }
`;
