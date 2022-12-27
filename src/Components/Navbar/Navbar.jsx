import React, { useState } from "react";
import {
  Navbarlogo,
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
  LeftContainer,
  NavbarExtendedContainer,
  OpenLinksButton,
  NavbarInnerContainer,
  NavbarLinkExtended,
} from "./Navbar.style";
import logo from "../../assets/images/logo.png";
import Image from "next/image";

/* Navbar Component */
const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Navbarlogo>
            <Image src={logo} alt="logo" fill/>
          </Navbarlogo>
        </LeftContainer>
        <NavbarLinkContainer>
          <NavbarLink href="/DiwaleSale">Diwale Sale</NavbarLink>
          <NavbarLink href="/InternationalTrips">
            International Trips
          </NavbarLink>
          <NavbarLink href="/Blogs">Blogs</NavbarLink>
          <NavbarLink href="/About"> About Us</NavbarLink>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
        </NavbarLinkContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended href="/DiwaleSale">
            Diwale Sale
          </NavbarLinkExtended>
          <NavbarLinkExtended href="/InternationalTrips">
            International Trips
          </NavbarLinkExtended>
          <NavbarLinkExtended href="/Blogs"> Blogs</NavbarLinkExtended>
          <NavbarLinkExtended href="/About"> About Us</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
