import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../../config/superbaseClient";

import "./create-post.css";

const CreatePost = () => {
  const [productName, setProductName] = useState("");

  const [productDescription, setProductDescription] = useState("");

  const [quantityAvailable, setQuantityAvailable] = useState(0);

  const [price, setPrice] = useState(0);

  const [expiryDate, setExpiryDate] = useState("");

  const [noExpiry, setNoExpiry] = useState(false);

  const [image, setImage] = useState([]);

  const toggleExpiryDate = () => {
    setNoExpiry(!noExpiry);

    if (noExpiry) {
      setExpiryDate("");
    }
  };



  const uploadImage = async (file) => {
    const uniqueName = Date.now() + "-" + file.name;

    const filePath = `productImages/${uniqueName}`;

    const { error } = await supabase.storage
      .from("product_images")
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading image:", error);
    } else {
      console.log("Product Image uploaded successfully");
      return filePath;
    }
  };
  // export var curr_user;

  const storeImageUrl = async (imagePath) => {
    const imageUrl = `https://pibocyssfkqnnshfrnnc.supabase.co/storage/v1/object/public/product_images/${imagePath}`;

    const p_id = crypto.randomUUID();

    const { error } = await supabase
      .from("products")
      .insert({ name: productName, prod_id: p_id, description: productDescription, quantity: quantityAvailable , price: price, expiry: expiryDate, prod_images: imageUrl });
      // .select();

    if (error) {
      console.error("Error storing image URL:", error);
    } else {
      console.log("Image URL stored successfully");
    }
  };

  const CreateNewPost = async (event) => {
    const p_id = crypto.randomUUID();
    console.log(p_id);
    event.preventDefault();
    if (!productName || !productDescription || !quantityAvailable|| !price || !expiryDate || !image) {
      alert("Please fill out all fields");
      return;
    }
    console.log(image.type)
    // if (!image.type.startsWith("image/")) {
    //   alert("Please upload an image file");
    //   return;
    // }
    event.preventDefault();
    // Here you can add the code to send the data to the server
    // using fetch() or Axios
    const imagePath = await uploadImage(image);

    if (imagePath) {
      await storeImageUrl(imagePath);
    }
  };

  // const CreateNewPost = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data, error } = await supabase.from('products').insert(productName, productDescription, quantityAvailable, price, expiryDate);
  //     if (error) {
  //       throw error;
  //     }
  //     console.log('Data inserted successfully:', data);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       message: '',
  //     });
  //   } catch (error) {
  //     console.error('Error inserting data:', error.message);
  //   }
  // };

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

          <label htmlFor="image">Upload Images:</label>

          <input
            type="file"
            id="image"
            accept="image/*"
            multiple
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button type="submit" onClick={CreateNewPost}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
