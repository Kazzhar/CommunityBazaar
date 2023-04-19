import { useState } from "react";
import { authentication } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import "./PhoneAuth.css"
function PhoneAuth(){
    const countryCode="+91"
    const [phoneNumber, setPhoneNumber]= useState(countryCode);
    const [expandForm, setExpandForm] = useState(false);
    const [OTP, setOTP] =useState(''); 
    const generateRecaptcha = () =>{
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.

            }
          }, authentication);
    }
    const navigate= useNavigate();
    const requestOTP = (e) => {
        e.preventDefault();
        if(phoneNumber.length>=12){
            setExpandForm(true);
            generateRecaptcha();
            let appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
            .then(confirmationResult => {
                window.confirmationResult= confirmationResult;
                // setExpandForm(true);
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                console.log(error);
             });
        }
    }
    
    const verifyOTP = (e)=>{
        let otp = e.target.value;
        setOTP(otp);
        if(otp.length === 6 ){
            console.log(otp);
            let confirmationResult=window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user);
                navigate('/signup')
                // ...
              }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
                console.log(error)
              });
        }
    }
    return (
        <div className="formContainer">
            <form onSubmit={requestOTP}>
                <h1>Sign in with phone number</h1>
                <div className="mb-3">
                    <label htmlFor="phoneNumberInput" className="form-label">Phone number</label>
                    {/* <input type="tel" className="form-control" id="phoneNumberInput" /> */}
                    <input type="tel" className="form-control" id="phoneNumberInput" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}} />
                    <div id="phoneNumberHelp" className="form-text">Please enter your phone number</div>
                </div>
                {expandForm===true?
                    <>
                        <div className="mb-3">
                            <label htmlFor="otpInput" className="form-label">OTP</label>
                            <input type="number" className="form-control" id="otpInput" value={OTP} onChange={verifyOTP}/>
                            <div id="otpHelp" className="form-text">Please enter the OTP sent to your phone</div>
                        </div>
                    </>
                    :
                    null
                }
                {
                    expandForm===false?
                    <button type="submit" className="btn btn-primary">Request OTP</button>
                    :
                    null
                }
                <div id="recaptcha-container"></div>
            </form>
        </div>
    );
}
export default PhoneAuth;