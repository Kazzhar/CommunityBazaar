import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import AppThemeProvider from "./Components/HomePage_comp/themes/AppThemeProvider";
// import CssBaseline from "@mui/materialment.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
  
root.render(
  <React.StrictMode>
    {/* <CssBaseline /> */}
    {/* <AppThemeProvider> */}
      <App />
    {/* </AppThemeProvider> */}
  </React.StrictMode>
);
