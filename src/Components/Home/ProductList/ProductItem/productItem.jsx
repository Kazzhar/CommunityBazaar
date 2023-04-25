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

  const {addToCart, cartItems} = useContext(ShopContext)
  
  const cartItemAmount = cartItems[prod_id]

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
          Add to Cart ({cartItemAmount > 0 && <>{cartItemAmount}</>})
        </button>
      </footer>
    </div>
  );
};

export default ProductItem;
