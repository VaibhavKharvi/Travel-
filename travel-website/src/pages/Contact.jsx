import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = 'vaibhavkharvi08@gmail.com';
    const subject = `TravelGuide contact form — ${formData.name || 'New message'}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">

      {/* Hero */}
      <div className="contact-hero">
        <div className="contact-hero-inner">
          <span className="contact-hero-badge">💬 We're here to help</span>
          <h1>Get in Touch</h1>
          <p>Have a trip in mind? Questions about a destination? Drop us a message and we'll get back to you within 24 hours.</p>
          <div className="contact-hero-pills">
            <span>🕐 Mon–Fri, 9AM–6PM</span>
            <span>⚡ Reply under 24h</span>
            <span>🌍 Trip planning help</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="contact-main">

        {/* Left — info */}
        <div className="contact-left">
          <h2 className="contact-left-title">Contact Details</h2>
          <p className="contact-left-sub">Reach us through any of these channels.</p>

          <div className="contact-info-cards">
            <div className="contact-info-item">
              <div className="contact-info-icon" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>📧</div>
              <div>
                <div className="contact-info-label">Email</div>
                <div className="contact-info-val">hello@travelguide.com</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon" style={{ background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)' }}>📞</div>
              <div>
                <div className="contact-info-label">Phone</div>
                <div className="contact-info-val">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #fbbf24)' }}>📍</div>
              <div>
                <div className="contact-info-label">Office</div>
                <div className="contact-info-val">123 Travel Street, Adventure City</div>
              </div>
            </div>
            <a
              className="contact-info-item contact-info-link"
              href="https://wa.me/917353354226?text=Hi%20TravelGuide%2C%20I%20need%20help%20with%20trip%20planning."
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-info-icon" style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>💬</div>
              <div>
                <div className="contact-info-label">WhatsApp</div>
                <div className="contact-info-val">+91-7353354226</div>
              </div>
            </a>
          </div>

          {/* Map placeholder */}
          <div className="contact-map-box">
            <span>🗺️</span>
            <p>Adventure City, Travel Street 123</p>
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-right">
          <div className="contact-form-card">
            <h2 className="contact-form-title">Send a Message</h2>
            <p className="contact-form-sub">Fill in the form and we'll respond shortly.</p>

            {submitted && (
              <div className="contact-success">
                ✓ Thanks! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="cform-row">
                <div className="cform-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="cform-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>
              </div>
              <div className="cform-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us where you want to go, your dates, budget, or any questions…" required></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">
                Send Message →
              </button>
            </form>

            <div className="contact-or"><span>or</span></div>

            <a
              className="contact-whatsapp-btn"
              href={`https://wa.me/917353354226?text=${encodeURIComponent(`Hi TravelGuide, my name is ${formData.name || '...'}.\n\nMy message: ${formData.message || '...'}`)}`}
              target="_blank"
              rel="noreferrer"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
