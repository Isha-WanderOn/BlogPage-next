import { useEffect, useState, createContext } from "react";
import axios from "axios";

const BlogContext = createContext();

/* Function for Fetchinng data from the Api */
const Context = (props) => {
  const [Blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Function for sorting blogs according to date
  const sortedBlogs = Blogs.sort((a, b) => new Date(b) - new Date(a)).slice(0, 20);

  useEffect(() => {
    async function myFetch() {
      const response = await axios.get(
        "https://api.npoint.io/f89acb9ee900ca95b8dc"
      );
      setBlogs(response.data);
      setLoading(false);
    }
    myFetch();
  }, []);

  return (
    <BlogContext.Provider value={{ Blogs, loading, sortedBlogs }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default Context;
export { BlogContext };
