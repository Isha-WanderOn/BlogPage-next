import React from "react";
import {
  Heading,
  TopHeading,
  TopContainer,
  TopBackGroundImage,
  TopContainerImage,
  TopHeadingContainer,
} from "./Header.style";
import imageURL from "../../assets/images/topContainer.png";
import topImageURL from "../../assets/images/image1.png";
import SearchBar from "../SearchBar/SearchBar";
import Image from "next/image";
const Header = () => {
  return (
    <TopContainer>
      <TopBackGroundImage>
        <Image src={imageURL} alt="topimage" fill />
      </TopBackGroundImage>
      <Heading>Blogs</Heading>
      <TopContainerImage>
        <Image src={topImageURL} alt="topimage2" fill />
      </TopContainerImage>
      <TopHeadingContainer>
        <TopHeading>
          Let’s Take a look as to what the coolest travel
          <br /> community says about the upcoming travel trends!
        </TopHeading>
      </TopHeadingContainer>
      <SearchBar />
    </TopContainer>
  );
};

export default Header;
