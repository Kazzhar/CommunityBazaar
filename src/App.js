import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/LandingPage_comp/Home";
import About from "./Components/LandingPage_comp/About";
import Testimonials from "./Components/LandingPage_comp/Testimonials";
import Contact from "./Components/LandingPage_comp/Contact";
import { LandingPage } from "./pages/LandingPage/landing_page";
import { HomePage } from "./pages/HomePage/home_page";
import SignUpForm from "./pages/SignUpPage/sign-up";
import PhoneAuth from "./pages/PhoneAuthentication/PhoneAuth";
import LoginPage from "./pages/login/login";
import CreatePost from "./pages/CreatePost/create-post";
import { PhoneNumberProvider } from "./Context/PhoneNumberContext";
// onClick={() => navigate('/home')} to navigate to that particular route
function App() {
  
  return (
    <div className="App">
      {/* <ShopContextProvider> */}
      <PhoneNumberProvider>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/home" element={<Contact />} />
            <Route path="/cart" element={<Cart />} /> */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/phone-auth" element={<PhoneAuth />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </Router>
        {/* </ShopContextProvider> */}
      </PhoneNumberProvider>
    </div>
  );
}

export default App;
