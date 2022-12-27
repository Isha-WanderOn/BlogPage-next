import styled, { css } from "styled-components";

export const FootSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  @media (max-width: 480px) {
    width: auto;
  }
`;
export const Box1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${(props)=> props.contact ? '1rem': '2rem'};
  margin-bottom: 2rem;
  @media (max-width: 480px) {
    font-size: ${(props)=> props.contact ? '1rem': '1.4rem'};
  }
`;
export const Icon = styled.p`
  font-size: 4rem;
  padding: 1rem;
  @media (max-width: 480px) {
    width: auto;
  }
`;
// ${(props) =>
//   props.contacts &&
//   css`
//     & p {
//       color: #383838;
//       font-weight: bold;
//     }
//   `}
// text-align: center;
// justify-content: center;
// @media (max-width: 480px) {
//   width: 100%;
//   ${(props) =>
//   props.contacts &&
//   css`
//     & p {
//       color: #383838;
//       font-weight: bold;
//       font-size: small;
//     }
//   `}
// }