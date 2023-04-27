import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./productItem.css";
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaRupeeSign } from 'react-icons/fa';
import {AiTwotonePhone } from 'react-icons/ai';
import {IoMdContact } from 'react-icons/io';

// import CommentForm from "../Comments/comments";
import { ShopContext } from "../../../../Context/ShopContext";
import { supabase } from "../../../../config/supabaseClient";
import { useEffect } from "react";
const ProductItem = ({
    product: {
      prod_id,
      name,
      created_at,
      quantity,
      description,
      price,
      expiry,
      prod_images,
      categories,
      comments,
      votes,
      user_id,
    },
}, comm_id) => {

  const {addToCart, cartItems} = useContext(ShopContext)
  
  const cartItemAmount = cartItems[prod_id]
  // console.log(cartItemAmount)

  const [vote, setVote] = useState(votes);
  const [userDetails, setUserDetails] = useState({ phone_number: "", user_name: "" });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", user_id)
          .single();

        if (error) {
          throw error;
        }

        setUserDetails(data);
      } catch (error) {
        console.log("Error fetching user details:", error.message);
      }
    };

    fetchUserDetails();
  }, [user_id]);


  return (
    <div className="blogItem-wrap">
    
      <Link className="blogItem-link" to={`/product/${prod_id}`}>

      <div className="name-price">
        <h3 className="product-name">{name}</h3>
        <p className="price"> <FaRupeeSign/> {price} </p>
      </div>
      
      {categories ? (
      <div className="categories">
        {categories.map((category, i)=>(
          <div className="category" key={i}>
            <Chip label={category} />
          </div>
      ))}
      </div>
      ) : <br/>}
        
        
        <img className="blogItem-cover" src={prod_images} alt="cover" />
      </Link>

      <footer className="product-footer">
        
          <div className="votes-container">
              <button className="upvote-container" onClick={()=>setVote(votes + 1)}>
                <FaArrowAltCircleUp className="upvote-icon" />
              </button>
              <p className="vote-count">{vote}</p>
              <button className="downvote-container" onClick={()=>setVote(votes - 1)}>
                  <FaArrowAltCircleDown className="downvote-icon" />
              </button>
          </div>
          
        {/* <CommentForm productId={prod_id}/> */}
        <button className="product-cart" onClick={()=>addToCart(prod_id)}>
          Add to Cart {cartItemAmount > 0 && <p>{cartItemAmount}</p>}
        </button>
        
      </footer>
      <div className="user-info">
        <p><IoMdContact className="icon"/> {userDetails.user_name}</p>
        <p><AiTwotonePhone className="icon"/>+{userDetails.phone_number}</p>
        </div>
    </div>
  );
};

export default ProductItem;
