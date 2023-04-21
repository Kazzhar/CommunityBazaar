import React, { useState } from "react";

import "./create-post.css";

const CreatePost = () => {
  const [productName, setProductName] = useState("");

  const [productDescription, setProductDescription] = useState("");

  const [quantityAvailable, setQuantityAvailable] = useState(0);

  const [price, setPrice] = useState(0);

  const [expiryDate, setExpiryDate] = useState("");

  const [noExpiry, setNoExpiry] = useState(false);

  const [images, setImages] = useState([]);

  const toggleExpiryDate = () => {
    setNoExpiry(!noExpiry);

    if (noExpiry) {
      setExpiryDate("");
    }
  };

  return (
    <div className="create-post-overlay">
      <div className="create-post-container">
        <h2>Create Post</h2>

        <form className="create-post-form">
          <label htmlFor="product-name">Product Name:</label>

          <input
            type="text"
            id="product-name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />

          <label htmlFor="product-description">Product Description:</label>

          <textarea
            id="product-description"
            rows="4"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="quantity">Quantity Available:</label>

          <input
            type="number"
            id="quantity"
            min="0"
            value={quantityAvailable}
            onChange={(e) => setQuantityAvailable(e.target.value)}
            required
          />

          <label htmlFor="price">Price (₹):</label>

          <input
            type="number"
            id="price"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label htmlFor="expiry-date">Expiry Date:</label>

          <input
            type="date"
            id="expiry-date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            disabled={noExpiry}
          />

          <input
            type="checkbox"
            id="no-expiry"
            checked={noExpiry}
            onChange={toggleExpiryDate}
          />

          <label htmlFor="no-expiry">Not Applicable</label>

          <label htmlFor="images">Upload Images:</label>

          <input
            type="file"
            id="images"
            accept="image/*"
            multiple
            onChange={(e) => setImages(e.target.files)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
