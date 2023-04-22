import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { blogList } from "../../config/data";
import { supabase } from "../../config/supabaseClient"; 
import Chip from "../../Components/common/Chip";
import EmptyList from "../../Components/common/EmptyList";
import "./product.css";
import { Link } from "react-router-dom";
// import ProductList from "../../Components/Home/ProductList/productList";

export const Product = () => {
  const { prod_id } = useParams();
  console.log(prod_id)
  const [fetchError, setFetchError] = useState(null)
  const [products, setProducts] = useState(null)

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
      <Link className="blog-goBack" to="/home">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {products ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {products.created_at}</p>
            <h1>{products.name}</h1>
            {/* <div className="blog-subCategory">
              {products.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div> */}
          </header>
          <img src={products.prod_image} alt="cover" />
          <p className="blog-desc">{products.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </React.Fragment>
  );
};

