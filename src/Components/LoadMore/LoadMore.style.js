import styled from "styled-components";

export const Row5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadButton = styled.button`
  background-color: #033d35;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  margin-top: 10rem;
  padding: 0.8em 6em;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 6rem;
    padding: 2% 20%;
    background-color: #045d51;
  }
`;
