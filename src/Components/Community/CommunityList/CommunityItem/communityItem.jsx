import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import { supabase } from "../../../../config/supabaseClient";
import "./communityItem.css";
import { useEffect, useState } from "react";
import { useUserId } from "../../../../Context/UserIdContext";
import { v4 as uuidv4 } from "uuid"; // Import the UUID package
import { MdLocationPin } from "react-icons/md"
// import { randomUUID } from "crypto";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const BlogItem = ({
  blog: {
    comm_id,
    created_at,
    location,
    name,
    user_id,
  },
  currUserId,
}) => {
  const [authorName, setAuthorName] = useState("");
  // const {userId, setUserId} = useUserId();
  console.log("this is inside the indidual comm page, userId:", currUserId);
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

  const joinCommunity = async () => {
    try {
      const { data: existingData, error: existingError } = await supabase
        .from("comm_user")
        .select("*")
        .eq("comm_id", comm_id);

      if (existingError) {
        throw existingError;
      }

      let updatedUserIds = [];

      if (existingData && existingData.length > 0 && existingData[0].user_id) {
        // If there is an existing row with user_id, add the current user to the list
        updatedUserIds = [...existingData[0].user_id, currUserId];
      } else {
        // If there is no existing row with user_id, create a new list with the current user
        updatedUserIds = [currUserId];
      }

      const { data, error } =
        existingData && existingData.length > 0
          ? await supabase
              .from("comm_user")
              .update({ user_id: updatedUserIds })
              .eq("comm_id", comm_id)
          : await supabase
              .from("comm_user")
              .insert([{
                  comm_id: comm_id,
                  user_id: updatedUserIds,
                },
              ]);

      if (error) {
        throw error;
      }

      if (data) {
        console.log("User joined community successfully!");
        // setHasJoined(true);
        // console.log("hasJoined value after setting to true:", hasJoined); // Add this line
        // setForceUpdate((prev) => !prev);
      }

      //inserting into user_comm
      const randomId = crypto.randomUUID();

      // Insert data into user_comm table
      // Fetch the row from user_comm table where u_id matches currUserId

      const { data: userCommData, error: userCommError } = await supabase
        .from("user_comm")
        .select("*")
        .eq("u_id", currUserId);

      // .single();

      if (userCommError) {
        throw userCommError;
      }

      console.log("userCommData", userCommData);
      let found = false;
      for (const row of userCommData) {
        // Check if comm_id is already present in the c_id array

        if (row.c_id.includes(comm_id)) {
          // If comm_id is already present, show an alert message
          alert("You have already joined this community!");
          found = true;
          break;
        }
      }

      console.log("found", found);
      console.log("length of usercommdata", userCommData.length);
      if (!found && userCommData.length === 0) {
        // If there is no existing row with u_id, create a new row with the current user and comm_id

        const { data: insertData, error: insertError } = await supabase
          .from("user_comm")
          .insert([{
              id: randomId,
              u_id: currUserId,
              c_id: [comm_id],
            },
          ]);

        if (insertError) {
          throw insertError;
        }

        if (insertData) {
          console.log("Data inserted into user_comm table successfully!");
        }
      }

      if (!found && userCommData.length > 0) {
        // If comm_id is not present in any row, append it to the c_id array and update the first row
        // console.log("inside the correct funcction");
        // console.log(userCommData[0].c_id, "is the prev arr");
        // console.log(comm_id, "is the current comm id");
        const updatedCIdArray = [...userCommData[0].c_id, comm_id];
        // console.log("the updated cidarray is", updatedCIdArray);
        const { data: updateData, error: updateError } = await supabase
          .from("user_comm")
          .update({ c_id: updatedCIdArray })
          .eq("u_id", currUserId);

        if (updateError) {
          throw updateError;
        }

        if (updateData) {
          console.log("Data updated in user_comm table successfully!");
        }
      }

      // ... existing code ...
    } catch (error) {
      console.error("Error joining community:", error.message);
    }
  };

  useEffect(() => {
    fetchAuthorName();
  }, []);

  // useEffect(() => {
  //   fetchAuthorName();
  // }, []);

  // useEffect(() => {
  //   console.log("HASJOINED HASJOINED inside, the new useffect, hasJoined value changed:", hasJoined);
  // }, [hasJoined]);

  return (
    <div className="blogItem-wrap-1">
    
      <div className="left-element">
        <div className="community-title">
          <h3>{name}</h3>
          <p className="location"><MdLocationPin/> {location}</p>
        </div>

        <div className="blogItem-author-1">
            <h4>Admin: {authorName}</h4>
            <p>Created on: {created_at.slice(0, 10)}</p>  
        </div>
      </div>
        
      <div className="right-element">
        <button className="join-button" onClick={joinCommunity}>
          JOIN
        </button>
      </div>
      
    </div>
  );
};

export default BlogItem;
