import Allcategories from "../src/Components/AllCategoriesSection/Allcategories";
import Header from "../src/Components/Header/Header";
import Navbar from "../src/Components/Navbar/Navbar";
import Context from "../src/context/Blogs";
import "../styles/globals.css";
import { TopMarginer } from "./FrontPage/FrontPage.style";

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Navbar />
      {/* <TopMarginer> */}
        <Header />
      {/* </TopMarginer> */}
      <Allcategories />
      <Component {...pageProps} />
    </Context>
  );
}
