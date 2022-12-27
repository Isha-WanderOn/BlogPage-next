import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../../context/Blogs";
import { LoadButton, Row5 } from "./LoadMore.style";
import Category from "../Category/Category";

const LoadMore = () => {
  const { Blogs } = useContext(BlogContext);
  const [category, setCategory] = useState([]);
  const backgroundColor = "#0a9e88";
  const [currentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(1);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = category.slice(firstPostIndex, lastPostIndex);
  let cat = [];
  function getAllCategory() {
    let i = 0;
    for (let e of Blogs) {
      if (e.categories[i] != null) {
        cat.push({
          id: e.categories[i].id,
          category: e.categories[i].slug,
          name: e.categories[i].name,
        });
        i++;
      } else {
        i = 0;
      }
    }
    cat = [...new Map(cat.map((item) => [item["name"], item])).values()]; // unique values in catgories
    return setCategory(cat);
  }

  const increment = () => {
    setPostPerPage(postsPerPage + 3);
  };
  
  // eslint-disable-next-line
  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <>
      {currentPosts.map((e) => {
        return (
          <Category key={e.id} categoryName={e.name} category={e.category} />
        );
      })}
      <Row5>
        <LoadButton onClick={increment} primary={backgroundColor}>
          Load More
        </LoadButton>
      </Row5>
    </>
  );
};

export default LoadMore;
