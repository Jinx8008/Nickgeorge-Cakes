import Hero from "../components/Hero";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Hero />

      {/* ─── FEATURED PRODUCTS ─── */}
      <section className="featured">
        <div className="section-bg-blobs">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
        </div>
        <div className="section-inner">
          <span className="section-eyebrow">What We Offer</span>
          <h2>Our Popular Treats</h2>
          <p className="section-sub">
            Handcrafted with premium ingredients — made to impress at every occasion.
          </p>
          <div className="featured-grid">
            <div className="product-card">
              <div className="product-card-icon">🎂</div>
              <h3>Custom Cakes</h3>
              <p>Show-stopping cakes designed for birthdays, weddings, and every celebration in between.</p>
            </div>
            <div className="product-card">
              <div className="product-card-icon">🍪</div>
              <h3>Chinchin</h3>
              <p>Golden, crunchy, and perfectly sweetened — a classic Nigerian snack done right.</p>
            </div>
            <div className="product-card">
              <div className="product-card-icon">🍩</div>
              <h3>Puff-Puff</h3>
              <p>Light, fluffy, and irresistible. The crowd favourite at any event or gathering.</p>
            </div>
            <div className="product-card">
              <div className="product-card-icon">🥧</div>
              <h3>Meat Pie</h3>
              <p>Freshly baked savory pastries with a rich, hearty filling — perfect for every occasion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT THE CHEF ─── */}
      <section className="about-chef">
        <div className="section-bg-blobs">
          <div className="blob blob-3" />
        </div>
        <div className="section-inner about-chef-inner">
          <div className="about-chef-text">
            <span className="section-eyebrow">Meet the Chef</span>
            <h2>Baked with Love, <span className="gold-text">Served with Pride</span></h2>
            <p>
              At NickGeorge Cakes, every creation is a labour of love. With years of
              experience crafting custom cakes and small chops for events across the region,
              our chef brings artistry, precision, and passion to every single order.
            </p>
            <p>
              From intimate birthday parties to grand corporate events — no order is too
              small or too big. We treat every client like royalty and every event like it's
              our own.
            </p>
            <a href="/about" className="about-btn">Learn More About Us</a>
          </div>
          <div className="about-chef-badge glass-box">
            <div className="badge-stat">
              <span className="badge-number">500+</span>
              <span className="badge-label">Orders Delivered</span>
            </div>
            <div className="badge-divider" />
            <div className="badge-stat">
              <span className="badge-number">5★</span>
              <span className="badge-label">Average Rating</span>
            </div>
            <div className="badge-divider" />
            <div className="badge-stat">
              <span className="badge-number">6+</span>
              <span className="badge-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="why-us">
        <div className="section-bg-blobs">
          <div className="blob blob-4" />
          <div className="blob blob-5" />
        </div>
        <div className="section-inner">
          <span className="section-eyebrow">Our Promise</span>
          <h2>Why Choose NickGeorge?</h2>
          <p className="section-sub">
            We don't just bake — we create experiences worth remembering.
          </p>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-card-icon">🌿</div>
              <h4>Premium Ingredients</h4>
              <p>Every item is made with the finest, freshest ingredients — no shortcuts, ever.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">💰</div>
              <h4>Affordable Luxury</h4>
              <p>World-class quality at prices that won't break the bank. Elegance for everyone.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">⏱️</div>
              <h4>On-Time Delivery</h4>
              <p>We understand your timeline. Your order arrives fresh and exactly when you need it.</p>
            </div>
            <div className="why-card">
              <div className="why-card-icon">✨</div>
              <h4>Fully Customised</h4>
              <p>From flavours to designs — everything is tailored to your vision and your event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="testimonials">
        <div className="section-bg-blobs">
          <div className="blob blob-6" />
        </div>
        <div className="section-inner">
          <span className="section-eyebrow">Kind Words</span>
          <h2>What Our Clients Say</h2>
          <p className="section-sub">Real people, real experiences.</p>
          <div className="testimonials-grid">
            <div className="testimonial-card glass-box">
              <p className="testimonial-text">
                "The cake for my daughter's birthday was absolutely stunning. Everyone at the
                party couldn't stop talking about how beautiful and delicious it was!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">A</div>
                <div>
                  <span className="testimonial-name">Adaeze O.</span>
                  <span className="testimonial-role">Birthday Client</span>
                </div>
              </div>
              <div className="testimonial-stars">★★★★★</div>
            </div>
            <div className="testimonial-card glass-box">
              <p className="testimonial-text">
                "NickGeorge catered our corporate event with small chops and it was a massive
                hit. Professional, punctual, and incredibly tasty. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">C</div>
                <div>
                  <span className="testimonial-name">Chukwuemeka B.</span>
                  <span className="testimonial-role">Corporate Event</span>
                </div>
              </div>
              <div className="testimonial-stars">★★★★★</div>
            </div>
            <div className="testimonial-card glass-box">
              <p className="testimonial-text">
                "From ordering to delivery, the experience was seamless. The wedding cake
                exceeded every expectation. Pure artistry on a plate."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">F</div>
                <div>
                  <span className="testimonial-name">Fatima K.</span>
                  <span className="testimonial-role">Wedding Client</span>
                </div>
              </div>
              <div className="testimonial-stars">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="cta">
        <div className="section-bg-blobs">
          <div className="blob blob-7" />
        </div>
        <div className="section-inner">
          <span className="section-eyebrow">Get Started</span>
          <h2>Ready to Place an Order?</h2>
          <p>
            Let's bring your event to life. Chat with us on WhatsApp and we'll
            craft something truly special for you.
          </p>
          <a
            href="https://wa.me/2348012345678?text=Hello%2C%20I%27d%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noreferrer"
            className="cta-btn"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}