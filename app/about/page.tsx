import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="page-section">
      {/* Hero */}
      <div className="container about-hero">
        <span className="text-gradient-orange" style={{ fontWeight: 600, letterSpacing: '2px' }}>
          WHO WE ARE
        </span>
        <h1 className="text-gradient">
          More Than Finance.
          <br />
          We Are <span style={{ color: 'white' }}>Infrastructure.</span>
        </h1>
        <div className="big-statement">
          CapitalSage Technology is an innovation-led financial services group. We don't just process transactions; we
          build the <span className="highlight-text">digital arteries</span> of the African economy.
        </div>
      </div>

      {/* Manifesto */}
      <div className="container" style={{ paddingBottom: '100px' }}>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <img
              src="https://picsum.photos/seed/fintech/600/600"
              alt="Tech"
              style={{ borderRadius: '20px', filter: 'grayscale(100%)', opacity: 0.6, width: '100%' }}
            />
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>
              People-Centered.
              <br />
              Tech-Driven.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
              We operate an agile ecosystem of inclusive financial, fintech, and value-added services. Unlike traditional
              institutions, we are purpose-built for the nuances of African markets—bridging the gap between the unbanked
              rural population and global wealth management systems.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div>
                <h3 style={{ color: 'var(--secondary)', fontSize: '1.5rem', fontFamily: 'var(--font-head)' }}>Agile</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Adapting in real-time.</p>
              </div>
              <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '20px' }}>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', fontFamily: 'var(--font-head)' }}>Secure</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Bank-grade encryption.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="vm-section">
        <div className="container vm-container">
          <div className="vm-text-content">
            <h2>Our Vision</h2>
            <h3>
              "To be Africa's leading financial partner, enabling <span className="text-gradient-orange">inclusion, enterprise,</span> and prosperity through innovation and technology."
            </h3>
            <p>
              We see a future where geography does not determine economic opportunity. By deploying technology that speaks
              local languages and understands local markets, we are building a continent where every individual has the
              tools to thrive.
            </p>
          </div>
          <div className="vm-visual" style={{ order: 2 }}>
            <img
              src="https://picsum.photos/seed/network/600/600"
              alt="Network"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, borderRadius: '20px' }}
            />
          </div>
        </div>

        <div className="container vm-container" style={{ marginTop: '100px' }}>
          <div className="vm-visual" style={{ order: 2 }}>
            <img
              src="https://picsum.photos/seed/network/600/600"
              alt="Network"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, borderRadius: '20px' }}
            />
          </div>
          <div className="vm-text-content" style={{ order: 1 }}>
            <h2 style={{ color: 'var(--secondary)' }}>Our Mission</h2>
            <h3 style={{ color: 'white' }}>
              "To provide sustainable financial infrastructures that continuously empower individuals and businesses to
              grow, thrive, and uplift communities."
            </h3>
            <p style={{ borderColor: 'var(--secondary)' }}>
              Sustainability is our watchword. We create systems that don't just work today but evolve tomorrow. From the
              micro-merchant in Lagos to the high-net-worth investor in London, our infrastructure supports the entire
              spectrum of value creation.
            </p>
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

      {/* Pillars */}
      <div className="container pillars-section">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="text-gradient-orange" style={{ letterSpacing: '2px', fontWeight: 600 }}>
            OUR FOUNDATION
          </span>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '3rem', color: 'white' }}>Built on Three Pillars</h2>
        </div>
        <div className="pillar-grid">
          <div className="pillar-item">
            <div className="pillar-num">01</div>
            <i className="fas fa-infinity" style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '20px' }}></i>
            <h4>Financial Inclusion</h4>
            <p>Breaking barriers to entry through agency banking, mobile wallets, and low-cost digital solutions for the unbanked.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-num">02</div>
            <i className="fas fa-microchip" style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '20px' }}></i>
            <h4>Technological Innovation</h4>
            <p>Leveraging AI, cloud computing, and robust API infrastructure to create seamless, secure financial experiences.</p>
          </div>
          <div className="pillar-item">
            <div className="pillar-num">03</div>
            <i className="fas fa-globe-africa" style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '20px' }}></i>
            <h4>Global Prosperity</h4>
            <p>Connecting African markets to the world through remittance services and international asset management.</p>
          </div>
        </div>
      </div>

      {/* Stats Tape */}
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

      {/* Global Expansion */}
      <div className="container expansion-section">
        <span className="text-gradient-orange">GLOBAL FOOTPRINT</span>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '3rem', color: 'white', marginTop: '10px' }}>Where We Operate</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '20px auto' }}>
          Our roots are deep in Africa, but our reach is global. We operate across multiple markets to serve the diaspora and local communities alike.
        </p>

        <div className="expansion-grid">
          <div className="country-node">
            <img src="https://flagcdn.com/w80/ng.png" alt="Nigeria" />
            <h4>Nigeria</h4>
            
          </div>
          <div className="country-node">
            <img src="https://flagcdn.com/w80/gm.png" alt="Gambia" />
            <h4>The Gambia</h4>
            
          </div>
          <div className="country-node">
            <img src="https://flagcdn.com/w80/gb.png" alt="UK" />
            <h4>United Kingdom</h4>
           
          </div>
          <div className="country-node">
            <img src="https://flagcdn.com/w80/ae.png" alt="UAE" />
            <h4>United Arab Emirates</h4>
            
          </div>
          
        </div>
      </div>

      {/* Governance */}
      <div className="container">
        <div className="governance-section">
          <div className="container governance-content">
            <div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', color: 'white', marginBottom: '20px' }}>
                Trust & Governance
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '30px' }}>
                We operate within a strict regulatory framework to ensure the safety of client funds and data. Our licenses
                across multiple jurisdictions reflect our commitment to compliance and excellence.
              </p>
              <ul style={{ color: 'white', lineHeight: 2 }}>
                <li>
                  <i className="fas fa-check" style={{ color: 'var(--secondary)', marginRight: '10px' }}></i>
                  PCIDSS Compliant (Payment Security)
                </li>
                <li>
                  <i className="fas fa-check" style={{ color: 'var(--secondary)', marginRight: '10px' }}></i>
                  NDPA Compliant (Data Privacy)
                </li>
                <li>
                  <i className="fas fa-check" style={{ color: 'var(--secondary)', marginRight: '10px' }}></i>
                  AML/CTF Adherence
                </li>
              </ul>
            </div>
            <div className="license-grid">
              <div className="license-box">
                <i className="fas fa-university"></i>
                <h5>CBN</h5>
                <span>Central Bank of Nigeria</span>
              </div>
              <div className="license-box">
                <i className="fas fa-chart-line"></i>
                <h5>SEC</h5>
                <span>Securities & Exchange Comm.</span>
              </div>
              <div className="license-box">
                <i className="fas fa-shield-alt"></i>
                <h5>FCA</h5>
                <span>Financial Conduct Authority</span>
              </div>
              <div className="license-box">
                <i className="fas fa-landmark"></i>
                <h5>CBG</h5>
                <span>Central Bank of The Gambia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Deep Dive */}
      <div className="container tech-deep-dive">
        <div style={{ maxWidth: '800px' }}>
          <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>ENGINEERING EXCELLENCE</span>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '3rem', color: 'white', marginTop: '10px' }}>
            Proprietary Infrastructure
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '20px' }}>
            We don't rely solely on third-party systems. We build. Our proprietary tech stack ensures high availability and
            seamless integration for our partners.
          </p>
        </div>

        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <div className="feature-text">
              <h4>SageHive API Architecture</h4>
              <p>
                A centralized microservice hub that connects all our subsidiaries, allowing for seamless interoperability
                between payments, banking, and investment services.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <div className="feature-text">
              <h4>SageCloud Infrastructure</h4>
              <p>
                On-chain and cloud hosting solutions designed for scalability. We handle peak loads with 99.9% uptime,
                ensuring businesses never go offline.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-fingerprint"></i>
            </div>
            <div className="feature-text">
              <h4>Biometric Security</h4>
              <p>
                Advanced fraud detection systems that utilize machine learning to identify suspicious patterns in real-time,
                protecting users across ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Quote */}
      <div className="container leadership-quote">
        <i className="fas fa-quote-left" style={{ fontSize: '2rem', color: 'var(--primary)', opacity: 0.5, marginBottom: '30px' }}></i>
        <div className="lq-quote">
          "We are not just building a company; we are building a legacy of financial empowerment for Africa."
        </div>
        <div style={{ color: 'var(--secondary)', fontWeight: 600 }} className="lq-cite">— John Alamu, Founder & Group MD</div>
      </div>
    </section>
  );
}
