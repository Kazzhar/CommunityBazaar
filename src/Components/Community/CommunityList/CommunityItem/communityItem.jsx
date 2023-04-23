import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import { supabase } from "../../../../config/supabaseClient";
import "./communityItem.css";
import { useEffect, useState } from "react";
const BlogItem = ({
  blog: {
    comm_id,

    created_at,

    location,

    name,

    user_id,
  },
}) => {
  const [authorName, setAuthorName] = useState("");

  const fetchAuthorName = async () => {
    try {
      const { data, error } = await supabase

        .from("users")

        .select("user_name")

        .eq("id", user_id)

        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setAuthorName(data.user_name);
      }
    } catch (error) {
      console.error("Error fetching author name:", error.message);
    }
  };

  useEffect(() => {
    fetchAuthorName();
  }, []);

  return (
    <div className="blogItem-wrap-1">
      {/* <Link className="blogItem-link" to={`/blog/${id}`}> */}
      {/* <img className="blogItem-cover" src={cover} alt="cover" /> */}
      {/* <Chip label={category} /> */}
      <h3 className="h3-wala">{name}</h3>
      <h5 className="location">{location}</h5>
      {/* <p className="blogItem-desc">{description}</p> */}
      {/* </Link> */}

      <footer>
        <div className="blogItem-author-1">
          {/* <img src={authorAvatar} alt="avatar" /> */}
          {/* insert author icon here */}
          <div>
            <h6>{authorName}</h6>
            <p>{created_at.slice(0, 10)}</p>
          </div>
        </div>
        {/* <Link className="blogItem-link" to={`/blog/${id}`}>
          ➝
        </Link> */}
        <button className="join-button">Join</button>
      </footer>
    </div>
  );
};

export default BlogItem;
