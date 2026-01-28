import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>📱 WhatsApp</h2>
          <p>
            Chat with us on{" "}
            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>{" "}
            for quick responses.
          </p>
        </div>

        <div className="contact-info">
          <h2>⏰ Business Hours</h2>
          <p>Monday - Friday: 9AM - 6PM</p>
          <p>Saturday: 10AM - 8PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="contact-info">
          <h2>📧 Email Inquiries</h2>
          <p>For special requests, reach out via WhatsApp.</p>
        </div>
      </div>
    </div>
  );
}
