import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  appBar,
  toolbarWrapper,
  loginBtnWrapper,
  logoWrapper,
  appToolBarWrapper,
  flex,
} from "../styles/styles";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CustomButton from "../shared/CustomButton";
import UserProfile from "./UserProfile";

const Navbar = () => {
  return (
    <AppBar component="nav" sx={appBar}>
      <Toolbar sx={appToolBarWrapper}>
        <Box sx={toolbarWrapper}>
          <Box sx={logoWrapper}>
            <Logo />
          </Box>
          <Box>
            <SearchBar />
          </Box>
          <Box sx={flex}>
            <Box sx={loginBtnWrapper}>
              <CustomButton
              //need to change the color of this
                text="Create Post"
                bgColor="background.customBtn"
                color="white"
                space
              />
              <CustomButton
                text="Logout"
                bgColor="background.customBtn2"
                color="text.btnText"
              />
            </Box>
            <UserProfile />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
