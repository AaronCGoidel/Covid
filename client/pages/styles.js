import styled from "styled-components";
import { device } from "./devices";

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

  @media ${device.tablet} {
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

  margin-top: 150vh;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    width: 100vw;
  }
`;

export const ResourceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60vw;
  padding-top: 50px;
  
  @media ${device.tablet} {
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 70px 70px;
    justify-items: center;
  }
  }
`;

export const ResourceButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #F4F3F3;
  width: 150px;
  height: 57px;
  border-radius: 25%;

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
  }
`;