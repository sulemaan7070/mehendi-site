import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <header>
      <nav className="container text-pink-500 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        Blooming mehendi
      </nav>
      <div>{/* <Link to="#about">About</Link> */}</div>
    </header>
  );
}

export default Nav;
