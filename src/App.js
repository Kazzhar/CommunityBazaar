import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/landing_page";
import { Home } from "./pages/Home/home";
import { Product } from "./pages/Product/product";
import SignUpForm from "./pages/SignUpPage/sign-up";
import PhoneAuth from "./pages/PhoneAuthentication/PhoneAuth";
import LoginPage from "./pages/login/login";
import CreatePost from "./pages/CreatePost/create-post";
// import { MyCommunityPage}  from "./pages/communityPage/communityPage";
import { MyCommunityPage } from "./pages/myCommunityPage/myCommunityPage";
import { CommunityHome } from "./pages/CommunityHome/communityHome";
import { PhoneNumberProvider } from "./Context/PhoneNumberContext";
import { UserIdProvider } from "./Context/UserIdContext";
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
        <UserIdProvider>
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
              <Route path="/2d65d411-d402/my-communities" element={<MyCommunityPage />}/>
              <Route path="/all-communities" element={<CommunityHome/>}/>
              <Route path="/make-payment" element={<Payment/>}/>
              <Route path="/profile" element={<Profile/>} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </UserIdProvider>
        </PhoneNumberProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
