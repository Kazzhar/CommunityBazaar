import React, { useState } from "react";

import EmptyList from "../../Components/common/EmptyList";

import BlogList from "../../Components/Community/CommunityList/communityList";

import Header from "../../Components/Community/Header";

import { supabase } from "../../config/supabaseClient";

import { useEffect } from "react";

import "./communityHome.css";

export const CommunityHome = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      const { data: communities, error } = await supabase

        .from("communities")

        .select("*");

      if (error) {
        console.log(error);
      } else {
        console.log(communities);

        setCommunities(communities);
      }
    };

    console.log(communities);

    fetchCommunities();
  }, []);

  return (
    <React.Fragment>
      <div className="community-home-1">
        {/* Page Header */}

        <div className="header-wrapper-1">
          <Header />
        </div>

        {/* Blog List & Empty View */}

        {console.log(communities)}

        {!communities.length ? (
          <EmptyList className="empty-list-1" />
        ) : (
          <BlogList className="blog-list-1" blogs={communities} />
        )}
      </div>
    </React.Fragment>
  );
};
