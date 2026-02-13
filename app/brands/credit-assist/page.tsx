'use client';

import Link from 'next/link';

export default function CreditAssistPage() {
  return (
    <section className="page-section">
      {/* Hero */}
      <div className="ecosystem-hero">
        <div className="hero-visual"></div>
        <div className="eco-hero-content">
          <span className="text-gradient-orange" style={{ fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            AGRICULTURE FINANCE
          </span>
          <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '30px' }}>
            CreditAssist <span className="text-gradient">Investment</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            Bridging the gap in agricultural financing. We unlock capital market funding for Nigeria's commodity value chains and agribusiness SMEs with innovative financial solutions.
          </p>
          <div className="flex" style={{ gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#services" className="btn btn-primary">
              Get Financing
            </a>
            <Link href="/contact" className="btn btn-outline">
              Partner With Us
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
                About CreditAssist
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                CreditAssist Investment Limited is a member of CapitalSage Holdings, dedicated to unlocking capital market funding for Nigeria's commodity value chains, especially small and medium-scale enterprises (SMEs).
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                We design innovative financial products that drive working capital into agro and food-based businesses, enabling critical growth across the entire value chain. From debt factoring and trade financing to asset-backed securitization and financial advisory, CreditAssist bridges the gap in agriculture finance with tailored, impact-driven solutions.
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}>✓ Agriculture Finance Specialist</li>
                <li style={{ marginBottom: '12px' }}>✓ Capital Market Integration</li>
                <li style={{ marginBottom: '12px' }}>✓ MSME-Focused Solutions</li>
                <li style={{ marginBottom: '12px' }}>✓ Impact-Driven Finance</li>
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
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>$Billions</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Funding Gap to Address</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>100K+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Agribusiness SMEs</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>Full Value Chain</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Coverage & Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products & Services */}
        <div id="services" style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '60px' }}>
            Financial Products & Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>📋</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Debt Factoring</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Convert receivables into immediate working capital for agricultural businesses and commodity traders</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>🚢</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Trade Financing</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Finance commodity trading activities and supply chain operations for agricultural value chains</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>🏗️</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Asset-Backed Securitization</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Structure agricultural assets and commodity inventories into capital market instruments for scaling</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>🎯</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Financial Advisory</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Strategic financial guidance for agribusiness growth, expansion, and capital market access</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target Sectors */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Sectors We Serve
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '25px', color: 'var(--secondary)' }}>
                Agricultural Sectors
              </h3>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '2' }}>
                <li>✓ Cocoa Traders & Exporters</li>
                <li>✓ Cashew Nut Businesses</li>
                <li>✓ Ginger Farmers & Processors</li>
                <li>✓ Crop Farming Operations</li>
                <li>✓ Agro-processing Companies</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '25px', color: 'var(--secondary)' }}>
                Related Industries
              </h3>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '2' }}>
                <li>✓ Food Processing Companies</li>
                <li>✓ Personal Care Companies</li>
                <li>✓ Packaging Suppliers</li>
                <li>✓ Recycling Operations</li>
                <li>✓ Logistics & Distribution</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Why Choose CreditAssist
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🌾</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Agriculture Expertise</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Deep understanding of agribusiness challenges and opportunities</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>💡</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Innovative Solutions</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Tailored financial products for SME needs</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>📈</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Capital Access</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Bridge to capital markets and growth funding</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🌍</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Impact Focus</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Driving sustainable economic growth in agriculture</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>⚡</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Fast Processing</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Quick turnaround for financing decisions</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🤝</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Partnership Approach</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Long-term growth partnership mentality</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Our Mission & Vision
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Our Mission</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                To close the funding deficit in Nigeria's agricultural sector—transforming potential into measurable economic progress.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Our Vision</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                To become a leading finance house focused on agribusiness, unlocking capital and enabling sustainable growth across Africa's agricultural value chains.
              </p>
            </div>
          </div>
        </div>

        {/* Impact & Scale */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Scale & Impact
          </h2>
          <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '20px', padding: '50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px' }}>$Billions</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '5px' }}>Funding Gap</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>to address in Nigerian agriculture</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px' }}>100K+</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '5px' }}>Agribusiness SMEs</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>to be funded and supported</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px' }}>Full Value Chain</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '5px' }}>Coverage</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>from farmers to exporters</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '30px' }}>
            Unlock Your Agricultural Potential
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            Access innovative financing solutions tailored for your agribusiness growth and expansion.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Apply for Financing</Link>
            <Link href="/contact" className="btn btn-outline">Schedule Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
