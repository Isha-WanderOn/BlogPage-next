import styled, { css } from "styled-components";

// export const CaurselHeading = styled.h1`
//   color: #045d51;
//   margin: 6.4rem auto;
//   max-width: 600px;
//   text-align: center;
//   font-size: 3rem;
//   position: relative;
//   margin-bottom: 2rem;
//   &:before {
//     content: "";
//     display: block;
//     width: 35%;
//     height: 2px;
//     background: black;
//     left: 0;
//     top: 50%;
//     position: absolute;
//   }
//   &:after {
//     content: "";
//     display: block;
//     width: 35%;
//     height: 2px;
//     background: black;
//     right: 0;
//     top: 50%;
//     position: absolute;
//   }
//   @media (max-width: 480px) {
//     font-size: 2rem;
//     &:before{
//       width: 17vw;
//       left: 10vw;
//     }
//     &:after{
//       width: 17vw;
//       right: 10vw;
//     }
//   }
// `;

export const CaurselHeading = styled.h1`
  font-size: 3rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Line = styled.div`
  display: inline-flex;
  height: 1.59px;
  ${(props) =>
    props.marginleft &&
    css`
      width: 300px;
      margin-left: 4%;
      margin-right: 4%;
    `}
  ${(props) =>
    props.marginright &&
    css`
      width: 300px;
      margin-right: 4%;
      margin-left: 6%;
    `}
background-color: #5D0410;
@media (max-width: 480px) {
  ${(props) =>
    props.marginleft &&
    css`
      width: 300px;
      margin-left: 4%;
      margin-right: 4%;
    `}
  ${(props) =>
    props.marginright &&
    css`
      width: 300px;
      margin-right: 4%;
      margin-left: 4%;
    `}
}
`;

export const HeadingDiv = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  & h1 {
    color: #045d51;
  }
`;
