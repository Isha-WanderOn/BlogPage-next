import React from "react";
import { useContext } from "react";
import Carousel from "react-multi-carousel";
import { BlogContext } from "../../context/Blogs";
import "react-multi-carousel/lib/styles.css";
import {
  Container,
  CarouselImageDiv,
  P,
  H2,
  Description,
  AllTags,
  Tags,
  DateTag,
  View,
  Row,
} from "./SingleCarousel.style";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 1,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const SingleCarousel = () => {
  const { Blogs } = useContext(BlogContext);
  console.log(Blogs);
  let randomIndex = Math.floor(Math.random() * Blogs.length);
  return (
    <>
      <Carousel
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 100ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        renderButtonGroupOutside={true}
      >
        {Blogs.slice(randomIndex, randomIndex + 10).map(
          (blogs, index) =>
            index < 10 && (
              <Container key={blogs.id}>
                <CarouselImageDiv>
                  <Image
                    alt={blogs.featuredImage.altText}
                    src={blogs.featuredImage.link}
                    fill
                    style={ {borderRadius: '4px'}}
                  />
                </CarouselImageDiv>
                <Row>
                  <P>Places</P>
                  <P>
                    {/* <i className="fa fa-share-nodes"></i> */}
                    <i className="fa fa-share"></i>
                  </P>
                </Row>
                <H2>{blogs.title}</H2>
                <Description>
                  {blogs.meta.description} It’s time to turn the fun quotient up
                  a notch for your New Year celebration in India this year! Dive
                  into a sea of enthralling experiences and taste new adventures
                  amid surreal landscapes as you wait for a new year, a new
                  beginning to unfurl! We bring you some super exciting
                  destinations......
                  <span style={{ color: "black", fontWeight: 600 }}>
                    Read More
                  </span>
                </Description>
                <AllTags>
                  {Blogs[0].tags.slice(0, 3).map((tags) => {
                    // eslint-disable-next-line react/jsx-key
                    return <Tags>{tags.name}</Tags>;
                  })}
                </AllTags>
                <Row>
                  <DateTag>{new Date(blogs.date).toDateString()}</DateTag>
                  <View>
                    <i className="fa fa-eye"></i> 10K viewers
                  </View>
                </Row>
              </Container>
            )
        )}
      </Carousel>
    </>
  );
};

export default SingleCarousel;
