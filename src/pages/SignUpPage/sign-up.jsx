  import React, { useState } from "react";
  import { createClient } from "@supabase/supabase-js";
  import "./sign-up.css";
  import { usePhoneNumber } from "../../Context/PhoneNumberContext";
  // import { curr_user } from "../../services/UserService";
  import { supabase } from "../../config/supabaseClient";
  import { useNavigate } from "react-router-dom";
  function SignUpForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [adhaarNumber, setAdhaarNumber] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [image, setImage] = useState([]);
    const { phoneNumber, setPhoneNumber } = usePhoneNumber();
    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleAdhaarNumberChange = (event) => {
      setAdhaarNumber(event.target.value);
    };

    const handleDobChange = (event) => {
      setDob(event.target.value);
    };

    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };

    const handleImageChange = (event) => {
      setImage(event.target.files[0]);
    };

    const uploadImage = async (file) => {
      const uniqueName = Date.now() + "-" + file.name;

      const filePath = `adhaarImages/${uniqueName}`;

      const { error } = await supabase.storage

        .from("adhaar_images")

        .upload(filePath, file);

      if (error) {
        console.error("Error uploading image:", error);
      } else {
        console.log("Image uploaded successfully");

        return filePath;
      }
    };
    // export var curr_user;

    const storeImageUrl = async (imagePath) => {
      const imageUrl = `https://pibocyssfkqnnshfrnnc.supabase.co/storage/v1/object/public/adhaar_images/${imagePath}`;

      const uuid = crypto.randomUUID();

      const { error } = await supabase

        .from("users")

        .insert({ user_name: name, id: uuid, phone_number: phoneNumber, adhaar_image_ref: imageUrl, gender: gender, date_of_birth: dob, adhaar_number: adhaarNumber });
        // .select();

      if (error) {
        console.error("Error storing image URL:", error);
      } else {
        console.log("Image URL stored successfully");
      }
    };

    const handleSubmit = async (event) => {
      console.log("this is the phone number", phoneNumber);
      const uuid = crypto.randomUUID();
      console.log(uuid);
      event.preventDefault();
      if (!name || !adhaarNumber || !dob || !gender || !image) {
        alert("Please fill out all fields");
        return;
      }
      if (!image.type.startsWith("image/")) {
        alert("Please upload an image file");
        return;
      }
      event.preventDefault();
      // Here you can add the code to send the data to the server
      // using fetch() or Axios
      const imagePath = await uploadImage(image);

      if (imagePath) {
        await storeImageUrl(imagePath);
      }
      navigate("/all-communities");
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <br />
        <label>
          Adhaar Number:
          <input
            type="text"
            value={adhaarNumber}
            onChange={handleAdhaarNumberChange}
            required
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={handleDobChange} required />
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} onChange={handleGenderChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Image of Adhaar Card:
          <input type="file" onChange={handleImageChange} required />
        </label>
        <br />
        <button type="submit">Upload</button>
      </form>
    );
  }

  export default SignUpForm;
