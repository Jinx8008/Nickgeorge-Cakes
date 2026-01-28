import Hero from "../components/Hero";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Hero />

      {/* FEATURED PRODUCTS */}
      <section className="featured">
        <h2>Our Popular Treats</h2>

        <div className="featured-grid">
          <div className="product-card">
            <h3>Birthday Cakes</h3>
            <p>Custom cakes for all celebrations.</p>
          </div>

          <div className="product-card">
            <h3>Chinchin</h3>
            <p>Crunchy and sweet snack packs.</p>
          </div>

          <div className="product-card">
            <h3>Puff-Puff</h3>
            <p>Soft and fluffy party favorites.</p>
          </div>

          <div className="product-card">
            <h3>Meat Pie</h3>
            <p>Freshly baked savory pastries.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h4>Fresh Ingredients</h4>
            <p>We use only high-quality and fresh ingredients.</p>
          </div>

          <div className="why-card">
            <h4>Affordable Prices</h4>
            <p>Quality treats at pocket-friendly prices.</p>
          </div>

          <div className="why-card">
            <h4>On-Time Delivery</h4>
            <p>Your orders are delivered exactly when needed.</p>
          </div>

          <div className="why-card">
            <h4>Custom Orders</h4>
            <p>We create treats tailored to your event.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Ready to Place an Order?</h2>
        <p>Click below to chat with us on WhatsApp and get started.</p>

        <a
          href="https://wa.me/2348012345678?text=Hello%2C%20I%27d%20like%20to%20place%20an%20order"
          target="_blank"
          rel="noreferrer"
          className="cta-btn"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}
