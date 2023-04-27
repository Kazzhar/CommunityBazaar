import React, { useEffect, useState } from "react";
import "./styles.css";
import logo from "../../../Assets/3(white).png";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { supabase } from "../../../config/supabaseClient";

const Header = ({ comm_id }) => {
  const [communityName, setCommunityName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCommunityName = async () => {
      const { data, error } = await supabase
        .from("communities")
        .select("name")
        .eq("comm_id", comm_id)
        .single();

      if (error) {
        console.error(error);
      } else {
        setCommunityName(data.name);
      }
    };

    fetchCommunityName();
  }, [comm_id]);

  return (
    <nav className="header-navbar">
      <a href="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </a>
      <span className="navbar-community-name">{communityName}</span>
      <div className="navbar-links">
        <button className="mycomm-button" onClick={() => navigate("/2d65d411-d402/my-communities")}>
          All Communities
        </button>
        <button
          onClick={() => navigate(`/create-post/${comm_id}`)}
          className="mycomm-button"
        >
          Create Post
        </button>
        <button
          onClick={() => navigate(`/cart/${comm_id}`)}
          className="go-to-cart"
        >
          {" "}
          <AiOutlineShoppingCart />
        </button>
      </div>
    </nav>
  );
};

export default Header;
