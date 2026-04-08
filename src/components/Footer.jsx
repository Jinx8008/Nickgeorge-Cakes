import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>NikGeorge Cakes</h3>
          <p>Delicious cakes and small chops for every occasion.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Contact us on WhatsApp for orders and inquiries.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 NikGeorge Cakes. All rights reserved.</p>
      </div>
    </footer>
  );
}
