import styled from "styled-components";
import devices from "../components/devices";

export const H3 = styled.h3`
  margin: 0;
`;

export const Main = styled.main`
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 1px;

  background-color: #48b1c8;

  color: #fff;
`;

export const Hero = styled.div`
  transform: translateZ(-8px) scale(9);

  width: 100vw;
  height: 100vh;
  background-color: #48b1c8;

  margin: 0;
  padding: 5vh 20vw;

  @media ${devices.tablet} {
    padding: 5vh 0;
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const BelowTheFold = styled.div`
  transform: translateZ(-1px) scale(2);

  width: 60vw;
  height: 400vh;
  background-color: #fff;

  border-radius: 20px 20px 0;

  margin-top: 200vh;
  margin-left: auto;
  margin-right: auto;

  padding: 1rem;

  @media ${devices.tablet} {
    width: 100vw;
  }
`;

export default Main;
