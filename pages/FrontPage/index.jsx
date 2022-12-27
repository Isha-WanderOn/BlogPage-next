import {React, useContext} from "react";
import Allcategories from "../../src/Components/AllCategoriesSection/Allcategories";
import SingleCarousel from "../../src/Components/Carousel/SingleCarousel";
import Footer from "../../src/Components/Footer/Footer";
import Header from "../../src/Components/Header/Header";
import Heading from "../../src/Components/Headings/Heading";
import Testimonial from "../../src/Components/Testimonial/Testimonial";
import SplitCarousel from "../../src/Components/SplitCarousel/SplitCarousel";
import { Marginer } from "./FrontPage.style";
import About from "../../src/Components/About/About";
import { BlogContext } from "../../src/context/Blogs";
import LoadingComponent from "../../src/Components/Loading/LoadingComponent";
import LoadMore from "../../src/Components/LoadMore/LoadMore";

const FrontPage = () => {
  const {loading} = useContext(BlogContext);
  return (
    <div>
      {loading ? <LoadingComponent />:
      <>
      <Heading heading="Featured" />
      <SingleCarousel />
      <Marginer>
        <SplitCarousel heading="Latest" />
        <SplitCarousel heading="Trending" />
        <SplitCarousel heading="Backpacking Trips" />
        <SplitCarousel heading="Honeymoon" />
      <LoadMore />
      </Marginer>
      <Testimonial />
      <About />
      </>
    }
      <Footer />
    </div>
  );
};

export default FrontPage;
