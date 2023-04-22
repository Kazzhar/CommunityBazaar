import React from 'react';
import ProductItem from './ProductItem/productItem';
import './productList.css';

const ProductList = ({ products }) => {
  return (
    <div className='blogList-wrap'>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default ProductList;
