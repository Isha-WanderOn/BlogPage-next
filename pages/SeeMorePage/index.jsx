import React, { useContext } from "react";
import { BlogContext } from "../../src/context/Blogs";
import { Card, CardContainer, SeeMoreMarginer } from "./SeeMorePage.style";
import {
  CarouselImageDiv,
  P,
  H2,
  Description,
  AllTags,
  Tags,
  Row,
  DateTag,
  View,
} from "../../src/Components/SplitCarousel/SplitCarousel.style";
import Image from "next/image";

const SeeMorePage = () => {
  const { Blogs } = useContext(BlogContext);
  return (
    <SeeMoreMarginer>
      <CardContainer>
        {Blogs.slice(10, 45).map(
          (blogs, index) =>
            index < 50 && (
              <>
                <Card key={blogs.id}>
                  <CarouselImageDiv>
                    <Image
                      alt={blogs.featuredImage.altText}
                      src={blogs.featuredImage.link}
                      fill
                    />
                  </CarouselImageDiv>
                  <Row>
                    <P card>Places</P>
                    <P card>
                      <i className="fa fa-share-nodes"></i>
                    </P>
                  </Row>
                  <H2 card>{blogs.title}</H2>
                  <Description card>{blogs.meta.description}</Description>
                  <AllTags>
                    {Blogs[0].tags.slice(0, 2).map((tags) => {
                      // eslint-disable-next-line react/jsx-key
                      return <Tags card>{tags.name}</Tags>;
                    })}
                  </AllTags>
                  <Row>
                    <DateTag card>
                      {new Date(blogs.date).toDateString()}
                    </DateTag>
                    <View card>
                      <i className="fa fa-eye"></i> 10K viewers
                    </View>
                  </Row>
                </Card>
              </>
            )
        )}
      </CardContainer>
      <hr
        style={{
          border: "1.5px solid rgba(17, 17, 17, 0.25)",
          background: "#11111140",
        }}
      />
    </SeeMoreMarginer>
  );
};

export default SeeMorePage;
