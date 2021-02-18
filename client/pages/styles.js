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
  flex-wrap: wrap;
  justify-content: space-around;
  width: 60vw;
  padding-top: 50px;
  
  @media ${device.tablet} {
    width: 100vw;
  }
  }
`;

export const ResourceButton = styled.button`
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #F4F3F3;
  width: 170px;
  height: 57px;
  border-radius: 18px;
  margin: 0.7rem;
  border: none;
  font-family: inherit;

  &:hover {
    box-shadow: 3px 3px 6px 1px grey;
  }
  &:active {
    box-shadow: 1px 1px 2px 1px grey;
  }
  &:focus {
    outline: none;
  }
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

  }
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
}
`;



export const ModalSquare = styled.div`
  width: 70vw;
  height: 80vh;
  background-color: white;
  z-index: 1;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: slide-in;
  animation-duration: 0.5s;

  @keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

//   @keyframes slide-in {
//     from {
//       transform: translateY(-100vh);
//     }
//     to {
//       transform: translateY(0);
//     }
//   }
}
`;

export const ModalHeader = styled.div`


}
`;

export const ModalContent = styled.div`


}
`;