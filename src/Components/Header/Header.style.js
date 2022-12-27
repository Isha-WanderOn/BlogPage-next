import styled from "styled-components";

export const TopContainer = styled.div`
  width: 100%;
  position: relative;
  /* margin-top: 12.87vh; */
`;
export const TopBackGroundImage = styled.div`
  width: 100%;
  height: 50vw;
`;
export const Heading = styled.span`
  position: absolute;
  left: 45.8vw;
  color: #ffffff;
  font-size: 5rem;
  font-family: "Comforter Brush", cursive;
  font-weight: 400;
  font-style: normal;
  z-index: 1;
  top: 5.44vh;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 3rem;
    top: 0;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 4rem;
    top: 3vh;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 4rem;
    top: 3vh;
  }
`;

export const TopContainerImage = styled.div`
  width: 78.03vw;
  position: absolute;
  height: 27.6vw;
  top: 20.77vh;
  left: 11vw;
  box-shadow: 4px 4px 42px 1px rgba(4, 93, 81, 0.19);
  border-radius: 4px;
  @media (min-width: 320px) and (max-width: 480px) {
    top: 8vh;
    width: 96%;
    left: 2vw;
    height: 108px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    top: 16vh;
    width: 90%;
    left: 5vw;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    top: 18vh;
    width: 90%;
    left: 5vw;
    
  }
`;

export const TopHeadingContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 39.5vh;
  text-align: center;
  @media (min-width: 320px) and (max-width: 480px) {
    top: 12vh;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    top: 22vh;
    
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    top: 30vh;
  }
`;

export const TopHeading = styled.h1`
  font-weight: 600;
  color: #ffffff;
  font-size: 3.5rem;
  text-shadow: 1px 1px 7px rgba(0, 0, 0, 0.9);
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.2rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 2.5rem;
  }
`;
