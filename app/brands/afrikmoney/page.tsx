'use client';

import Link from 'next/link';

export default function AfrikmoneyPage() {
  return (
    <section className="page-section">
      {/* Hero */}
      <div className="ecosystem-hero">
        <div className="hero-visual"></div>
        <div className="eco-hero-content">
          <span className="text-gradient-orange" style={{ fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            CROSS-BORDER REMITTANCE
          </span>
          <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '30px' }}>
            Afrikmoney <span className="text-gradient">Remittance</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            Seamless, secure, and affordable cross-border money transfers from the UK to Africa with real-time payouts and competitive exchange rates.
          </p>
          <div className="flex" style={{ gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#features" className="btn btn-primary">
              Send Money Now
            </a>
            <Link href="/contact" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Overview Section */}
        <div style={{ paddingTop: '120px', paddingBottom: '120px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '30px' }}>
                About Afrikmoney
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Afrikmoney Ltd is a UK-based digital remittance company founded in July 2020 and registered as a Small Payment Institution (SPI) with the Financial Conduct Authority. Headquartered in Reading, England, we specialize in secure, fast, and affordable cross-border money transfers from the United Kingdom to African corridors.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Following strategic investment by CapitalSage Technology Limited, Afrikmoney is positioned for accelerated growth, leveraging deep fintech capability and expertise across Africa.
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}>✓ FCA Regulated & Licensed</li>
                <li style={{ marginBottom: '12px' }}>✓ UK-Based with African Reach</li>
                <li style={{ marginBottom: '12px' }}>✓ Real-Time Processing</li>
                <li style={{ marginBottom: '12px' }}>✓ Competitive Exchange Rates</li>
              </ul>
            </div>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '25px'
            }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>4</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Active Remittance Corridors</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>24/7</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Digital Access Available</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>2020</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Founded in Reading, UK</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products & Services */}
        <div id="features" style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '60px' }}>
            Products & Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                Web-Based Remittance Platform
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Secure online remittance with electronic verification, multiple payment options, and fast beneficiary payouts. UK users send money via debit card, bank transfer, or open banking with real-time processing and instant notifications.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                Tiki Mobile App (by Kolomoni)
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Powered by CapitalSage's Technology pan-African infrastructure, Tiki is Afrikmoney's digital app for fast, secure, and seamless money transfers from the UK to Africa, delivering real-time payouts and competitive exchange rates.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                Instant Payout & Cash-Out Services
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Integration with African banking systems and agent networks to ensure funds are accessible, including in remote locations. Direct payouts to local bank accounts and wallets.
              </p>
            </div>
          </div>
        </div>

        {/* Tiki Features */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '60px' }}>
            Tiki App Top Features
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>⚡</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Instant Transfers</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Send money instantly from UK to Nigeria & The Gambia</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>💱</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Real-Time Rates</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Real-time exchange rates with instant GBP conversion</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>👥</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>P2P Transfers</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Instant transfers to friends, family, and Tiki users</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🏦</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Bank Payouts</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Direct payouts to local bank accounts & wallets</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>💳</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Multi-Currency Wallet</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Hold and manage GBP, USD, and EUR</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🔐</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>24/7 Access</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Send money anytime, anywhere securely</p>
            </div>
          </div>
        </div>

        {/* Remittance Corridors */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Active Remittance Corridors
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🇳🇬</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '10px' }}>Nigeria</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>UK to Nigeria transfers</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🇬🇲</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '10px' }}>The Gambia</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>UK to Gambia transfers</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🇨🇲</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '10px' }}>Cameroon</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>UK to Cameroon transfers</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🇨🇦</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '10px' }}>Canada</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>International transfers available</p>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Why Choose Afrikmoney
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                Solution Built For African Needs
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                Local relevance with global standards. We deliver fast, near-instant cross-border transfers with competitive rates and real-time notifications, powered by strong UK regulation and CapitalSage's pan-African fintech infrastructure.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                Supported By Strong Governance
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                We operate under a robust governance framework aligned with FCA requirements, Payment Services Regulations 2017, and AML/CTF laws, supported by strong internal controls and independent oversight.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance & Security */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Security & Compliance
          </h2>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>✓</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>FCA Regulated</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Licensed as Small Payment Institution</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🔒</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Bank-Grade Security</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Advanced encryption and security protocols</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>📋</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>AML/CTF Compliant</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Anti-money laundering compliance</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🌍</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Global Standards</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>International best practices</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>👤</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>KYC Verification</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Know Your Customer procedures</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>📱</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Biometric Auth</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Multi-factor authentication available</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '30px' }}>
            Send Money Today
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            Start sending money to Africa instantly with Tiki by Kolomoni. Secure, fast, and affordable transfers.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.tikibykolomoni.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download Tiki App
            </a>
            <Link href="/contact" className="btn btn-outline">Contact Support</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
