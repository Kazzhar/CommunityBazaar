import React, { useState, useEffect } from "react";

import { createClient } from "@supabase/supabase-js";

import "./login.css";

import { useNavigate } from "react-router-dom";

import { usePhoneNumber } from "../../Context/PhoneNumberContext";

const supabaseUrl = "https://pibocyssfkqnnshfrnnc.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpYm9jeXNzZmtxbm5zaGZybm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5MzY2MTgsImV4cCI6MTk5NzUxMjYxOH0.5xAH9Q8HoUuAi49RczmiS28E3b7pcGjEGb453HLVpZc";

const supabase = createClient(supabaseUrl, supabaseKey);

function LoginPage() {
  const [currPhoneNumber, setCurrPhoneNumber] = useState("+91");

  const { phoneNumber, setPhoneNumber } = usePhoneNumber();

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    setCurrPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const { data, error } = await supabase

      .from("users")

      .select("*")

      .eq("phone_number", currPhoneNumber);

    if (error) {
      console.log("Error fetching data:", error);

      setIsLoading(false);
    } else if (data.length > 0) {
      console.log("Phone number exists");

      setPhoneNumber(currPhoneNumber);

      console.log("the curr phone number is: ", currPhoneNumber);

      console.log(
        "the global number has been set, redirecting to all communities"
      );

      setTimeout(() => {
        setIsLoading(false);

        navigate("/all-communities");
      }, 4000);
    } else {
      alert(
        "Account with this number does not exits, please sign-up or login with an existing account"
      );

      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("The global number is:", phoneNumber);
  }, [phoneNumber]);

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="phone-label">
          Phone Number:
          <input
            className="phone-input"
            type="tel"
            value={currPhoneNumber}
            onChange={handlePhoneChange}
          />
        </label>

        <br />

        <br />

        <button className="submit-btn" type="submit">
          Submit
        </button>

        {isLoading && <p className="signing-in-message">Signing in...</p>}

        <p className="signup-message">Don't have an account?</p>

        <button className="signup-btn" onClick={() => navigate("/phone-auth")}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
