'use client';

import Link from 'next/link';
import { useState } from 'react';
import DocumentationModal from '@/components/DocumentationModal';

export default function HomePage() {
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);

  return (
    <section className="page-section">
      <DocumentationModal isOpen={isDocsModalOpen} onClose={() => setIsDocsModalOpen(false)} />
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-visual"></div>
        <div className="floating-card fc-1">
          <i style={{ color: '#f97316' }} className="fas fa-store"></i>
          <div>100,000+</div>
          <div>Merchants & Agents</div>
        </div>
        <div className="floating-card fc-2">
          <i style={{ color: '#f97316' }} className="fas fa-users"></i>
          <div>10 Million+</div>
          <div>Customers Served</div>
        </div>

        <div className="hero-content">
          <h1>
            Empowering <span className="text-gradient-orange">Africa's</span>
            <br />
            Financial Future
          </h1>
          <p style={{ color: 'white' }}>
            We operate an agile ecosystem of inclusive financial, fintech and value-added services, driven by innovation and purpose-built for African markets.
          </p>
          <div className="flex" style={{ gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/ecosystem" className="btn btn-primary">
              Explore Ecosystem
            </Link>
            <Link href="/about" className="btn btn-outline">
              Our Vision
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/svillage/b01dd224e847135fc6b636c8cd74e60c397d6a59/ercas.webp" alt="ErcasPay" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/ca15e2ba3318b9e7c16ee4e9a04a9490753ad14a/KM%20ICON.png" alt="Kolomoni" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/8b5789806dd63541d97f3f92491e445032fc2e09/Rc_capital.png" alt="Regius" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/8b5789806dd63541d97f3f92491e445032fc2e09/Rc_AM.png" alt="Regius AM" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/8b5789806dd63541d97f3f92491e445032fc2e09/tblue.png" alt="AfrikMoney" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/ca15e2ba3318b9e7c16ee4e9a04a9490753ad14a/CREDIT%20ASSIST%20-%203.png" alt="CreditAssist" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/83530095b3d8f4730b83d9956ae6c4fb5cc0d7e6/sagebrush.png" alt="Sagebrush" />
            </div>
          </div>
          {/* Duplicate */}
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/svillage/b01dd224e847135fc6b636c8cd74e60c397d6a59/ercas.webp" alt="ErcasPay" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/ca15e2ba3318b9e7c16ee4e9a04a9490753ad14a/KM%20ICON.png" alt="Kolomoni" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/8b5789806dd63541d97f3f92491e445032fc2e09/Rc_capital.png" alt="Regius" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/8b5789806dd63541d97f3f92491e445032fc2e09/Rc_AM.png" alt="Regius AM" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/8b5789806dd63541d97f3f92491e445032fc2e09/tblue.png" alt="AfrikMoney" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/ca15e2ba3318b9e7c16ee4e9a04a9490753ad14a/CREDIT%20ASSIST%20-%203.png" alt="CreditAssist" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/83530095b3d8f4730b83d9956ae6c4fb5cc0d7e6/sagebrush.png" alt="Sagebrush" />
            </div>
          </div>
          {/* Duplicate */}
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/svillage/b01dd224e847135fc6b636c8cd74e60c397d6a59/ercas.webp" alt="ErcasPay" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/ca15e2ba3318b9e7c16ee4e9a04a9490753ad14a/KM%20ICON.png" alt="Kolomoni" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/8b5789806dd63541d97f3f92491e445032fc2e09/Rc_capital.png" alt="Regius" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/8b5789806dd63541d97f3f92491e445032fc2e09/Rc_AM.png" alt="Regius AM" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/8b5789806dd63541d97f3f92491e445032fc2e09/tblue.png" alt="AfrikMoney" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/ca15e2ba3318b9e7c16ee4e9a04a9490753ad14a/CREDIT%20ASSIST%20-%203.png" alt="CreditAssist" />
            </div>
          </div>
          <div className="marquee-item">
            <div className="marquee-content">
              <img src="https://raw.githubusercontent.com/DannyYo696/csassets/83530095b3d8f4730b83d9956ae6c4fb5cc0d7e6/sagebrush.png" alt="Sagebrush" />
            </div>
          </div>
        </div>
      </div>

      {/* Approach */}
      <div className="container section-padding">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <span className="text-gradient-orange" style={{ fontWeight: 600 }}>
            OUR APPROACH
          </span>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '3rem', margin: '20px 0' }}>
            Agility Meets Purpose
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            We don't just provide services; we build infrastructure for sustainable wealth creation.
          </p>
        </div>

        <div className="approach-grid">
          <div className="approach-card">
            <div className="icon-box">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '15px' }}>
              Agile Ecosystem
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Rapid deployment of financial solutions that adapt to market needs instantly.
            </p>
          </div>
          <div className="approach-card">
            <div className="icon-box">
              <i className="fas fa-users"></i>
            </div>
            <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '15px' }}>
              Inclusive Finance
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Designed to serve the unbanked and underbanked, bridging the gap in rural Africa.
            </p>
          </div>
          <div className="approach-card">
            <div className="icon-box">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem', marginBottom: '15px' }}>
              Secure & Regulated
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Licensed by CBN, SEC, and FCA, ensuring your assets and data are always safe.
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="container section-padding">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="text-gradient-orange" style={{ fontWeight: 600 }}>
            INFRASTRUCTURE
          </span>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '3rem' }}>Built for Scale</h2>
        </div>
        <div className="tech-grid">
          <div className="tech-item">
            <i className="fas fa-cloud"></i>
            <h4>SageCloud</h4>
            <p>Secure hosting & APIs</p>
          </div>
          <div className="tech-item">
            <i className="fas fa-lock"></i>
            <h4>Enterprise Security</h4>
            <p>PCIDSS & ISO Certified</p>
          </div>
          <div className="tech-item">
            <i className="fas fa-brain"></i>
            <h4>AI Fraud Detection</h4>
            <p>Real-time risk monitoring</p>
          </div>
          <div className="tech-item">
            <i className="fas fa-server"></i>
            <h4>99.9% Uptime</h4>
            <p>High availability clusters</p>
          </div>
        </div>
      </div>

      {/* Global Reach */}
      <div className="container section-padding global-section">
        <div className="about-split">
          <div>
            <span className="text-gradient-orange">GLOBAL FOOTPRINT</span>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '3rem', margin: '20px 0' }}>
              Connecting Continents
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
              From the bustling streets of Lagos to the financial hubs of London and the UAE, CapitalSage is building a borderless financial network for Africans.
            </p>
            <ul style={{ marginBottom: '30px' }}>
              <li style={{ marginBottom: '15px' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i>
                Operations in Nigeria & The Gambia
              </li>
              <li style={{ marginBottom: '15px' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i>
                Remittance corridors in the UK
              </li>
              <li>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i>
                Wealth Management in UAE
              </li>
            </ul>
          </div>
          <div className="map-placeholder">
            <div className="flag-node" style={{ top: '20%', left: '20%', animationDelay: '0s' }}>
              <img src="https://flagcdn.com/w80/gb.png" alt="UK" className="flag-img" />
              <span className="flag-label">UK</span>
            </div>
            <div className="flag-node" style={{ top: '35%', left: '65%', animationDelay: '0.5s' }}>
              <img src="https://flagcdn.com/w80/ae.png" alt="UAE" className="flag-img" />
              <span className="flag-label">UAE</span>
            </div>
            <div className="flag-node" style={{ top: '60%', left: '35%', animationDelay: '1.5s' }}>
              <img src="https://flagcdn.com/w80/gm.png" alt="Gambia" className="flag-img" />
              <span className="flag-label">Gambia</span>
            </div>
            <div className="flag-node" style={{ top: '70%', left: '70%', animationDelay: '1s' }}>
              <img src="https://flagcdn.com/w80/ng.png" alt="Nigeria" className="flag-img" />
              <span className="flag-label">Nigeria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="container section-padding partners-section">
        <p style={{ textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
          Trusted by Industry Leaders
        </p>
        <div className="logo-cloud">
          <div className="logo-item">
            <i className="fab fa-cc-visa"></i> VISA
          </div>
          <div className="logo-item">
            <i className="fab fa-cc-mastercard"></i> MASTERCARD
          </div>
          <div className="logo-item">
            <i className="fas fa-university"></i> CENTRAL BANK
          </div>
          <div className="logo-item">
            <i className="fas fa-network-wired"></i> NIBSS
          </div>
          <div className="logo-item">
            <i className="fas fa-mobile-alt"></i> MTN
          </div>
          <div className="logo-item">
            <i className="fas fa-wifi"></i> AIRTEL
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container">
        <div className="stats-bar">
          <div className="stat-item">
            <h3>₦1T+</h3>
            <p>Transaction Volume</p>
          </div>
          <div className="stat-item">
            <h3>10M+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-item">
            <h3>100k+</h3>
            <p>Merchants</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Uptime</p>
          </div>
        </div>
      </div>

      {/* API Showcase */}
      <div className="container section-padding">
        <div className="api-showcase">
          <div>
            <span style={{ color: 'var(--secondary)', fontWeight: 600, textTransform: 'uppercase' }}>
              For Developers
            </span>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', margin: '20px 0' }}>
              Seamless Integration
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
              Integrate payments, collections, and financial services directly into your platform with our robust REST APIs. Get started in minutes.
            </p>
            <ul style={{ marginBottom: '30px' }}>
              <li style={{ marginBottom: '10px' }}>
                <i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '10px' }}></i>
                Comprehensive Documentation
              </li>
              <li style={{ marginBottom: '10px' }}>
                <i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '10px' }}></i>
                Sandbox Environment
              </li>
              <li>
                <i className="fas fa-check" style={{ color: 'var(--primary)', marginRight: '10px' }}></i>
                Webhook Notifications
              </li>
            </ul>
            <button 
              className="btn btn-outline"
              onClick={() => setIsDocsModalOpen(true)}
            >
              Read Docs
            </button>
          </div>
          <div className="code-block">
            <div className="code-line">
              <span className="keyword">const</span> response = <span className="keyword">await</span> capitalsage.<span className="func">payments</span>.<span className="func">initiate</span>({'{'}
            </div>
            <div className="code-line">
              &nbsp;&nbsp;<span className="string">&quot;amount&quot;</span>: <span className="string">5000.00</span>,
            </div>
            <div className="code-line">
              &nbsp;&nbsp;<span className="string">&quot;currency&quot;</span>: <span className="string">&quot;NGN&quot;</span>,
            </div>
            <div className="code-line">
              &nbsp;&nbsp;<span className="string">&quot;customer&quot;</span>: <span className="string">&quot;cust_12345&quot;</span>
            </div>
            <div className="code-line">{'}'});</div>
            <div className="code-line" style={{ color: '#64748b', marginTop: '10px' }}>
              // Payment successful!
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Preview */}
      <div className="container section-padding">
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '3rem' }}>Our Ecosystem</h2>
          <p style={{ color: 'var(--text-muted)' }}>A suite of specialized brands working in harmony.</p>
        </div>

        <div className="ecosystem-grid">
          <Link href="/brands/kolomoni-mfb-nigeria" className="eco-card eco-card-link">
            <img
              src="https://raw.githubusercontent.com/DannyYo696/csassets/2968a8b12f5bbb620d764e9db309906c039206d8/KM%20ICON.png"
              alt="Kolomoni"
              className="eco-logo"
            />
            <h3 style={{ textAlign: 'center' }}>Kolomoni MFB (Nigeria)</h3>
            <p style={{ textAlign: 'center' }}>Digital microfinance bank providing comprehensive financial services.</p>
            <span className="card-arrow">→</span>
          </Link>

          <Link href="/brands/kolomoni-mfi-gambia" className="eco-card eco-card-link">
            <img
              src="https://raw.githubusercontent.com/DannyYo696/csassets/2968a8b12f5bbb620d764e9db309906c039206d8/KM%20ICON.png"
              alt="Kolomoni"
              className="eco-logo"
            />
            <h3 style={{ textAlign: 'center' }}>Kolomoni MFI (Gambia)</h3>
            <p style={{ textAlign: 'center' }}>
              Microfinance solutions tailored for rural communities and unbanked populations.
            </p>
            <span className="card-arrow">→</span>
          </Link>

          <Link href="/brands/ercas" className="eco-card eco-card-link">
            <img
              src="https://raw.githubusercontent.com/DannyYo696/csassets/2968a8b12f5bbb620d764e9db309906c039206d8/ercas%20icon.png"
              alt="ERCAS"
              className="eco-logo"
            />
            <h3 style={{ textAlign: 'center' }}>ERCAS</h3>
            <p style={{ textAlign: 'center' }}>Integrated payment services and digital solutions for business.</p>
            <span className="card-arrow">→</span>
          </Link>

          <Link href="/brands/credit-assist" className="eco-card eco-card-link">
            <img
              src="https://raw.githubusercontent.com/DannyYo696/csassets/ca15e2ba3318b9e7c16ee4e9a04a9490753ad14a/CREDIT%20ASSIST%20-%203.png"
              alt="Credit Assist"
              className="eco-logo"
            />
            <h3 style={{ textAlign: 'center' }}>Credit Assist</h3>
            <p style={{ textAlign: 'center' }}>Bridging the gap in agricultural financing</p>
            <span className="card-arrow">→</span>
          </Link>

          <Link href="/brands/regius-capital" className="eco-card eco-card-link">
            <img
              src="https://raw.githubusercontent.com/DannyYo696/csassets/2968a8b12f5bbb620d764e9db309906c039206d8/REGUIS%20WHITE.png"
              alt="Regius Capital"
              className="eco-logo"
            />
            <h3 style={{ textAlign: 'center' }}>Regius Capital</h3>
            <p style={{ textAlign: 'center' }}>Debt and equity solutions driving capital market growth.</p>
            <span className="card-arrow">→</span>
          </Link>

          <Link href="/brands/regius-asset-management" className="eco-card eco-card-link">
            <img
              src="https://raw.githubusercontent.com/DannyYo696/csassets/ca15e2ba3318b9e7c16ee4e9a04a9490753ad14a/Rc_AM.png"
              alt="Regius Asset"
              className="eco-logo"
            />
            <h3 style={{ textAlign: 'center' }}>Regius Asset Management</h3>
            <p style={{ textAlign: 'center' }}>Wealth management and portfolio creation for sustainable returns.</p>
            <span className="card-arrow">→</span>
          </Link>

          <Link href="/brands/afrikmoney" className="eco-card eco-card-link">
            <img
              src="https://raw.githubusercontent.com/DannyYo696/csassets/2968a8b12f5bbb620d764e9db309906c039206d8/tblue.png"
              alt="Afrikmoney"
              className="eco-logo"
            />
            <h3 style={{ textAlign: 'center' }}>Afrikmoney</h3>
            <p style={{ textAlign: 'center' }}>Seamless cross-border remittances from UK to Africa.</p>
            <span className="card-arrow">→</span>
          </Link>

          <Link href="/brands/sagebrush-wealth" className="eco-card eco-card-link">
            <img
              src="https://raw.githubusercontent.com/DannyYo696/csassets/83530095b3d8f4730b83d9956ae6c4fb5cc0d7e6/sagebrush.png"
              alt="Sagebrush"
              className="eco-logo"
            />
            <h3 style={{ textAlign: 'center' }}>Sagebrush</h3>
            <p style={{ textAlign: 'center' }}>Global wealth management and financial planning expertise.</p>
            <span className="card-arrow">→</span>
          </Link>
        </div>

        {/* View Full Ecosystem Button */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '60px' 
        }}>
          <Link href="/ecosystem" className="btn btn-primary ecosystem-cta-btn">
            View Full Ecosystem
            <i className="fas fa-arrow-right" style={{ marginLeft: '12px' }}></i>
          </Link>
        </div>
      </div>

      {/* Led by Visionaries Section */}
      {/* Led by Visionaries Section */}
      <div className="container visionaries-section">
        <div className="visionaries-card">
          {/* Left Content */}
          <div className="visionaries-content">
            <h2>Led by Visionaries</h2>
            <p>
              Our leadership team brings together decades of experience from global banking, tech, and agriculture sectors.
            </p>
          </div>

          {/* Right Button */}
          <Link href="/leadership" className="btn btn-outline visionaries-btn">
            Meet The Team
          </Link>
        </div>
      </div>

      {/* Latest Insights Section */}
      <div className="container insights-section">
        <h2 className="insights-heading">Latest Insights</h2>

        <div className="insights-grid">
          {/* Card 1 */}
          <div className="insight-card">
            <div className="insight-image">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop" 
                alt="Fintech" 
              />
            </div>
            <div className="insight-content">
              <div className="insight-date">
                <span>OCT 12, 2026</span>
              </div>
              <h3>The Future of Fintech in Rural Africa</h3>
              <p>How digital agents are bridging the last mile gap.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="insight-card">
            <div className="insight-image">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop" 
                alt="Capital Growth" 
              />
            </div>
            <div className="insight-content">
              <div className="insight-date">
                <span>SEP 28, 2026</span>
              </div>
              <h3>Regius Capital Reports 20% Growth</h3>
              <p>Navigating volatile markets with structured finance.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="insight-card">
            <div className="insight-image">
              <img 
                src="https://raw.githubusercontent.com/DannyYo696/csassets/2968a8b12f5bbb620d764e9db309906c039206d8/tblue.png" 
                alt="Money Transfer" 
              />
            </div>
            <div className="insight-content">
              <div className="insight-date">
                <span>AUG 15, 2026</span>
              </div>
              <h3>Afrikmoney Launches in The Gambia</h3>
              <p>Expanding our remittance corridors for seamless transfers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Grow Section */}
      <div className="container" style={{ paddingTop: '120px', paddingBottom: '120px', textAlign: 'center' }}>
        <div style={{ padding: '80px 60px', borderRadius: '24px', border: '1px solid var(--border)', background: 'transparent' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '30px', letterSpacing: '-1px' }}>
            Ready to Grow?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px' }}>
            Join thousands of businesses trusting CapitalSage technology.
          </p>
          <button className="btn btn-secondary">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
