import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.search ? "#045d51" : "white"};
  color: ${props => props.search ? "white" : "#045d51"};
  font-size: 2vw;
  width: 12.07vw;
  height: 10vh;
  border: 1px solid #045d51;
  padding: 0.25em 1em;
  border-radius: 0 5px 5px 0;
  z-index: 3;
  cursor: pointer;
  &:hover{
    background-color: #034a41;
  }
`;