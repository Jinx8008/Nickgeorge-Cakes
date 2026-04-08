import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo1 from "../assets/images/logo/IMG_7516-removebg-preview.png";
import logo2 from "../assets/images/logo/Screenshot_20260128_102436_Gallery-removebg-preview-removebg-preview.png";
import logo3 from "../assets/images/logo/Screenshot_20260128_102511_Gallery-removebg-preview.png";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ─── Full-screen slide-in panel (mobile only) ─── */}
      <div className={`mobile-menu-overlay ${open ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/menu" onClick={() => setOpen(false)}>Menu</Link></li>
          <li><Link to="/order" onClick={() => setOpen(false)}>Order</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      <nav className="navbar glass-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo3} alt="NikGeorge Cakes Logo" className="logo-img-1" />
            <img src={logo2} alt="NikGeorge Cakes Logo 2" className="logo-img-2" />
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

          {/* Desktop links */}
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}