'use client';

import Link from 'next/link';

export default function SagebrushPage() {
  return (
    <section className="page-section">
      {/* Hero */}
      <div className="ecosystem-hero">
        <div className="hero-visual"></div>
        <div className="eco-hero-content">
          <span className="text-gradient-orange" style={{ fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            WEALTH MANAGEMENT
          </span>
          <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '30px' }}>
            Sagebrush <span className="text-gradient">Wealth</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            Global wealth management and financial planning expertise. Helping high-net-worth individuals and families preserve, grow, and transfer wealth globally.
          </p>
          <div className="flex" style={{ gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#services" className="btn btn-primary">
              Manage Your Wealth
            </a>
            <Link href="/contact" className="btn btn-outline">
              Book Consultation
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
                About Sagebrush Wealth
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Sagebrush Wealth is a premier wealth management firm dedicated to serving high-net-worth individuals, families, and institutions. With 15+ years of experience across financial services and technology, we combine deep financial expertise with innovative solutions.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Our team is committed to delivering exceptional service, driving revenue growth, maintaining operational excellence, and upholding the highest governance standards in every client relationship.
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}>✓ 15+ Years Global Experience</li>
                <li style={{ marginBottom: '12px' }}>✓ Multi-Regional Expertise</li>
                <li style={{ marginBottom: '12px' }}>✓ Customized Solutions</li>
                <li style={{ marginBottom: '12px' }}>✓ Governance Excellence</li>
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
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>15+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>Global</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Multi-Regional Reach</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>HNW</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>High-Net-Worth Focus</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div id="services" style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '60px' }}>
            Wealth Management Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>💼</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Portfolio Management</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    Customized portfolio management tailored to your investment objectives, risk tolerance, and financial goals. We manage diversified portfolios across multiple asset classes and geographies.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>📊</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Financial Planning</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    Comprehensive financial planning services covering retirement planning, tax optimization, estate planning, and wealth transfer strategies tailored to your unique circumstances.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>🏛️</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Alternative Investments</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    Access to exclusive alternative investment opportunities including private equity, hedge funds, real estate, and other non-traditional assets for portfolio diversification.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>🌍</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Global Tax & Legal Advisory</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    Expert guidance on international tax planning, cross-border wealth management, and legal structures to optimize your financial position globally.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>👨‍👩‍👧‍👦</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Family Office Services</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    Comprehensive family office solutions including governance, succession planning, philanthropic advisory, and multi-generational wealth management.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', flexShrink: 0 }}>💳</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '10px' }}>Banking & Credit Solutions</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    Customized banking solutions, premium credit facilities, and liquidity management tailored to high-net-worth clients and institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Areas of Expertise
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px', color: 'var(--secondary)' }}>Investment Advisory</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Expert investment recommendations across equities, fixed income, and alternative assets</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px', color: 'var(--secondary)' }}>Business Strategy</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Strategic business planning and growth optimization for entrepreneurs</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px', color: 'var(--secondary)' }}>Market Expansion</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Support for market expansion and leading high-performing teams</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px', color: 'var(--secondary)' }}>Technology Integration</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Leveraging fintech and technology for wealth management efficiency</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px', color: 'var(--secondary)' }}>Estate Planning</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Comprehensive estate planning and wealth transfer strategies</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '15px', color: 'var(--secondary)' }}>Governance</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Operational excellence and governance standards maintenance</p>
            </div>
          </div>
        </div>

        {/* Client Focus */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Who We Serve
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>👔</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>High-Net-Worth Individuals</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Entrepreneurs and executives seeking comprehensive wealth management</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>👨‍👩‍👧</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Families</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Multi-generational wealth transfer and family governance</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🏢</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Institutions</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Corporations and pension funds with complex needs</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🌍</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Global Clients</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>International clients with cross-border wealth needs</p>
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Why Choose Sagebrush Wealth
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Experienced Team</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>15+ years of experience across financial services, fintech solutions, and technology-enabled business management</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Revenue Focus</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Proven track record in driving revenue growth and optimizing financial performance</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Operational Excellence</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Commitment to operational excellence and continuous improvement in service delivery</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Governance Excellence</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Highest standards of governance, ethics, and professional conduct in all engagements</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '30px' }}>
            Grow Your Wealth Strategically
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            Partner with Sagebrush Wealth to preserve, grow, and transfer your wealth with confidence and expertise.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Schedule Consultation</Link>
            <a href="https://www.sagebrushwealth.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
