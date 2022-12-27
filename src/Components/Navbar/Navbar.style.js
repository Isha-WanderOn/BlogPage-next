import styled from "styled-components";
import Link from "next/link";

const NavbarContainer = styled.div`
  width: 100%;
  position: sticky;
  z-index: 1;
  height: ${(props) => (props.extendNavbar ? "100vh" : "12.86vh")};
  background-color: #034a41;
  /* background-color: rgba(0,0,0,0.35); */
  /* opacity: 0.5; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Mobile*/
  @media (min-width: 320px) and (max-width: 480px) {
    background-color:  #045D51;
  }
  
`;
const Navbarlogo = styled.div`
  width: 7.03vw;
  position: relative;
  height: 13.04vh;
  display: flex;
  float: left;
  margin-left: 4.8vw;
  @media (min-width: 320px) and (max-width: 480px) {
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 8vh;
    width: 16vw;
    border: 1px solid #f2f2f2;
    border-radius: 50%;
  }
  
`;
const NavbarLinkContainer = styled.div`
  /* flex: 50%; */
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  /* margin-left: 40%; */
`;
const NavbarLink = styled(Link)`
  color: #ffffff;
  font-size: 2rem;
  text-decoration: none;
  margin: 1.9vw;
  @media (max-width: 480px) {
    display: none;
  }
  @media (min-width: 481px) and (max-width: 780px) {
    font-size: 1.5rem;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 12.86vh;
  display: flex;
  padding-right: 1rem;
`;
const NavbarLinkExtended = styled(Link)`
  color: #ffffff;
  font-size: 5vw;
  text-decoration: none;
  margin: 10px;
`;

const OpenLinksButton = styled.button`
  /* width: 1.75vw; */
  background: none;
  border: none;
  color: #d4dddb;
  font-size: 8vw;
  /* margin-left: 50%; */
  cursor: pointer;
  @media (min-width: 480px) {
    display: none;
  }
`;
const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 480px) {
    display: none;
  }
`;

export {
  Navbarlogo,
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
  LeftContainer,
  NavbarExtendedContainer,
  OpenLinksButton,
  NavbarInnerContainer,
  NavbarLinkExtended,
};
