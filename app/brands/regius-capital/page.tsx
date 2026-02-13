'use client';

import Link from 'next/link';

export default function RegiusCapitalPage() {
  return (
    <section className="page-section">
      {/* Hero */}
      <div className="ecosystem-hero">
        <div className="hero-visual"></div>
        <div className="eco-hero-content">
          <span className="text-gradient-orange" style={{ fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            CAPITAL MARKETS
          </span>
          <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '30px' }}>
            Regius <span className="text-gradient">Capital</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            Making capital markets work for Africans. We advise, structure, and distribute debt and equity solutions that turn your growth plans into financed reality.
          </p>
          <div className="flex" style={{ gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#services" className="btn btn-primary">
              Explore Services
            </a>
            <Link href="/contact" className="btn btn-outline">
              Schedule Consultation
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
                About Regius Capital
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Regius Capital Limited advises, structures, and distributes debt and equity solutions for a diverse range of clients. We partner with corporates, development finance institutions (DFIs), and asset managers to turn your growth plans into a financed reality.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                As a licensed issuing house, we provide comprehensive capital market solutions with a focus on long-term partnerships and sustainable value creation.
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}>✓ Licensed Issuing House</li>
                <li style={{ marginBottom: '12px' }}>✓ Transaction Advisory Expertise</li>
                <li style={{ marginBottom: '12px' }}>✓ $500M+ Transactions Executed</li>
                <li style={{ marginBottom: '12px' }}>✓ Pan-African Coverage</li>
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
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>$500M+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Transactions Facilitated</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>$100M+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Capital Raises Completed</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>17+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div id="services" style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '60px' }}>
            Our Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>📊</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Financial Advisory</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    We provide transaction advisory across mergers and acquisitions, spin-offs, restructurings, and divestitures. Our team delivers full-scale research and advice from initial capital raise stages to financial close, including supporting investment decks, models, and term sheets.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>💳</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Debt Capital Markets</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    We structure and raise debt through commercial papers, corporate bonds, term notes, and private placements. Our expertise spans structured finance, syndication, and innovative debt instruments tailored to your funding requirements.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>📈</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Equity Capital Markets</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    We assist clients seeking growth capital through public offerings, rights issues, and private placements. Our team manages investor engagement and ensures successful capital market access for expansion and growth initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>🔏</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Underwriting Services</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    As a licensed issuing house, we underwrite debt and equity issues to improve market confidence and ensure successful securities placement in the capital market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Core Capabilities
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px', color: 'var(--secondary)' }}>M&A Advisory</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Expert guidance on mergers, acquisitions, and strategic transactions</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px', color: 'var(--secondary)' }}>Financial Modeling</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Sophisticated financial models and valuation analysis</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px', color: 'var(--secondary)' }}>Investor Relations</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Strategic investor engagement and communications</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px', color: 'var(--secondary)' }}>Deal Structuring</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Innovative transaction structures optimized for value</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px', color: 'var(--secondary)' }}>Compliance & Legal</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Full regulatory compliance and legal documentation support</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px', color: 'var(--secondary)' }}>Post-Deal Integration</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Strategic planning for successful deal execution</p>
            </div>
          </div>
        </div>

        {/* Track Record */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Track Record
          </h2>
          <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '20px', padding: '50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px' }}>$500M+</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '5px' }}>Transactions</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Deals valued over $500 million</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px' }}>$100M+</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '5px' }}>Capital Raised</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Successfully raised for clients</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px' }}>100+</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '5px' }}>Transactions Executed</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Completed deals across sectors</p>
            </div>
          </div>
        </div>

        {/* Sectors Served */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Sectors We Serve
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
            {['Financial Services', 'Technology & Telecom', 'Manufacturing & FMCG', 'Energy & Infrastructure', 'Agriculture & Agribusiness', 'Real Estate & Construction', 'Healthcare & Pharmaceuticals', 'Transportation & Logistics'].map((sector) => (
              <div key={sector} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ fontSize: '1.5rem', color: 'var(--secondary)' }}>✓</div>
                <p style={{ color: 'white', fontWeight: 500 }}>{sector}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partner With Us */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Why Partner With Regius Capital
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Deep Market Knowledge</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Extensive understanding of African capital markets and investor landscape with 17+ years of experience</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Pan-African Network</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Relationships with development finance institutions, corporates, and investors across the continent</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Proven Track Record</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Successful execution of over $500M in transactions and $100M+ capital raises</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Long-Term Partnership</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Committed to your sustainable value creation beyond deal completion</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '30px' }}>
            Ready to Access Capital Markets?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            Let us help you turn your growth plans into financed reality with expert capital market solutions.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Schedule Consultation</Link>
            <a href="https://www.regiuscapital.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Visit Website</a>
          </div>
        </div>
      </div>
    </section>
  );
}
