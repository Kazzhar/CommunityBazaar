import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./productItem.css";
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaRupeeSign } from 'react-icons/fa';
import CommentForm from "../Comments/comments";
import { ShopContext } from "../../../../Context/ShopContext";
import { supabase } from "../../../../config/supabaseClient";

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
    },
}) => {

// const bigInt = require('big-integer')

// const id = prod_id;

// // Remove hyphens from the UUID
// const hexString = id.replace(/-/g, '');

// // Convert the hexadecimal string to a BigInt
// const bigIntValue = bigInt(`0x${hexString}`);

// console.log(bigIntValue);


  const {addToCart, cartItems} = useContext(ShopContext)
  // console.log(cartItems)
  
  const cartItemAmount = cartItems[prod_id]
  // console.log(cartItemAmount)

  const [vote, setVote] = useState(votes);

  // // Update votes in the database when upvote or downvote button is clicked
  // const handleVote = async (increment) => {
  //   try {
  //     const { data, error } = await supabase
  //       .from('products')
  //       .update({ votes: vote + increment })
  //       .match({ prod_id });

  //     if (error) {
  //       throw error;
  //     }

  //     setVote(data[0].votes);
  //   } catch (error) {
  //     console.log('Error updating votes:', error.message);
  //   }
  // };


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
          Add to Cart ({cartItemAmount > 0 && <>{cartItemAmount}</>})
        </button>

        

        {/* <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div> */}
        {/* <h3>{name}</h3>

        <div className="price-quantity">
          <p className="price">
            Price: <Chip label={price} />
          </p>
          <p className="blogItem-quantity">Quantity: <Chip label={quantity} /></p>
        </div>

        <p className="blogItem-desc">{description}</p> */}
        {/*can add to product page*/}
        {/* <p class="quantity">
          Quantity: 
          <span class="quantity-value"> 
            <Chip label={quantity} />
          </span>
        </p> 
     
        <p class="description">{description}</p>
        */}


        {/* <button className="comment-count" >Comments</button> */}
        {/* <Link className="blogItem-link" to={`/blog/${prod_id}`}>
          ➝
        </Link> */}
      </footer>
    </div>
  );
};

export default ProductItem;
