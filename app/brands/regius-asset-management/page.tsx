'use client';

import Link from 'next/link';

export default function RegiusAMPage() {
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
            Regius Asset <span className="text-gradient">Management</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            Building prosperity for Africans. We safeguard client capital with rigorous research and systematic investment approaches to deliver consistent, market-outperforming returns.
          </p>
          <div className="flex" style={{ gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#services" className="btn btn-primary">
              Invest Now
            </a>
            <Link href="/contact" className="btn btn-outline">
              Schedule Meeting
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
                About Regius Asset Management
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Regius Asset Management Limited (RAML) is registered and licensed by the Securities and Exchange Commission (SEC), Nigeria as a Fund/Portfolio Manager. We assist individual and institutional investors with tailored strategies to achieve their investment goals and grow their portfolios through a range of solutions.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                We safeguard client capital with the highest level of discipline, leveraging rigorous research, sound judgment, and a systematic investment approach to deliver consistent, market-outperforming returns.
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}>✓ SEC Licensed & Regulated</li>
                <li style={{ marginBottom: '12px' }}>✓ 19+ Years Collective Experience</li>
                <li style={{ marginBottom: '12px' }}>✓ Multi-Asset Expertise</li>
                <li style={{ marginBottom: '12px' }}>✓ Ethical & Integrity-Driven</li>
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
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>19+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Years Investment Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>Multi-Asset</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Portfolio Management</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '5px' }}>Institutional</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Grade Services</div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Solutions */}
        <div id="services" style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '60px' }}>
            Our Solutions
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                Portfolio Management Services
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Offered as discretionary or non-discretionary services to institutions, our investment managers and advisors design and implement bespoke investment vehicles tailored to your needs. We create personalized multi-asset and single or multi-currency portfolios for institutions seeking customized investment strategies.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem' }}>Discretionary Management</p>
                </div>
                <div style={{ padding: '12px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem' }}>Non-Discretionary Service</p>
                </div>
                <div style={{ padding: '12px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem' }}>Multi-Asset Portfolios</p>
                </div>
                <div style={{ padding: '12px', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px' }}>
                  <p style={{ color: 'white', fontSize: '0.9rem' }}>Multi-Currency Options</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                Advisory Services
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
                We provide a range of advisory services targeted at optimizing returns in line with your investment guardrails and firm peculiarities. Our advisory services include full-scale research and advice from initial capital raise stages to financial close, supporting investment decks, models, and term sheets.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                Mutual Funds
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Our mutual funds are regulated by the SEC and serve as vehicles with specific investment objectives and risk profiles. Suitable for savings, wealth accumulation, and diversification by individuals and institutions seeking professionally managed investment vehicles.
              </p>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', marginBottom: '15px', color: 'var(--secondary)' }}>
                Fixed Income Notes
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                We offer fixed income solutions providing stable, predictable returns for conservative investors seeking capital preservation with steady income generation.
              </p>
            </div>
          </div>
        </div>

        {/* Investment Approach */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Our Investment Philosophy
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🔍</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Rigorous Research</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Deep market analysis and due diligence</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>⚖️</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Sound Judgment</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Experienced decision-making processes</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>📊</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Systematic Approach</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Disciplined investment methodology</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>💼</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Capital Safeguarding</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Highest level of client protection</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>🎯</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Return Optimization</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Market-outperforming results</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: 'var(--secondary)' }}>✓</div>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', marginBottom: '10px' }}>Ethical Conduct</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Integrity & fair dealing standards</p>
            </div>
          </div>
        </div>

        {/* Asset Classes */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Asset Classes & Expertise
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '20px', color: 'var(--secondary)' }}>Fixed Income</h4>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '10px' }}>✓ Government Bonds</li>
                <li style={{ marginBottom: '10px' }}>✓ Corporate Bonds</li>
                <li style={{ marginBottom: '10px' }}>✓ Treasury Bills</li>
                <li style={{ marginBottom: '10px' }}>✓ Money Market Instruments</li>
              </ul>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '20px', color: 'var(--secondary)' }}>Equities</h4>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '10px' }}>✓ Blue Chip Stocks</li>
                <li style={{ marginBottom: '10px' }}>✓ Growth Stocks</li>
                <li style={{ marginBottom: '10px' }}>✓ Dividend Stocks</li>
                <li style={{ marginBottom: '10px' }}>✓ Emerging Opportunities</li>
              </ul>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '20px', color: 'var(--secondary)' }}>Alternative Investments</h4>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '10px' }}>✓ Real Estate Funds</li>
                <li style={{ marginBottom: '10px' }}>✓ Structured Products</li>
                <li style={{ marginBottom: '10px' }}>✓ Commodity Exposure</li>
                <li style={{ marginBottom: '10px' }}>✓ Private Equity</li>
              </ul>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', marginBottom: '20px', color: 'var(--secondary)' }}>Multi-Currency</h4>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '10px' }}>✓ USD Portfolios</li>
                <li style={{ marginBottom: '10px' }}>✓ EUR Holdings</li>
                <li style={{ marginBottom: '10px' }}>✓ GBP Investments</li>
                <li style={{ marginBottom: '10px' }}>✓ Currency Hedging</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Client Benefits */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '50px' }}>
            Why Choose Regius Asset Management
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Expert Team</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>19+ years of collective investment and portfolio management experience</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>SEC Licensed</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Regulated fund/portfolio manager with client protection standards</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Customized Solutions</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Tailored investment strategies aligned with your goals and risk profile</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', marginBottom: '15px', color: 'var(--secondary)' }}>Ethical Standards</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>Highest standards of ethics, integrity, and fair dealing</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '30px' }}>
            Build Prosperity Today
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            Let us help you grow your wealth with expert investment management and tailored portfolio solutions.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Schedule Investment Meeting</Link>
            <a href="https://www.regiusam.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
