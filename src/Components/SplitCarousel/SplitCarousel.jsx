import { useContext } from "react";
import Heading from "../Headings/Heading";
import Carousel from "react-multi-carousel";
import { BlogContext } from "../../context/Blogs";
// import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  CarouselImageDiv,
  P,
  H2,
  Description,
  AllTags,
  Tags,
  Row,
  DateTag,
  View,
} from "./SplitCarousel.style";
import { CategoryButton } from "../AllCategoriesSection/Allcategories.style";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 480 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const SplitCarousel = (props) => {
  const { Blogs, sortedBlogs } = useContext(BlogContext);

  return (
    <>
      <Heading heading={props.heading} />
      {props.heading === "Latest" ? (
        <Carousel
          itemClass="splicarousel-item"
          partialVisible={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="splitcarousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          {sortedBlogs.map(
            (blogs, index) =>
              index < 10 && (
                <>
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
                        <i className="fa fa-share"></i>
                      </P>
                    </Row>
                    <H2>{blogs.title}</H2>
                    <Description>{blogs.meta.description}</Description>
                    <AllTags>
                      {Blogs[0].tags.slice(0, 2).map((tags) => {
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
                </>
              )
          )}
        </Carousel>
      ) : (
        <Carousel
          itemClass="splicarousel-item"
          partialVisible={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="splitcarousel-container"
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          {Blogs.slice(10, 15).map(
            (blogs, index) =>
              index < 10 && (
                <>
                  <Container key={blogs.id}>
                    <CarouselImageDiv>
                      <Image
                        alt={blogs.featuredImage.altText}
                        src={blogs.featuredImage.link}
                        fill
                      />
                    </CarouselImageDiv>
                    <Row>
                      <P>Places</P>
                      <P>
                        <i className="fa fa-share"></i>
                      </P>
                    </Row>
                    <H2>{blogs.title}</H2>
                    <Description>{blogs.meta.description}</Description>
                    <AllTags>
                      {Blogs[0].tags.slice(0, 2).map((tags) => {
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
                </>
              )
          )}
        </Carousel>
      )}
      <div style={{ display: "block", textAlign: "right" }}>
        <Link href={`/SeeMorePage`}>
          <CategoryButton margin>See More</CategoryButton>
        </Link>
      </div>
    </>
  );
};
export default SplitCarousel;
