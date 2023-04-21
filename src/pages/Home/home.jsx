import React,{useState} from "react";
import EmptyList from "../../Components/common/EmptyList";
import BlogList from "../../Components/Home/BlogList";
import Header from "../../Components/Home/Header";
import SearchBar from "../../Components/Home/SearchBar";
import { blogList } from "../../config/data";

export const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };
  return (
    <React.Fragment>
      <div>
        {/* Page Header */}
        <Header />
        {/* Search Bar */}
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />

        {/* Blog List & Empty View */}
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      </div>
    </React.Fragment>
  );
};
