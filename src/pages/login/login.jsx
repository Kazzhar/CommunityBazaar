import React, { useState } from "react";

import { createClient } from '@supabase/supabase-js'
import "./login.css";
import { useNavigate } from "react-router-dom";
import { getAuth, getUserByPhoneNumber } from "firebase/auth";
const supabase = createClient(supabaseUrl, supabaseKey)
const supabaseUrl = 'https://pibocyssfkqnnshfrnnc.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpYm9jeXNzZmtxbm5zaGZybm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5MzY2MTgsImV4cCI6MTk5NzUxMjYxOH0.5xAH9Q8HoUuAi49RczmiS28E3b7pcGjEGb453HLVpZc'
function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(supabase)
    // const auth = getAuth();

    // getUserByPhoneNumber(auth, phoneNumber) // Use the auth constant here
    //   .then((userRecord) => {
    //     // See the UserRecord reference doc for the contents of userRecord.

    //     console.log(`Successfully fetched user data:  ${userRecord.toJSON()}`);
    //   })

    //   .catch((error) => {
    //     console.log("Error fetching user data:", error);

    //     console.log("User does not exist");
    //   });
  };
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="phone-label">
          Phone Number:
          <input
            className="phone-input"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
        </label>
        <br />
        <br />
        <button
          className="submit-btn"
          type="submit"
          onClick={() => console.log("submit")}
        >
          Submit
        </button>
        <p className="signup-message">Don't have an account?</p>
        <button className="signup-btn" onClick={() => navigate("/phone-auth")}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default LoginPage;