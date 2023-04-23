import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./productItem.css";
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaRupeeSign } from 'react-icons/fa';
import CommentForm from "../Comments/comments";

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
    // description,
    // title,
    // createdAt,
    // authorName,
    // authorAvatar,
    // cover,
    // category,
    // id,
  },
}) => {
  return (
    <div className="blogItem-wrap">
    
      <Link className="blogItem-link" to={`/product/${prod_id}`}>

      <div className="name-price">
        <h3 class="product-name">{name}</h3>
        <p class="price"> <FaRupeeSign/> {price} </p>
      </div>
      
        
        {/* {console.log(categories.map((category)=>(<p>{category}</p>)))} */}
        {categories && (
        <div className="categories">
          {categories.map((category, i)=>(
            <div className="category" key={i}>
              <Chip label={category} />
            </div>
        ))}
        </div>
        )}
        
        {/*can add to product page*/}
        {/* <p class="quantity">
          Quantity: 
          <span class="quantity-value"> 
            <Chip label={quantity} />
          </span>
        </p> 
     
        <p class="description">{description}</p>
        */}

        
        {/* <h3>{name}</h3>

        <div className="price-quantity">
          <p className="price">
            Price: <Chip label={price} />
          </p>
          <p className="blogItem-quantity">Quantity: <Chip label={quantity} /></p>
        </div>

        <p className="blogItem-desc">{description}</p> */}

        <img className="blogItem-cover" src={prod_images} alt="cover" />

        
       
      </Link>

      <footer className="product-footer">
        {/* <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div> */}
        
          <div className="votes-container">
              <p className="upvote-container">
                <FaArrowAltCircleUp className="upvote-icon" />
              </p>
              <p className="vote-count">10</p>
              <p className="downvote-container">
                  <FaArrowAltCircleDown className="downvote-icon" />
              </p>
          </div>
          
          {/* <button className="comment-count" >Comments</button> */}
          
        <CommentForm className="comment" productId={prod_id}/>
        {/* <Link className="blogItem-link" to={`/blog/${prod_id}`}>
          ➝
        </Link> */}
      </footer>
    </div>
  );
};

export default ProductItem;
