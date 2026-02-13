'use client';

import Link from 'next/link';

export default function ERCASPayPage() {
  return (
    <section className="page-section">
      {/* Hero */}
      <div className="ecosystem-hero">
        <div className="hero-visual"></div>
        <div className="eco-hero-content">
          <span className="text-gradient-orange" style={{ fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            PAYMENT GATEWAY
          </span>
          <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '30px' }}>
            ERCAS <span className="text-gradient">Pay</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            PAY | COLLECT | RECONCILE. A full suite of payment and value-added API solutions to help you manage your payment systems seamlessly and accelerate business growth.
          </p>
          <div className="flex" style={{ gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#features" className="btn btn-primary">
              Explore Solutions
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
                About ERCAS
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                ERCAS Integrated Payment Services Limited powers an array of digital solutions that transform day-to-day financial and business activities. We are driving technological inclusion for small, medium, and large-scale businesses by offering secured payment platforms, value-added services, digital solutions, and innovative business systems.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                As a PSSP company licensed by the Central Bank of Nigeria (CBN), we have built fully-integrated platforms and tools for many businesses and organizations across Nigeria.
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}>✓ CBN Licensed PSSP Company</li>
                <li style={{ marginBottom: '12px' }}>✓ Trusted by 100,000+ merchants</li>
                <li style={{ marginBottom: '12px' }}>✓ 98% transaction completion rate</li>
                <li style={{ marginBottom: '12px' }}>✓ PCI-DSS Certified</li>
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
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>100K+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Merchants & Businesses</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>₦1T+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Annual Transaction Volume</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>98%</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Transaction Completion Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Products */}
        <div id="features" style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '60px' }}>
            Core Products & Solutions
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                ERCASPAY Gateway
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Our unified payment gateway spanning web, POS, and SoftPOS, combined with card issuing, API integrations, and on-chain cloud hosting for value-added digital services.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>Web Payment Gateway</p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>POS Terminal Solutions</p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>SoftPOS Technology</p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>Card Issuing Services</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                Collections Platform
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
                A scalable payroll and collections infrastructure that centralizes recurring payments, simplifies reconciliation, and supports compliance for public and private sector institutions.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>Payroll Processing</p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>Recurring Payments</p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>Automated Reconciliation</p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>Compliance Reporting</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                API & Cloud Hub
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Our API and on-chain cloud infrastructure hub, providing businesses with secure access to a broad range of value-added service APIs and cloud services.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>RESTful APIs</p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>Cloud Infrastructure</p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>Value-Added Services</p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 600 }}>Blockchain Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Technology & Security
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🔐</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>PCI-DSS Certified</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Highest payment card industry security standards</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>✓</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>NDPA Compliant</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Data protection regulations adherence</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🌍</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>GDPR Compliant</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>International privacy standards</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>⚡</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>99.99% Uptime</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Enterprise-grade infrastructure reliability</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>📊</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Real-Time Analytics</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Comprehensive transaction insights and reporting</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🔄</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Instant Settlements</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Fast fund disbursement and reconciliation</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Industry Solutions
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>E-Commerce & Retail</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Complete payment solutions for online and offline retail businesses, from gateway integration to POS systems.</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Government & Public Sector</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Scalable collection platforms for tax, utilities, and service payments with full compliance.</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Financial Services</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Payment processing, transfers, and settlement services for banks and fintech companies.</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Corporate & SMEs</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Payroll, vendor payments, and expense management solutions for organizations of all sizes.</p>
            </div>
          </div>
        </div>

        {/* Developer Resources */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Developer-Friendly Integration
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '50px', maxWidth: '900px' }}>
            ERCAS provides comprehensive APIs and documentation to help developers integrate payment solutions quickly and securely into their applications.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '15px' }}>Comprehensive Documentation</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Detailed API documentation with code examples in multiple languages</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '15px' }}>Sandbox Environment</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Safe testing environment for development and integration testing</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '15px' }}>24/7 Support</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Round-the-clock developer support for integration assistance</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '15px' }}>SDKs & Libraries</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Pre-built SDKs for popular programming languages</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '15px' }}>Webhooks & Events</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Real-time event notifications for transaction monitoring</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '15px' }}>Test Data</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Realistic test data for comprehensive testing scenarios</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '30px' }}>
            Transform Your Payments Today
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            Join thousands of businesses using ERCASPAY for secure, scalable payment solutions.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.ercas.ng" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit ERCAS.ng
            </a>
            <Link href="/contact" className="btn btn-outline">Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
