import React, { useContext } from "react";
import "./toggle.css";

import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "./Context";

export default function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleDarkMode =() =>{
    theme.dispatch({type:'toggle'})
  }
  return (
    <div className="toggle"   onClick={handleDarkMode}>
     {darkMode? <Sun /> :  <Moon /> }

      
      <div
    
        className="toggle-btn"
        style={darkMode ? { left: "0px" } : { right: "0px" }}
      ></div>
    </div>
  );
}
