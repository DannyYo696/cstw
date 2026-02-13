'use client';

import Link from 'next/link';

export default function KolomoniPage() {
  return (
    <section className="page-section">
      {/* Hero */}
      <div className="ecosystem-hero">
        <div className="hero-visual"></div>
        <div className="eco-hero-content">
          <span className="text-gradient-orange" style={{ fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            DIGITAL MICROFINANCE
          </span>
          <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '30px' }}>
            Kolomoni <span className="text-gradient">MFB</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            Africa's trusted microfinance bank delivering comprehensive financial services to millions of customers across Nigeria and The Gambia.
          </p>
          <div className="flex" style={{ gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop:'50px' }}>
            <a href="#features" className="btn btn-primary">
              Explore Services
            </a>
            <Link href="/contact" className="btn btn-outline">
              Get Started
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
                About Kolomoni
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Kolomoni Microfinance Bank serves both rural and urban communities with a comprehensive range of financial services and payment solutions.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Licensed by the Central Bank of Nigeria (CBN) as a Microfinance Bank and by the Central Bank of The Gambia as a Microfinance Institution, we're committed to advancing financial inclusion across Africa.
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}>✓ MFB Licensed in Nigeria by CBN</li>
                <li style={{ marginBottom: '12px' }}>✓ MFI Licensed in The Gambia by CBG</li>
                <li style={{ marginBottom: '12px' }}>✓ Serving 10M+ Customers</li>
                <li style={{ marginBottom: '12px' }}>✓ 65,000+ Terminals Deployed</li>
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
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>30B</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Monthly Transaction Volume</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>65K+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Terminals Deployed</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>10M+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Customers Served Monthly</div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Banking App */}
        <div id="features" style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '60px' }}>
            Kolomoni Digital Banking App
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '40px', maxWidth: '800px' }}>
            A full-service digital banking app offering savings plans, instant transfers, bill payments, Snap-and-Pay convenience, and access to credit—secure, fast, and built for everyday Nigerians.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--secondary)' }}>💳</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Receive & Send Funds</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Instant money transfers to any bank</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--secondary)' }}>📈</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Savings Plans</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Flexible savings with attractive returns</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--secondary)' }}>🧾</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Bill Payments</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Pay utilities and subscriptions instantly</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--secondary)' }}>📱</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Airtime & Data</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Top up instantly anytime, anywhere</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--secondary)' }}>🎯</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Snap & Pay</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Scan and pay for goods instantly</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--secondary)' }}>💰</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Access to Credit</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Quick loans based on your profile</p>
            </div>
          </div>
        </div>

        {/* Business Banking */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '30px' }}>
            Kolomoni Business Banking
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '50px', maxWidth: '900px' }}>
            Kolomoni Business Banking supports high-volume daily deposits, payments, and withdrawals across multiple locations. Our nationwide network of merchants and agents operates across all states, delivering accessible business banking services at scale.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px' }}>Airtime/Data Purchase</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Bulk airtime purchasing with competitive rates for resellers</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px' }}>Payments & Transfers</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Seamless payment processing and inter-bank transfers</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px' }}>Account Opening</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Quick and easy business account setup with minimal requirements</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px' }}>Utility Bill Payments</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Pay electricity, water, and other utility bills instantly</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px' }}>Business Deposits</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Daily deposit collection from multiple locations nationwide</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px' }}>Merchant Solutions</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Specialized payment solutions for retail and e-commerce</p>
            </div>
          </div>
        </div>

        {/* Specialized Offerings */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Specialized Offerings
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '25px', color: 'var(--secondary)' }}>
                Financial Intermediation
              </h3>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}>✓ SMEs and Corporate accounts</li>
                <li style={{ marginBottom: '12px' }}>✓ Kiddies Account with savings incentives</li>
                <li style={{ marginBottom: '12px' }}>✓ Individual Loan products</li>
                <li style={{ marginBottom: '12px' }}>✓ Business Loan with flexible terms</li>
                <li style={{ marginBottom: '12px' }}>✓ Asset Financing solutions</li>
                <li style={{ marginBottom: '12px' }}>✓ Group loans and savings</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '25px', color: 'var(--secondary)' }}>
                Women Banking & Digital Products
              </h3>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}>✓ Micro women loans</li>
                <li style={{ marginBottom: '12px' }}>✓ Group lending and savings programs</li>
                <li style={{ marginBottom: '12px' }}>✓ Financial literacy programmes</li>
                <li style={{ marginBottom: '12px' }}>✓ Women savings account with benefits</li>
                <li style={{ marginBottom: '12px' }}>✓ Corporate internet banking</li>
                <li style={{ marginBottom: '12px' }}>✓ Mobile wallet solutions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Geographic Reach */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Geographic Reach & Market Presence
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px' }}>2</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '5px' }}>Countries</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Nigeria & The Gambia</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px' }}>36</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '5px' }}>States</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Nationwide coverage in Nigeria</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px' }}>1000+</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '5px' }}>Merchants & Agents</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Nationwide agent network</p>
            </div>
          </div>
        </div>

        {/* Compliance & Security */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Compliance & Security
          </h2>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🔐</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>CBN Licensed</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Regulated by Central Bank of Nigeria</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>✓</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>PCI-DSS Certified</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Highest security standards</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>📋</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>NDPA Compliant</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Data protection regulations adhered</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🌍</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>GDPR Compliant</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>International privacy standards</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '30px' }}>
            Ready to Join Millions of Users?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            Experience seamless digital banking with Kolomoni's secure, fast, and innovative financial solutions.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Download App Now</button>
            <Link href="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
