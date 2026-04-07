import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-column">
          <Link to="/" className="footer-logo-link">
            <img src="/logo1.png" alt="TravelVista" className="footer-logo-img" />
          </Link>
          <p className="footer-text">
            TravelVista helps you plan trips with curated destinations, practical tips, and quick support.
          </p>
          <p className="footer-text footer-note">Trusted by travelers planning smarter vacations.</p>
          <div className="footer-stats">
            <span>50+ guides</span>
            <span>10+ destinations</span>
            <span>24h response</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/tips">Travel Tips</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@travelvista.com">hello@travelvista.com</a></li>
            <li><a href="tel:+917353354226">+91-7353354226</a></li>
            <li><a href="https://wa.me/917353354226" target="_blank" rel="noreferrer">WhatsApp Support</a></li>
            <li><span className="footer-text">Mon - Fri, 9:00 AM - 6:00 PM</span></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help & Policies</h4>
          <ul>
            <li><Link to="/contact">Customer Support</Link></li>
            <li><a href="mailto:vaibhavkharvi08@gmail.com?subject=TravelVista%20Partnership">Partner With Us</a></li>
            <li><a href="mailto:vaibhavkharvi08@gmail.com?subject=TravelVista%20Feedback">Send Feedback</a></li>
            <li><span className="footer-text">Secure assistance via Email & WhatsApp</span></li>
          </ul>
          <div className="footer-social">
            <span>Follow us:</span>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
            <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} TravelVista. All rights reserved.</p>
        <p>✈️ Plan better. Travel smarter.</p>
      </div>
    </footer>
  );
}

export default Footer;
