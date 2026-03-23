import { useEffect, useState } from "react";
import "./Hero.css";

import img1 from "../assets/images/image5.jpg";
import img2 from "../assets/images/image1.jpg";
import img3 from "../assets/images/image4.jpg";
import img4 from "../assets/images/image2.png";

export default function Hero() {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="hero-carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Dark gradient scrim so text is always readable */}
        <div className="hero-scrim" />

        {/* Glass Text Overlay */}
        <div className="glass-container">
          <div className="hero-text-overlay glass-box">
            <h1>Fresh Cakes & Small Chops <span className="gold-accent">for Every Occasion</span></h1>
            <p>
              We bake delicious cakes, pastries, and small chops for birthdays,
              weddings, parties, and corporate events.
            </p>
            <a
              href="https://wa.me/2348012345678?text=Hello%2C%20I%27d%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noreferrer"
              className="hero-btn"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Slide dots */}
        <div className="hero-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}