import React, { useState } from "react";
import EmptyList from "../../Components/common/EmptyList";
import BlogList from "../../Components/Community/CommunityList/communityList";
import Header from "../../Components/Community/Header";
import { supabase } from "../../config/supabaseClient";
import { useEffect } from "react";
import { usePhoneNumber } from "../../Context/PhoneNumberContext";
import { useNavigate } from "react-router-dom";
import "./communityHome.css";

// export const CommunityHome = () => {
//   const [communities, setCommunities] = useState([]);
//   const {phoneNumber, setPhoneNumber} = usePhoneNumber();

export const CommunityHome = () => {
  const navigate = useNavigate();
  const [communities, setCommunities] = useState([]);
  const [userId, setUserId] = useState(null);
  const { phoneNumber, setPhoneNumber } = usePhoneNumber();
  useEffect(() => {
    console.log("the global number is, in all-communities: ", phoneNumber);

    const fetchUserId = async () => {
      const { data: users, error } = await supabase
        .from("users")
        .select("id")
        .eq("phone_number", phoneNumber)
        .single();

      if (error) {
        console.log(error);
      } else {
        console.log("User ID:", users.id);

        setUserId(users.id); // Set the user ID in the state
      }
    };

    fetchUserId();

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

  console.log("the global user id is now :", userId);

  return (
    <React.Fragment>
      <div className="community-home-1">
        {/* Page Header */}
        <div className="header-wrapper">
          <Header className="home-header" />
        </div>
      
        {/* Blog List & Empty View */}

        {console.log(communities)}

        {!communities.length ? (
          <EmptyList className="empty-list-1" />
        ) : (
          <BlogList
            className="blog-list-1"
            blogs={communities}
            userId={userId}
          />
        )}
      </div>
    </React.Fragment>
  );
};
