import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import { supabase } from "../../../../config/supabaseClient";
import "./communityItem.css";
import { useEffect, useState } from "react";
import { useUserId } from "../../../../Context/UserIdContext";
import { v4 as uuidv4 } from "uuid"; // Import the UUID package
import { useNavigate } from "react-router-dom";
import { usePhoneNumber } from "../../../../Context/PhoneNumberContext";
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
  const navigate=useNavigate();
  const [authorName, setAuthorName] = useState("");
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

  useEffect(() => {
    fetchAuthorName();
    console.log(comm_id)
  }, []);

  return (
    <div className="blogItem-wrap-1">
      <h3 className="h3-wala">{name}</h3>
      <h5 className="location">{location}</h5>

      <footer>
        <div className="blogItem-author-1">
          <div>
            <h6>{authorName}</h6>
            <p>{created_at.slice(0, 10)}</p>
          </div>
        </div>
        <button className="join-button" onClick={()=>navigate(`/home/${comm_id}`)}>
          View
        </button>
      </footer>
    </div>
  );
};

export default BlogItem;
