import React from "react";
import { Box1, FootSection, Icon } from "./Footer.style";


const Footer = () => {
  return (
      <FootSection>
        <Box1>
          <Icon>
            <i className="fa fa-facebook" />
          </Icon>
          <Icon>
            <i className="fa fa-instagram" />
          </Icon>
          <Icon>
            <i className="fa fa-linkedin" />
          </Icon>
          <Icon>
            <i className="fa fa-youtube" />
          </Icon>
          <Icon>
            <i className="fa fa-pinterest" />
          </Icon>
        </Box1>

        <Box1>
          <p>
            <strong>ADDRESS</strong>
            <br /><br />
            <strong>WANDERON EXPERIENCES PVT LTD</strong>
            <br />
            3rd Floor, Building No-750, Phase V, Udyog Vihar, Sector-19,
            Gurugram, Haryana-122022
          </p>
        </Box1>
        <Box1 contact>
          <p>hello@wanderon.in</p>
          <p>+91-9870301533</p>
          <p>www.wanderon.in </p>
        </Box1>
      </FootSection>
  );
};

export default Footer;
