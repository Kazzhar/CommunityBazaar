import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { blogList } from "../../config/data";
import { supabase } from "../../config/supabaseClient"; 
import Chip from "../../Components/common/Chip";
import EmptyList from "../../Components/common/EmptyList";
import "./product.css";
import { Link } from "react-router-dom";
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaRupeeSign } from 'react-icons/fa';
import CommentForm from "../../Components/Home/ProductList/Comments/comments";
import Header from "../../Components/Home/Header";
// import ProductList from "../../Components/Home/ProductList/productList";

export const Product = () => {
  const { prod_id } = useParams();
  // const {comm_id} = useParams();
  console.log(prod_id)
  const [fetchError, setFetchError] = useState(null)
  const [products, setProducts] = useState(null)
  const [comments, setComments] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      const { data: product, error } = await supabase
        .from('products')
        .select('*')
        .eq('prod_id', prod_id)
        .single();
  
      if (error) {
        setFetchError("Can't fetch product");
        setProducts(null);
        console.log(error);
      } else if (product) {
        setProducts(product);
        console.log(product)
        setFetchError(null);
      } else {
        setFetchError("Product not found");
        setProducts(null);
      }
    };
  
    getProduct();
  }, [prod_id]);

  return (
    <React.Fragment>
    <div className="header-wrapper">
          <Header className="home-header"/>
        </div>
      {/* <Link className="blog-goBack" to="/home">
        <span> &#8592;</span>
        <span>Go Back</span>
      </Link> */}
      {products ? (
        <div className="products-wrap">
  <div className="blog-wrap">
    <div className="blog-image">
      <img src={products.prod_images} alt="cover" />

      {/* <div className="votes-container">
              <button className="upvote-container" onClick={()=>setVote(votes + 1)}>
                <FaArrowAltCircleUp className="upvote-icon" />
              </button>
              <p className="vote-count">{vote}</p>
              <button className="downvote-container" onClick={()=>setVote(votes - 1)}>
                  <FaArrowAltCircleDown className="downvote-icon" />
              </button>
          </div> */}
    </div>
    <div className="blog-details">
    <div className="price-name-1">
      <h1 className="product-name">{products.name}</h1>
      <p class="product-price">
        <FaRupeeSign /> {products.price}
      </p>
    </div>
      
      {products.categories && (
        <div className="product-category">
          {products.categories.map((category, i) => (
            <div className="category" key={i}>
              <Chip label={category} />
            </div>
          ))}
        </div>
      )}
      <p className="blog-quantity">Quantity: {products.quantity}</p>
      <p className="blog-desc">{products.description}</p>
      {products.expiry && (
        <p className="blog-expiry">Expires on: {products.expiry}</p>
      )}
      <p className="blog-date">Published on {products.created_at}</p>
    </div>
  </div>
  <div className="product-comment">
      <CommentForm productId={prod_id} />
    </div>
</div>
      ) : (
        <EmptyList />
      )}
    </React.Fragment>
  );
};

