import React from "react";
import "./styles.css";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div>
      <p>&copy; Alan Chelko {year}</p>
    </div>
  );
}



export default Footer;