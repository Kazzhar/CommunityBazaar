import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./productItem.css";
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaRupeeSign } from 'react-icons/fa';
import CommentForm from "../Comments/comments";
import { ShopContext } from "../../../../Context/ShopContext";

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
      comments
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

  return (
    <div className="blogItem-wrap">
    
      <Link className="blogItem-link" to={`/product/${prod_id}`}>

      <div className="name-price">
        <h3 className="product-name">{name}</h3>
        <p className="price"> <FaRupeeSign/> {price} </p>
      </div>
      
      {categories && (
      <div className="categories">
        {categories.map((category, i)=>(
          <div className="category" key={i}>
            <Chip label={category} />
          </div>
      ))}
      </div>
      )}
        
        
        <img className="blogItem-cover" src={prod_images} alt="cover" />
      </Link>

      <footer className="product-footer">
        
          <div className="votes-container">
              <p className="upvote-container">
                <FaArrowAltCircleUp className="upvote-icon" />
              </p>
              <p className="vote-count">10</p>
              <p className="downvote-container">
                  <FaArrowAltCircleDown className="downvote-icon" />
              </p>
          </div>
          
        {/* <CommentForm productId={prod_id}/> */}
        <button className="product-cart" onClick={()=>addToCart(prod_id)}>
          Add to Cart {cartItemAmount > 0 && <>{cartItemAmount}</>}
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
