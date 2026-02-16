'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    const form = e.currentTarget;

    const data = {
      fields: [
        { name: 'firstname', value: form.firstname.value },
        { name: 'lastname', value: form.lastname.value },
        { name: 'email', value: form.email.value },
        { name: 'subject', value: form.subject.value },
        { name: 'how_can_we_help_you', value: form.how_can_we_help_you.value },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    try {
      const res = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/147794956/88cb1e5a-c858-462a-9fa4-10b07fb2d9b9',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) throw new Error('Submission failed');

      setSuccess('Message sent successfully. We’ll get back to you shortly.');
      form.reset();
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-section">
      <div className="container section-padding">
        <div className="contact-layout">

          {/* LEFT INFO */}
          <div className="contact-info">
            <h1 className="contact-title">
              Let's build something great together.
            </h1>
            <p className="contact-subtitle">
              Have a question or proposal? Reach out to our team.
            </p>

            <div className="contact-detail">
              <h3>Headquarters</h3>
              <p>14, Babatunde Jose Street, Ikeja, Lagos, Nigeria.</p>
            </div>

            <div className="contact-detail">
              <h3>Email</h3>
              <p>info@capitalsagetechnology.com</p>
            </div>

            <div className="contact-detail">
              <h3>Social</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/capitalsagetechnology/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://x.com/capitalsagetech" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/capitalsagetech" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <input name="firstname" placeholder="First Name" required />
              <input name="lastname" placeholder="Last Name" required />
            </div>

            <input name="email" type="email" placeholder="Email Address" required />
            <input name="subject" placeholder="Subject" />
            <textarea
              name="how_can_we_help_you"
              rows={6}
              placeholder="How can we help you?"
              required
            />

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>

     {/* CSS */}
      <style jsx>{`
        .contact-layout {
          display: flex;
          gap: 60px;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        /* Left Info Section */
        .contact-info {
          flex: 1;
          min-width: 280px;
        }

        .contact-title {
          font-family: var(--font-head);
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.2;
          margin-bottom: 20px;
          color: white;
        }

        .contact-subtitle {
          color: var(--text-muted);
          margin-bottom: 30px;
          font-size: clamp(0.95rem, 2vw, 1.2rem);
          line-height: 1.6;
        }

        .contact-detail {
          margin-bottom: 25px;
        }

        .contact-detail h3 {
          color: var(--secondary);
          margin-bottom: 8px;
          font-size: 1rem;
        }

        .contact-detail p {
          color: #ccc;
          font-size: 0.95rem;
        }

        .social-links {
          display: flex;
          gap: 15px;
          font-size: 1.5rem;
        }

        .social-links a {
          color: var(--text-muted);
          transition: color 0.3s;
        }

        .social-links a:hover {
          color: var(--primary);
        }

        /* Form Section */
        .contact-form {
          flex: 1;
          min-width: 280px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        input,
        textarea {
          width: 100%;
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: #1e293b;
          color: white;
          font-size: 0.95rem;
        }

        input::placeholder,
        textarea::placeholder {
          color: var(--text-muted);
        }

        textarea {
          resize: none;
        }

        .btn-primary {
          width: 100%;
          padding: 14px 0;
          border: none;
          border-radius: 8px;
          background: var(--primary);
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s;
        }

        .btn-primary:hover {
          background: var(--secondary);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-layout {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .contact-layout {
            flex-direction: column;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
