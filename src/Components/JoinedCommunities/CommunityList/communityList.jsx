import React from "react";

import BlogItem from "./CommunityItem/communityItem";

import "./communityList.css";

const BlogList = ({ blogs, userId }) => {
  return (
    <div className="blogList-wrap-1">
      {blogs.map((blog) => (
        <BlogItem blog={blog} currUserId={userId} />
      ))}
    </div>
  );
};

export default BlogList;
