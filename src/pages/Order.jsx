import "./Order.css";

export default function Order() {
  return (
    <div className="order">
      <h1>Place Your Order</h1>
      
      <div className="order-content">
        <p>Ready to order? Click the button below to chat with us on WhatsApp!</p>
        
        <a
          href="https://wa.me/2348012345678?text=Hello%2C%20I%27d%20like%20to%20place%20an%20order"
          target="_blank"
          rel="noreferrer"
          className="order-btn"
        >
          Order on WhatsApp
        </a>

        <div className="order-info">
          <h2>How to Order</h2>
          <ol>
            <li>Click the WhatsApp button above</li>
            <li>Send us your order details</li>
            <li>We'll confirm availability and pricing</li>
            <li>Arrange payment and delivery</li>
            <li>Enjoy your delicious treats!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
