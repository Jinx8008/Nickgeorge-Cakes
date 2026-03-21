import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo1 from "../assets/images/logo/IMG_7516-removebg-preview.png";
import logo2 from "../assets/images/logo/Screenshot_20260128_102436_Gallery-removebg-preview-removebg-preview.png";
import logo3 from "../assets/images/logo/Screenshot_20260128_102511_Gallery-removebg-preview.png";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar glass-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo3} alt="NickGeorge Cakes Logo" className="logo-img-1" />
           <img src={logo2} alt="NickGeorge Cakes Logo 2" className="logo-img-2" />
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/menu">Menu</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/order">Order</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/about">About</Link></li>
          <li onClick={() => setOpen(false)}><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}