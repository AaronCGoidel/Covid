import styled from "styled-components";
import devices from "./devices";

export const ResourceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 100%;
  margin: 0;

  @media ${devices.tablet} {
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
  font-size: 0.8rem;
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

  @media ${devices.tablet} {
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
  margin-top: 30px;
`;

export const ModalContent = styled.div`
  flex-grow: 1;
`;

export const ModalExit = styled.button`
  display: none;
  background-color: transparent;
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
  @media ${devices.tablet} {
    display: block;
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
}
`;
export const NewsSlider = styled.div`
  width: 350px;
  overflow: hidden;
}
;`;
export const NewsSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    width: 1.5rem;
    height: 1.5rem;
    background: #eee;
    text-decoration: none;
    text-align: center;
    border-radius: 50%;
    margin: 0.5rem 0.5rem 0.5rem 0;
    position: relative;
  }
  a:focus {
    background: gray;
  }
}
;`;

// SliderButtons

export const NewsArea = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
}
`;

export const NewsGroup = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 350px;
  height: 420px;
  margin-right: 50px;
  border-radius: 10px;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export const NewsArticleContainer = styled.a`
  display: flex;
  width: 340px;
  background-color: #F4F3F3;
  height: 130px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify content: center;
  margin: 10px;
}
`;
export const PreviewImage = styled.div`
img {
    height: 100px;
    width: 100px;
    border-radius: 18px;
    margin: 10px;
  }
}
`;

export const ArticleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
}
`;

export const ArticleTitle = styled.div`
  display: block;
  display: -webkit-box;
  max-width: 100%;
  margin: 5px auto;
  width: 200px;
  height: 90px;
  font-size: 1rem;
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;

export const ArticleSource = styled.div`
  display: block;
  display: -webkit-box;
  max-width: 100%;
  margin: 0 auto;
  width: 200px;
  font-size: 15px;
  // margin-bottom: 12px;
  line-height: 1;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;

export const StatisticContainer = styled.div` 
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items; center;
}
`;

export const StatisticCard = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 370px;
  height: 120px;
  margin: 20px;
  border-radius: 20px;
}
`;

export const StatisticImageContainer = styled.div`
  img {
    height: 100px;
    width: 100px;
  }
  margin: 20px;
}
`;
export const StatisticContent = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  flex-grow: 1;
  padding-right: 60px;
}
`;
export const StatisticPreamble = styled.div`
  display: flex;
  align-self: center;
  font-size: 20px;
}
`;
export const StatisticNumber = styled.div`
display: flex;
align-self: center;
font-size: 2.5rem;
}
`;
export const StatisticPostamble = styled.div`
  display: flex;
  align-self: center;
  color: grey;
}
`;
