import styled from "styled-components";

export const AllCategoriesDiv = styled.div`
  width: 100%;
  background: rgba(3, 94, 80, 0.05);
  margin-top: 3rem;
  margin-bottom: 3rem;
  height: 11.8vh;
  padding: 0.25em 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    overflow-x: scroll;
    justify-content: left;
    height: 10vh;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    overflow-x: scroll;
    justify-content: left;
  }
`;

export const CategoryButton = styled.button`
  background: ${(props) => (props.more ? "#0A9E88" : "white")};
  color: ${(props) => (props.more ? "white" : "#0A9E88")};
  font-size: 2rem;
  height: 7vh;
  padding: 0.25em 1em;
  cursor: pointer;
  margin-right: ${(props) => (props.margin ? "0" : "2%")};
  border: 0.1rem solid #045d51;
  border-radius: 0.5rem;
  &:hover {
    background: #034a41;
    color: white;
  }
  @media (max-width: 480px){
    height: 3vh;
    font-size: 1rem;
  }
  
`;
