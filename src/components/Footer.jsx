import React from "react";


function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; Gizmo Rodriguo {year}</p>
    </footer>
  );
}



export default Footer;