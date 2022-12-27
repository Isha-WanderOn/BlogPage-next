import styled from "styled-components";

export const CardContainer = styled.div`
  box-sizing: border-box !important;
  margin: 1vw auto;
  display: grid;
  grid-gap: 1rem;
  @media (max-width: 480px) {
    & {
      grid-template-columns: repeat(1, 100%);
    }
  }
  @media (min-width: 481px) and (max-width: 769px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 770px) {
    & {
      grid-template-columns: repeat(3, 33%);
    }
  }
`;

export const Card = styled.div`
  box-sizing: border-box !important;
  background-color: #ffffff;
  filter: drop-shadow(4px 4px 25px rgba(0, 0, 0, 0.15));
  color: white;
  height: auto;
  width: 100%;
  padding: 1rem;
`;

export const SeeMoreMarginer = styled.div`
  margin: 0 1vw 0 1vw;
`;
