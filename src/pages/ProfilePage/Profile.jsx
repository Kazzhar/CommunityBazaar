import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="App">
     <div className="container">
  <div className="user-image">
  <img src="https://st.depositphotos.com/1224365/2408/i/600/depositphotos_24084437-stock-photo-portrait-of-a-normal-boy.jpg" alt="" />
  </div>
  
  <div className="content">
    <h3 className="name">Advait Soni</h3>
    <p className="username">Total Revenue: 15$</p>
    <p className="details">Rating: 4.8/5</p>
    <a className="effect effect-4" href="#">
      Contact
    </a>
  </div>
</div>

    </div>
  );
}

export default Profile;
