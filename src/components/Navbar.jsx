import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar glass-nav">
      <div className="nav-container">
        <div className="nav-logo">NickGeorge Cakes</div>

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