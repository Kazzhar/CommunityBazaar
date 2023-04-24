import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { usePhoneNumber } from "../../Context/PhoneNumberContext";
import { useEffect } from "react";
const supabaseUrl = "https://pibocyssfkqnnshfrnnc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpYm9jeXNzZmtxbm5zaGZybm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5MzY2MTgsImV4cCI6MTk5NzUxMjYxOH0.5xAH9Q8HoUuAi49RczmiS28E3b7pcGjEGb453HLVpZc";
const supabase = createClient(supabaseUrl, supabaseKey);
function LoginPage() {
  const [currPhoneNumber, setCurrPhoneNumber] = useState("+91");
  const { phoneNumber, setPhoneNumber } = usePhoneNumber();
  const handlePhoneChange = (e) => {
    setCurrPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase

      .from("users")

      .select("*")

      .eq("phone_number", currPhoneNumber);

    if (error) {
      console.log("Error fetching data:", error);
    } else if (data.length > 0) {
      console.log("Phone number exists");
      setPhoneNumber(currPhoneNumber);
      // setting the phone number globally
      console.log("the curr phone number is: ", currPhoneNumber);
      console.log("the global number has been set, redirecting to all communities");
      navigate("/all-communities")
    } else {
      alert(
        "Account with this number does not exits, please sign-up or login with an existing account"
      );
    }
  };
  useEffect(() => {
    console.log("The global number is:", phoneNumber);
  }, [phoneNumber]);
  const navigate = useNavigate();

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
        <button
          className="submit-btn"
          type="submit"
          // onClick={() => console.log("submit")}
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
