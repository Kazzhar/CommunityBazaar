import { useState } from "react";
import { authentication } from "../../firebase";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./PhoneAuth.css";
import { createClient } from "@supabase/supabase-js";
import { usePhoneNumber } from "../../Context/PhoneNumberContext";
import { supabase } from "../../config/supabaseClient";
import CreatePost from "../CreatePost/create-post";

function PhoneAuth() {
  const countryCode = "+91";
  // const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const { phoneNumber, setPhoneNumber } = usePhoneNumber();
  const [expandForm, setExpandForm] = useState(false);
  const [OTP, setOTP] = useState("");
  //   const generateRecaptcha = () => {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       "recaptcha-container",
  //       {
  //         size: "invisible",
  //         callback: (response) => {
  //           // reCAPTCHA solved, allow signInWithPhoneNumber.
  //         },
  //       },
  //       authentication
  //     );
  //   };
  const navigate = useNavigate();
  const requestOTP = async (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 12) {
      setExpandForm(true);
      const { data, error } = await supabase
        .from("users")
        .select("phone_number")
        .eq("phone_number", phoneNumber);
      if (data.length) {
        console.log("user exists");
      } else {
        // const uuid = crypto.randomUUID();
        // const { error1 } = await supabase
        //   .from("users")
        //   .insert({ id: uuid, phone_number: phoneNumber });
        console.log("user created");
        const { user, error } = await supabase.auth.signInWithOtp({
          phone: phoneNumber,
        });
        console.log("the otp has been sent");
        console.log("User: ", user);
        console.log("Error: ", error);
      }
    }
  };

  const verifyOTP = async (e) => {
    let otp = e.target.value;

    setOTP(otp);

    if (otp.length === 6) {
      console.log(otp);

      try {
        let { session, error } = await supabase.auth.verifyOtp({
          phone: phoneNumber,

          token: otp,

          type: "sms",
        });

        if (error) {
          console.error("Error verifying OTP:", error.message);
        } else {
          console.log("OTP verified successfully");

          // Display the confirmation message (you can customize this as needed)

          const confirmationMessage =
            "OTP verification successful! Redirecting to Sign Up page...";
          alert(confirmationMessage);

          // Set a delay (in milliseconds) before navigating to the /signup path

          const delay = 2000; // 2 seconds
          setTimeout(() => {
            console.log("Navigating to the Sign Up page");

            navigate("/signup");
          }, delay);
        }
      } catch (err) {
        console.error("Error during OTP verification:", err.message);
      }
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={requestOTP}>
        <h1>Sign in with phone number</h1>
        <div className="mb-3">
          <label htmlFor="phoneNumberInput" className="form-label">
            Phone number
          </label>
          {/* <input type="tel" className="form-control" id="phoneNumberInput" /> */}
          <input
            type="tel"
            className="form-control"
            id="phoneNumberInput"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <div id="phoneNumberHelp" className="form-text">
            Please enter your phone number
          </div>
        </div>
        {expandForm === true ? (
          <>
            <div className="mb-3">
              <label htmlFor="otpInput" className="form-label">
                OTP
              </label>
              <input
                type="number"
                className="form-control"
                id="otpInput"
                value={OTP}
                onChange={verifyOTP}
              />
              <div id="otpHelp" className="form-text">
                Please enter the OTP sent to your phone
              </div>
            </div>
          </>
        ) : null}
        {expandForm === false ? (
          <button type="submit" className="btn btn-primary">
            Request OTP
          </button>
        ) : null}
        <div id="recaptcha-container"></div>
      </form>
    </div>
  );
}
export default PhoneAuth;
