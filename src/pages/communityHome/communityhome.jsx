import React, { useState } from "react";
import EmptyList from "../../Components/common/EmptyList";
import BlogList from "../../Components/communityHome/BlogList";
import Header from "../../Components/communityHome/Header";
import SearchBar from "../../Components/communityHome/SearchBar";
import { blogList } from "../../config/data";
import "./styles.css";
export const CommunityHome = () => {
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
        <div className="header-wrapper">
          <Header />
        </div>
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
