import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 1px;
  perspective-origin: 0 0;
  transform-style: preserve-3d;

  background-color: #48b1c8;
`;

export const Hero = styled.div`
  transform-origin: 0 0;
  transform: translateZ(-0.4px) scale(1.4);

  width: 60vw;
  height: 100vh;
  background-color: #48b1c8;
  margin-left: auto;
`;

export const BelowTheFold = styled.div`
  transform-origin: 0 0;
  transform: translateZ(-1px) scale(2);

  width: 60vw;
  height: 400vh;
  background-color: #fff;
  margin-left: auto;

  border-radius: 20px 20px 0;
`;
