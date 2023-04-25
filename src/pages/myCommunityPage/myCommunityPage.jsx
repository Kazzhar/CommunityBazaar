import React, { useState, useEffect } from "react";

import EmptyList from "../../Components/common/EmptyList";

import BlogList from "../../Components/Community copy/CommunityList/communityList";

import Header from "../../Components/Community copy/Header";

import { supabase } from "../../config/supabaseClient";

import { usePhoneNumber } from "../../Context/PhoneNumberContext";
import { useNavigate } from "react-router-dom";
import "./myCommunityPage.css";

export const MyCommunityPage = () => {
  const navigate = useNavigate();
  const [communities, setCommunities] = useState([]);

  const [userId, setUserId] = useState(null);

  const [userCommunities, setUserCommunities] = useState([]);

  const { phoneNumber, setPhoneNumber } = usePhoneNumber();

  useEffect(() => {
    console.log("the global number is ", phoneNumber);

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

    const fetchUserCommunities = async () => {
      const { data: userComm, error } = await supabase

        .from("user_comm")

        .select("c_id")

        .eq("u_id", userId)

        .single();

      if (error) {
        console.log(error);
      } else {
        console.log("User Communities:", userComm.c_id);

        setUserCommunities(userComm.c_id);
      }
    };

    const fetchCommunities = async () => {
      if (userCommunities.length > 0) {
        const { data: communities, error } = await supabase

          .from("communities")

          .select("*")

          .in("comm_id", userCommunities);

        if (error) {
          console.log(error);
        } else {
          console.log(communities);

          setCommunities(communities);
        }
      }
    };

    fetchUserId().then(() => {
      if (userId) {
        fetchUserCommunities().then(() => {
          fetchCommunities();
        });
      }
    });
  }, [userId, userCommunities]);

  console.log("the global user id is now :", userId);

  return (
    <React.Fragment>
      <div className="community-home-1">
        {/* Page Header */}

        <div className="header-wrapper-1">
          <Header />
          <button onClick={()=>navigate("/all-communities")}>go back to all communities</button>
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
