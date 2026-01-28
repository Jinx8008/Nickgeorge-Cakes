import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      
      <div className="menu-section">
        <h2>Cakes</h2>
        <ul>
          <li>Birthday Cakes - Custom designed for your celebration</li>
          <li>Wedding Cakes - Elegant designs for your special day</li>
          <li>Cupcakes - Individual treats in various flavors</li>
        </ul>
      </div>
      
      <div className="menu-section">
        <h2>Small Chops</h2>
        <ul>
          <li>Puff-Puff - Soft and fluffy</li>
          <li>Chinchin - Crunchy and sweet</li>
          <li>Meat Pie - Savory pastries</li>
        </ul>
      </div>
    </div>
  );
}
