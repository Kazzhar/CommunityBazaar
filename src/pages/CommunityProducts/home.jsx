import React, { useState } from "react";
import EmptyList from "../../Components/common/EmptyList";
import ProductList from "../../Components/Home/ProductList/productList";
import Header from "../../Components/Home/Header";
import SearchBar from "../../Components/Home/SearchBar";
import { useParams } from "react-router";
import { supabase } from "../../config/supabaseClient";
import { useEffect } from 'react';
import "./home.css";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data: products, error } = await supabase
        .from('products')
        .select('*');
      
      if (error) {
        console.log(error);
      } else {
        console.log(products)
        setProducts(products);
      }
    };
    console.log(products)
    fetchProducts();
  }, []);

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allProducts = products;
    console.log(products)
    // if(allProducts.categories == null) return
    // console.log(products.map((product)=>{
    //   return product.categories
    // }))
    const checkCategory = (product) => {
      return product.categories.some(category => category === searchKey);
    };
    const filteredProducts = allProducts.filter(checkCategory);
    console.log(filteredProducts)
    setProducts(filteredProducts);
  };

  // const handleSearchResults = () => {
  //   const allProducts = products
  //   const filteredProduct = allProducts.filter((product) => 
  //     product.categories.map((category)=>(
  //       category.toLowerCase().includes(searchKey.toLowerCase().trim())
  //     ))
  //   );
  //   setProducts(filteredProduct);
  // };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    const { data: products, error } = supabase
      .from('products')
      .select('*');
    
    if (error) {
      console.log(error);
    } else {
      console.log(products)
      setProducts(products);
    }
    setSearchKey(" ");
  };
  
  return (
    <React.Fragment>
      <div>
        {/* Page Header */}
        <div className="header-wrapper">
          <Header className="home-header"/>
        </div>
        {/* Search Bar */}
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
        {/* Blog List & Empty View */}
        {!products.length ? <EmptyList /> : <ProductList products={products} />}
      </div>
    </React.Fragment>
  );
};
