import "./TestimonialCard.css";

export default function TestimonialCard({ name, comment, rating }) {
  return (
    <div className="testimonial-card">
      <p className="comment">"{comment}"</p>
      <p className="name">- {name}</p>
      <p className="rating">{"⭐".repeat(rating)}</p>
    </div>
  );
}
