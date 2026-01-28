import "./ProductionCard.css";

export default function ProductionCard({ title, description }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
