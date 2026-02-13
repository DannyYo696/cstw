'use client';

import React from "react"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <section className="page-section">
      <div className="container section-padding">
        <div className="contact-layout">
          <div>
            <h1 style={{ fontFamily: 'var(--font-head)', fontSize: '3.5rem', lineHeight: 1.1 }}>
              Let's build something great together.
            </h1>
            <p style={{ color: 'var(--text-muted)', margin: '30px 0' }}>
              Have a question or proposal? Reach out to our team.
            </p>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>Headquarters</h3>
              <p style={{ color: '#ccc' }}>14, Babatunde Jose Street, Ikeja, Lagos, Nigeria.</p>
            </div>
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>Email</h3>
              <p style={{ color: '#ccc' }}>info@capitalsagetechnology.com</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>Social</h3>
              <div style={{ display: 'flex', gap: '20px', fontSize: '1.5rem' }}>
                <a href="#" style={{ color: 'var(--text-muted)', transition: '0.3s' }}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" style={{ color: 'var(--text-muted)', transition: '0.3s' }}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" style={{ color: 'var(--text-muted)', transition: '0.3s' }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" />
            <textarea rows={6} placeholder="How can we help you?" required></textarea>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
