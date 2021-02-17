import styled from "styled-components";
import { device } from "./devices";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 1px;

  background-color: #48b1c8;
`;

export const Hero = styled.div`
  transform: translateZ(-8px) scale(9);

  width: 100vw;
  height: 100vh;
  background-color: #48b1c8;

  margin: 0;
  padding: 5vh 10vw;

  @media ${device.tablet} {
    padding: 5vh 0;
  }
`;

export const BelowTheFold = styled.div`
  transform: translateZ(-1px) scale(2);

  width: 80vw;
  height: 400vh;
  background-color: #fff;

  border-radius: 20px 20px 0;

  margin-top: 150vh;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    width: 100vw;
  }
`;
