import React from "react";
import { CaurselHeading , Line, HeadingDiv} from "./Heading.style";

const Heading = (props) => {
  return (
    <HeadingDiv>
      <Line marginright={true} />
      <CaurselHeading>{props.heading}</CaurselHeading>
      <Line marginleft={true} />
    </HeadingDiv>
  );
};

export default Heading;
