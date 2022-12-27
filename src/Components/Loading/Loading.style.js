import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  color: #033d35;
  padding: 5rem;
  font-size: 5rem;
  @media (max-width: 480px) {
    font-size: 3rem;
  }
  @media (min-width: 481px) and (max-width: 780px) {
    font-size: 3rem;
  }
`;
