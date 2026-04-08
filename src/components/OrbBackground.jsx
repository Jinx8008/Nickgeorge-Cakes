import "./OrbBackground.css";

export default function OrbBackground({ children }) {
  return (
    <>
      {/* Layer 1 — moving orbs */}
      <div className="orb-stage">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>

      {/* Layer 2 — frosted glass wall */}
      <div className="orb-glass-wall" />

      {/* Layer 3 — all page content */}
      <div className="orb-content">
        {children}
      </div>
    </>
  );
}