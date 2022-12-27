// import React from "react";
// import { Box, BoxDesc, BoxTitle, List, Section2 } from "./About.css";

// const About = () => {
//   return (
//     <Section2>
//       <Box>
//         <List>
//           <BoxTitle>About Us</BoxTitle>
//           <BoxDesc>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non
//             quod accusamus necessitatibus molestias laboriosam nostrum,
//             blanditiis nesciunt adipisci, perferendis et ipsa autem labore
//             corrupti, quae voluptatibus nam? Sit facere consequatur neque
//             expedita architechref quibusdam at delectus sequi fugiat.
//           </BoxDesc>
//         </List>
//       </Box>
//       <hr />
//       <Box>
//         <List>
//           <BoxTitle>Weakend Trips</BoxTitle>
//           <BoxDesc>
//             <li>Bir Billing</li>
//             <li>Chopta Tungunath</li>
//           </BoxDesc>
//           <BoxTitle>Himalayan Escapades</BoxTitle>
//           <BoxDesc>
//             <li>Bir Billing</li>
//             <li>Chopta Tungunath</li>
//           </BoxDesc>
//         </List>
//       </Box>

//       <hr />
//       <Box>
//         <List>
//           <BoxTitle>Backpacking Trips</BoxTitle>
//           <BoxDesc>
//             <li>Himachal Backpacking</li>
//             <li>Spiti Valley Trips</li>
//           </BoxDesc>
//           <BoxTitle>Blogs</BoxTitle>
//           <BoxDesc>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//             Necessitatibus, ad.
//           </BoxDesc>
//         </List>
//       </Box>
//       <hr />
//       <Box>
//         <List>
//           <BoxTitle>Quick Links</BoxTitle>
//           <BoxDesc>
//             <li>Privacy Policy</li>
//             <li>Cancellation Policy</li>
//             <li>Terms & Conditions</li>
//             <li>Disclaimer</li>
//             <li>About Us</li>
//           </BoxDesc>
//         </List>
//       </Box>
//     </Section2>
//   );
// };

// export default About;
import React, { useState } from "react";
import Link  from "next/link";
import styled from "styled-components";

const FContainer = styled.div`
  width: 100%;
  background-color: #045d51;
  height: 60vh;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  @media (max-width: 700px) {
    display: block;
    height: 80%;
  }
`;
const Info = styled.div`
  width: ${(props) => (props.other ? "25%" : "30%")};
  height: 50vh;
  border-right: ${(props) => (props.last ? "none" : "1px solid white")};
  box-sizing: border-box;
  padding-left: 2%;
  padding-right: 2%;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  @media (max-width: 700px) {
    display: flex;
    width: 100%;
    border-right: none;
  }
`;
const H3 = styled.h3`
  color: white;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: white;
  font-size: 12px;
`;

const FooterLinks = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: lightgray;
  }
`;

const P = styled.p`
  color: white;
  font-size: 12px;
  line-height: 1;
`;
const Footer = () => {
  const [collapsedFooter] = useState(true);
 
  return (
    
    <>
      {collapsedFooter ? <FContainer>
        <Info>
          <H3>About Us</H3>
          <P>
            We at WanderOn are a modern travel community that provides end href
            end travel packages in India and abroad. We design the best travel
            itineraries that encourage group traveling for like-minded people.
            Our services include road trips, trekking expeditions, corporate
            trips, and cushrefmized hrefur packages. On our trips, we ensure
            hassle-free traveling, hrefp-notch accommodation and guided
            sightseeing that hrefo in a budget that won’t burn a hole in your
            pocket. Just give us your dates and be ready href experience traveling
            like never before.
          </P>
        </Info>
        <Info other>
          <H3>Weekend Trips</H3>
          <Ul>
            <li>
              <FooterLinks href="/Bir Billingy">Bir Billing </FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Chopta Tungnath">Chopta Tungnath </FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Kasol">Kasol </FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Kheerganga">Kheerganga </FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Tirthan Valley">Tirthan Valley </FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Manali Solang">Manali Solang</FooterLinks>
            </li>
          </Ul>
          <H3>Himalyan Escape</H3>
          <Ul>
            <li>
              <FooterLinks href="/kasol Manali">kasol Manali</FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Parvati Valley">Parvati Valley</FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Bir Kasol">Bir Kasol</FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Mcleod Bir Tirthan">
                Mcleod Bir Tirthan
              </FooterLinks>
            </li>
          </Ul>
        </Info>
        <Info other>
          <H3>Backpacking Trips</H3>
          <Ul>
            <li>
              <FooterLinks href="/Himachal Backpacking">
                Himachal Backpacking
              </FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Spiti Valley Trips">
                Spiti Valley Trips
              </FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Ladakh Trips">Ladakh Trips</FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Meghalaya Backpacking">
                Meghalaya Backpacking
              </FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Kashmir Backpacking">
                Kashmir Backpacking
              </FooterLinks>
            </li>
          </Ul>
          <H3>Blogs</H3>
          <P>
            Beautiful Places href Visit in Spring in India Workcations: The New
            Trend of Travel Breathtaking Monasteries of Ladakh Soul-Satisfying
            things href do in Spiti Valley Mesmerising Waterfalls of Meghalaya href
            Visit
          </P>
        </Info>
        <Info last other>
          <H3>Quick Links</H3>
          <Ul>
            <li>
              <FooterLinks href="/PrivacyPolicy">Privacy Policy</FooterLinks>
            </li>
            <li>
              <FooterLinks href="/CancellationPolicy">
                Cancellation Policy
              </FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Terms & Conditions">
                Terms & Conditions
              </FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Disclaimer">Disclaimer</FooterLinks>
            </li>
            <li>
              <FooterLinks href="/Disclaimer">About Us</FooterLinks>
            </li>
          </Ul>
        </Info>
      </FContainer>: <h1>hello</h1>}
    </>
  );
};

export default Footer;