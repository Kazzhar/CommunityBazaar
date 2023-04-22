import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./productItem.css";

const ProductItem = ({
  product: {
    prod_id,
    name,
    created_at,
    quantity,
    description,
    price,
    expiry,
    prod_image,
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
        <img className="blogItem-cover" src={prod_image} alt="cover" />
        <Chip label={price} />
        <h3>{name}</h3>
        <p className="blogItem-desc">{description}</p>
      </Link>

      <footer>
        {/* <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div> */}
        <Link className="blogItem-link" to={`/blog/${prod_id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default ProductItem;
