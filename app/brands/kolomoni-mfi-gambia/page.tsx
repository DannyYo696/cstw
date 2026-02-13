'use client';

import Link from 'next/link';

export default function KolomoniGambiaPage() {
  return (
    <section className="page-section">
      {/* Hero */}
      <div className="ecosystem-hero">
        <div className="hero-visual"></div>
        <div className="eco-hero-content">
          <span className="text-gradient-orange" style={{ fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            MICROFINANCE INSTITUTION
          </span>
          <h1 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '30px' }}>
            Kolomoni <span className="text-gradient">MFI Gambia</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            Bringing inclusive microfinance solutions to The Gambia's underserved communities and small businesses.
          </p>
          <div className="flex" style={{ gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                About Kolomoni MFI Gambia
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Operating under the regulatory framework of the Central Bank of The Gambia, Kolomoni MFI Gambia brings accessible microfinance services to rural and underserved communities.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                We are committed to empowering small businesses, traders, and individuals with affordable credit and comprehensive financial solutions tailored to the Gambian market.
              </p>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}>✓ Licensed MFI in The Gambia</li>
                <li style={{ marginBottom: '12px' }}>✓ CBG Regulated Operations</li>
                <li style={{ marginBottom: '12px' }}>✓ Community-Focused Services</li>
                <li style={{ marginBottom: '12px' }}>✓ Affordable Credit Solutions</li>
                <li style={{ marginBottom: '12px' }}>✓ Digital Financial Tools</li>
              </ul>
            </div>
            <div style={{ backgroundColor: 'var(--bg-card)', borderRadius: '20px', border: '1px solid var(--border)', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', minHeight: '400px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px' }}>2+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Active Regions</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px' }}>50K+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Active Members</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '10px' }}>CBG</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Licensed & Regulated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div style={{ paddingTop: '120px', paddingBottom: '120px' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '60px', textAlign: 'center' }}>
            Comprehensive Microfinance Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '30px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>
                💰
              </div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', fontWeight: 600, marginBottom: '12px' }}>Personal Loans</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Flexible personal loans designed for individual financial needs with competitive interest rates and quick processing.</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '30px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>
                🏪
              </div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', fontWeight: 600, marginBottom: '12px' }}>Business Credit</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Tailored business loans for small traders and entrepreneurs to expand operations and working capital.</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '30px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>
                💳
              </div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', fontWeight: 600, marginBottom: '12px' }}>Savings & Deposits</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Secure savings accounts with attractive interest rates to help you build financial security.</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '30px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>
                📱
              </div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', fontWeight: 600, marginBottom: '12px' }}>Digital Banking</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Mobile-first digital banking solutions for convenient access to your accounts anytime, anywhere.</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '30px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>
                🔄
              </div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', fontWeight: 600, marginBottom: '12px' }}>Money Transfers</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Fast and reliable domestic money transfer services connecting communities across The Gambia.</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '30px' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>
                🎓
              </div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', fontWeight: 600, marginBottom: '12px' }}>Financial Literacy</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>Educational programs to help members build financial management and investment skills.</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div style={{ paddingTop: '120px', paddingBottom: '120px' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '60px', textAlign: 'center' }}>
            Why Choose Kolomoni MFI Gambia
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', color: 'var(--secondary)' }}>🏆 Market Leadership</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>Established track record of serving Gambian communities with trusted, reliable microfinance solutions that empower businesses and individuals.</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', color: 'var(--secondary)' }}>⚡ Fast Processing</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>Quick loan application and approval process with minimal documentation, getting you funds when you need them most.</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', color: 'var(--secondary)' }}>🔒 Security & Trust</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>CBG regulated operations with robust security measures protecting your financial information and deposits at all times.</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '40px' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', color: 'var(--secondary)' }}>🌍 Community Support</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>Dedicated to supporting local businesses and individual financial growth through tailored products and community engagement.</p>
            </div>
          </div>
        </div>

        {/* Compliance */}
        <div style={{ paddingTop: '120px', paddingBottom: '120px' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '60px', textAlign: 'center' }}>
            Regulatory Compliance & Security
          </h2>
          <div style={{ backgroundColor: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.1))', border: '1px solid var(--border)', borderRadius: '20px', padding: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📋</div>
                <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>CBG Regulated</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Operating under Central Bank of The Gambia regulatory oversight and compliance framework.</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🔐</div>
                <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>Data Security</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Advanced encryption and security protocols protecting all customer data and transactions.</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '15px' }}>✅</div>
                <h4 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>AML/KYC Compliance</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Stringent anti-money laundering and know-your-customer procedures for financial integrity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ paddingTop: '80px', paddingBottom: '120px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '30px' }}>
            Ready to Join Kolomoni MFI Gambia?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px' }}>
            Start your financial journey with us and access the microfinance services you need to grow.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Open Your Account Today
          </Link>
        </div>
      </div>
    </section>
  );
}
