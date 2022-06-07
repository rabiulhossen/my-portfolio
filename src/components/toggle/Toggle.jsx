
import React from "react";
import "./toggle.css";

import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";

export default function Toggle() {
  return (
    <div className="toggle">
  <Moon />
  <Sun />
  <div className="toggle-btn"></div>
    </div>
  );
}
