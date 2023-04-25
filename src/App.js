import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/landing_page";
import { Home } from "./pages/Home/home";
import { Product } from "./pages/Product/product";
import SignUpForm from "./pages/SignUpPage/sign-up";
import PhoneAuth from "./pages/PhoneAuthentication/PhoneAuth";
import LoginPage from "./pages/login/login";
import CreatePost from "./pages/CreatePost/create-post";
import {Community}  from "./pages/communityPage/communityPage";
import { CommunityHome } from "./pages/CommunityHome/communityHome";
import { PhoneNumberProvider } from "./Context/PhoneNumberContext";
// import Payment from "./pages/Payment/payment";
import Payment from "./pages/Payment/payment";
import Profile from "./pages/ProfilePage/Profile"
import ShopContextProvider from "./Context/ShopContext";
import {Cart} from "./pages/Cart/cart";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <PhoneNumberProvider>
          <Router>
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/home" element={<Contact />} />
              <Route path="/cart" element={<Cart />} /> */}
              <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/phone-auth" element={<PhoneAuth />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/product/:prod_id" element={<Product />} />
              <Route path="/my-communities" element={<Community />}/>
              <Route path="/community-home" element={<CommunityHome/>}/>
              <Route path="/make-payment" element={<Payment/>}/>
              <Route path="/profile" element={<Profile/>} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </PhoneNumberProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
