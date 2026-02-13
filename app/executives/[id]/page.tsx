'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const executiveProfiles = {
  'oluyemisi-shittu': {
    name: 'Dr. Oluyemisi Shittu',
    title: 'Group Executive Director, Corporate Services',
    img: 'https://picsum.photos/seed/oluyemisi/600/700',
    bio: 'Accomplished economist and internationally recognised human development expert with more than 20 years of research and consulting experience across nutrition, agriculture, and business.',
    background: 'Dr. Shittu brings a unique blend of economic expertise and human development focus to CapitalSage Technology. With over two decades of experience in research and consulting, she has shaped policies and strategies across multiple sectors.',
    experience: [
      '20+ years in economic research and consulting',
      'Human development and nutrition specialist',
      'Agricultural sector expertise',
      'International recognition in development economics',
    ],
    expertise: ['Economics', 'Human Development', 'Agriculture', 'Business Strategy', 'Policy Development', 'Research'],
    achievements: [
      'Led strategic initiatives across nutrition and agriculture',
      'Consulted for international development organizations',
      'Published research on African economic development',
      'Shaped corporate strategies for multiple Fortune 500 companies',
    ],
    philosophy: 'Believing that sustainable economic growth must be rooted in human development and inclusive practices, Dr. Shittu champions initiatives that create long-term value for all stakeholders.',
  },
  'sreeram-parameswaran': {
    name: 'Sreeram Parameswaran',
    title: 'Group Executive Director, Finance',
    img: 'https://picsum.photos/seed/sreeram/600/700',
    bio: 'Over 20 years of experience across audit, banking, financial reporting, and CFO roles in India and the UAE, with deep expertise in manufacturing, commodities and finance.',
    background: 'Sreeram is a financial services executive with extensive international experience. His career spans leading financial functions in some of the world\'s most dynamic markets, managing complex financial operations across multiple regions and currencies.',
    experience: [
      '20+ years in finance and accounting',
      'CFO experience in India and UAE',
      'Expert in audit and financial reporting',
      'Deep commodities and manufacturing sector knowledge',
      'Treasury and risk management specialist',
    ],
    expertise: ['Financial Reporting', 'Banking', 'Risk Management', 'Treasury', 'Audit', 'CFO Leadership', 'Corporate Finance'],
    credentials: ['ICAI - Institute of Chartered Accountants of India', 'ICAA - Institute of Chartered Accountants Australia'],
    achievements: [
      'Led financial transformations in multinational organizations',
      'Managed multi-billion dollar financial portfolios',
      'Implemented enterprise-wide financial systems',
      'Advised boards on financial strategy and governance',
    ],
    philosophy: 'Sreeram believes that strong financial management is the backbone of sustainable growth, enabling organizations to invest in innovation while maintaining prudent risk controls.',
  },
  'tolulope-olatunji': {
    name: 'Tolulope Olatunji',
    title: 'Company Secretary',
    img: 'https://picsum.photos/seed/tolulope/600/700',
    bio: 'Experienced legal advisor with 15+ years of demonstrated experience in legal practice with corporate law specialization.',
    background: 'Tolulope is a seasoned legal professional with deep expertise in corporate governance and business law. She ensures that CapitalSage operates with the highest standards of legal compliance and corporate ethics.',
    experience: [
      '15+ years in legal practice',
      'Corporate law specialization',
      'Governance and compliance expertise',
      'Board advisory experience',
      'Contract negotiation and management',
    ],
    expertise: ['Corporate Law', 'Legal Advisory', 'Compliance', 'Governance', 'Contract Law', 'Risk Management'],
    credentials: ['LLM - University of Ibadan', 'B.A. Law'],
    achievements: [
      'Managed complex corporate transactions',
      'Strengthened governance frameworks',
      'Led compliance implementations',
      'Advised executive teams on legal matters',
    ],
    philosophy: 'Tolulope is committed to ensuring that CapitalSage maintains the highest standards of legal and ethical conduct, protecting the company and all stakeholders.',
  },
  'adekunle-sonola': {
    name: 'Adekunle Sonola',
    title: 'Independent Non-Executive Director',
    img: 'https://picsum.photos/seed/adekunle/600/700',
    bio: 'Seasoned banking executive with over 30 years of experience across Africa\'s financial sector, including leadership roles at Union Bank, GT Bank, and Polaris Bank.',
    background: 'Adekunle has had a distinguished career in African banking, leading some of the continent\'s most prestigious financial institutions. His strategic vision and operational excellence have shaped the financial landscape across multiple markets.',
    experience: [
      '30+ years in African financial services',
      'Executive Director at Union Bank',
      'Regional MD for GT Bank East Africa',
      'MD and CEO of Polaris Bank',
      'Board member of multiple financial institutions',
    ],
    expertise: ['Banking', 'Financial Services', 'Executive Leadership', 'Regional Strategy', 'Risk Management', 'Retail Banking'],
    credentials: ['MBA - Durham University', 'Board Certifications'],
    achievements: [
      'Led regional expansion across East Africa',
      'Transformed banking operations for multiple institutions',
      'Served on boards of First Bank, Airtel Africa, and Standard Bank',
      'Drove digital transformation in banking',
    ],
    philosophy: 'Adekunle believes that banking must serve as a catalyst for economic development, providing financial inclusion and opportunities for communities across Africa.',
  },
  'wole-omosuyi': {
    name: 'Wole Omosuyi',
    title: 'Independent Non-Executive Director',
    img: 'https://picsum.photos/seed/wole/600/700',
    bio: 'Finance and risk professional with over 20 years of experience across financial regulation, banking supervision, and advisory services. Former senior official of the Central Bank of Nigeria.',
    background: 'Wole is a highly respected finance and risk management expert who has shaped Africa\'s financial regulations and banking practices. His deep understanding of financial systems and regulatory frameworks makes him invaluable to CapitalSage\'s governance.',
    experience: [
      '20+ years in finance and risk',
      'Senior official at Central Bank of Nigeria',
      'Financial regulation expertise',
      'Banking supervision and oversight',
      'Advisory services across financial institutions',
    ],
    expertise: ['Financial Regulation', 'Risk Management', 'Banking Supervision', 'Compliance', 'Counter Fraud', 'Enterprise Risk'],
    credentials: ['FICAN - Fellow Institute of Chartered Accountants Nigeria', 'ICMC - Institute of Management Consultants', 'ACRM - Accredited Counter Fraud Specialist'],
    achievements: [
      'Shaped Nigeria\'s financial regulatory framework',
      'Led banking supervision initiatives',
      'Advised multiple financial institutions on risk',
      'Contributed to financial sector reforms',
    ],
    philosophy: 'Wole advocates for robust financial oversight and risk management that protects consumers while enabling sustainable financial innovation.',
  },
  'abubakar-soyemi': {
    name: 'Abubakar Soyemi',
    title: 'Group Chief Operating Officer',
    img: 'https://picsum.photos/seed/abubakar/600/700',
    bio: 'Operations and business leader with over 20 years of experience in commercial banking, spanning operations management, service delivery, risk control, and compliance.',
    background: 'Abubakar drives operational excellence across the CapitalSage Group. His extensive banking background ensures that all group entities operate with efficiency, resilience, and adherence to the highest standards.',
    experience: [
      '20+ years in commercial banking',
      'Operations management expertise',
      'Service delivery optimization',
      'Risk control and compliance',
      'Strategic partnerships development',
    ],
    expertise: ['Operations Management', 'Commercial Banking', 'Risk Control', 'Strategic Partnerships', 'Business Development', 'Compliance'],
    achievements: [
      'Optimized operations across multiple banking entities',
      'Established strategic partnerships',
      'Implemented risk management frameworks',
      'Led digital transformation initiatives',
    ],
    philosophy: 'Abubakar believes that operational excellence is the foundation for delivering exceptional customer value and building sustainable business growth.',
  },
  'segun-sanusi': {
    name: 'Segun Sanusi',
    title: 'Chief Information Officer',
    img: 'https://picsum.photos/seed/segun/600/700',
    bio: 'Technology executive with over a decade of experience in fintech, software engineering, and enterprise systems. Proven leader in building secure, scalable payment platforms.',
    background: 'Segun is a visionary technology leader driving CapitalSage\'s digital transformation. His expertise in fintech and secure systems ensures that the group remains at the forefront of financial technology innovation.',
    experience: [
      '15+ years in fintech and technology',
      'Software engineering expertise',
      'Enterprise systems architecture',
      'Payment platform development',
      'Cybersecurity and data protection',
    ],
    expertise: ['Fintech', 'Software Engineering', 'Cloud Architecture', 'Cybersecurity', 'Enterprise Systems', 'API Development'],
    achievements: [
      'Built secure, scalable payment platforms',
      'Led enterprise digital transformation',
      'Implemented cloud-first architectures',
      'Established cybersecurity best practices',
    ],
    philosophy: 'Segun champions the responsible use of technology to create secure, inclusive financial solutions that empower users and drive financial innovation.',
  },
  'daniel-ale': {
    name: 'Daniel Ale',
    title: 'Chief Technology Officer',
    img: 'https://picsum.photos/seed/daniel/600/700',
    bio: 'Engineering leader with over 20 years of cognate experience in leading fully distributed agile teams. Masters in Engineering with PhD in view.',
    background: 'Daniel provides technical leadership that ensures CapitalSage builds world-class technology solutions. His experience leading distributed teams and driving innovation positions the group for future growth.',
    experience: [
      '20+ years in engineering leadership',
      'Distributed agile team management',
      'Enterprise architecture',
      'Technical innovation and R&D',
      'Cloud and microservices expertise',
    ],
    expertise: ['Engineering Leadership', 'Agile Methodology', 'Distributed Systems', 'Technology Strategy', 'Architecture', 'Innovation'],
    credentials: ['Masters in Engineering', 'PhD Candidate'],
    achievements: [
      'Led engineering teams across multiple continents',
      'Architected scalable distributed systems',
      'Drove technical innovation programs',
      'Implemented agile transformation',
    ],
    philosophy: 'Daniel believes that great technology requires great people, and focuses on building high-performing engineering cultures that deliver innovation and excellence.',
  },
  'yusuf-adeojo': {
    name: 'Yusuf Adeojo',
    title: 'Managing Director, Kolomoni Nigeria',
    img: 'https://picsum.photos/seed/yusuf/600/700',
    bio: 'Growth-focused leader with a strong track record in driving innovation, productivity, and revenue optimization.',
    background: 'Yusuf leads Kolomoni Nigeria with a passion for financial inclusion and digital innovation. His strategic vision has established Kolomoni as a leading microfinance platform in Nigeria.',
    experience: [
      'PhD in Technology & Innovation Management',
      'Digital banking leadership',
      'Financial inclusion expertise',
      'Growth and scaling experience',
      'Innovation management',
    ],
    expertise: ['Digital Banking', 'Financial Inclusion', 'Innovation', 'Growth Strategy', 'Product Development', 'Market Expansion'],
    credentials: ['PhD Technology & Innovation Management'],
    achievements: [
      'Scaled Kolomoni to 65K+ terminals',
      'Launched innovative digital banking products',
      'Expanded market reach across Nigeria',
      'Established industry partnerships',
    ],
    philosophy: 'Yusuf is committed to democratizing financial services through innovative digital platforms that empower everyday Africans to achieve their financial goals.',
  },
  'macdonald-okoh': {
    name: 'Macdonald Okoh',
    title: 'Managing Director, International Business',
    img: 'https://picsum.photos/seed/macdonald/600/700',
    bio: 'Fintech leader with over 15 years of experience in digital banking and financial inclusion. Leads international expansion and product localization.',
    background: 'Macdonald drives CapitalSage\'s international expansion strategy, bringing fintech innovation to new markets across Africa. His extensive experience in digital banking ensures local market success.',
    experience: [
      '15+ years in fintech and digital banking',
      'International expansion expertise',
      'Product localization and adaptation',
      'Financial inclusion focus',
      'Cross-border payment systems',
    ],
    expertise: ['Fintech Leadership', 'Digital Banking', 'International Expansion', 'Product Development', 'Market Entry', 'Localization'],
    background2: 'Previous roles at Keystone Bank, Heritage Bank, and ITEX',
    achievements: [
      'Expanded operations to multiple African countries',
      'Localized products for different markets',
      'Drove financial inclusion initiatives',
      'Built strategic partnerships across regions',
    ],
    philosophy: 'Macdonald believes that fintech can be a powerful tool for financial inclusion, and focuses on creating solutions tailored to the unique needs of African communities.',
  },
  'yvonne-akintomide': {
    name: 'Yvonne Akintomide',
    title: 'Managing Director, Regius Asset Management',
    img: 'https://picsum.photos/seed/yvonne/600/700',
    bio: 'Financial services executive with over 19 years of experience spanning investment advisory, business strategy, and compliance. Deep expertise in wealth management.',
    background: 'Yvonne leads Regius Asset Management with a client-first approach to wealth management. Her strategic vision ensures that the firm delivers exceptional investment returns and personalized services.',
    experience: [
      '19+ years in financial services',
      'Investment advisory expertise',
      'Wealth management specialization',
      'Compliance and governance',
      'Business strategy and planning',
    ],
    expertise: ['Wealth Management', 'Investment Advisory', 'Compliance', 'Product Development', 'Client Relations', 'Portfolio Management'],
    credentials: ['MBA Netherlands Business School', 'Business Management Degree'],
    previousRoles: ['ValuAlliance', 'Greenwich', 'Leadway Pensure', 'Stanbic IBTC'],
    achievements: [
      'Built Regius Asset Management into a leading wealth manager',
      'Developed innovative investment products',
      'Established strong client relationships',
      'Implemented robust compliance frameworks',
    ],
    philosophy: 'Yvonne is dedicated to helping clients build and preserve wealth through personalized investment strategies and exceptional service.',
  },
  'simisola-ojumu': {
    name: 'Simisola Ojumu',
    title: 'Managing Director, Regius Capital',
    img: 'https://picsum.photos/seed/simisola/600/700',
    bio: 'Capital markets professional with over 17 years of experience across investment banking, corporate finance, and wealth management.',
    background: 'Simisola leads Regius Capital in delivering comprehensive capital markets solutions. With over 17 years in investment banking, he has executed some of Africa\'s most significant transactions.',
    experience: [
      '17+ years in capital markets',
      'Investment banking expertise',
      'Corporate finance specialization',
      'Wealth management experience',
      'Equities brokerage background',
    ],
    expertise: ['Investment Banking', 'Corporate Finance', 'Capital Raising', 'Investor Relations', 'M&A Advisory', 'Equities'],
    achievements: [
      'Led capital raises exceeding $100 million',
      'Executed transactions valued at $500+ million',
      'Established strategic investor relationships',
      'Built comprehensive capital markets offerings',
    ],
    philosophy: 'Simisola believes that strong capital markets are essential for African economic growth, and focuses on creating value for companies and investors alike.',
  },
};

export default function ExecutiveProfile() {
  const params = useParams();
  const id = params.id as string;
  const profile = executiveProfiles[id as keyof typeof executiveProfiles];

  if (!profile) {
    return (
      <section className="page-section">
        <div className="container" style={{ textAlign: 'center', paddingTop: '120px', paddingBottom: '120px' }}>
          <h1>Executive Profile Not Found</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '20px' }}>
            <Link href="/leadership">Return to Leadership Page</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
     {/* Hero Section */}
<div className="container hero-section">
  {/* Image */}
  <div className="hero-image">
    <img
      src={profile.img || "/placeholder.svg"}
      alt={profile.name}
    />
  </div>

  {/* Info */}
  <div className="hero-info">
    <p className="hero-label">
      Executive Profile
    </p>

    <h1 className="hero-name">
      {profile.name}
    </h1>

    <h2 className="hero-title">
      {profile.title}
    </h2>

    <p className="hero-bio">
      {profile.bio}
    </p>

    {/* Expertise Tags */}
    <div className="hero-tags">
      {profile.expertise.slice(0, 4).map((skill, idx) => (
        <span key={idx}>
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>


      {/* Background Section */}
      <div className="container" style={{ marginBottom: '80px', padding: '60px', background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.05))', borderRadius: '20px', border: '1px solid var(--border)' }}>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
          Background & Career
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          {profile.background}
        </p>
      </div>

      {/* Experience Grid */}
      <div className="container" style={{ marginBottom: '80px' }}>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 700, marginBottom: '40px' }}>
          Key Experience
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {profile.experience.map((exp, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '25px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(249, 115, 22, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary)',
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                ✓
              </div>
              <div>
                <p style={{ color: 'white', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {exp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="container" style={{ marginBottom: '80px' }}>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 700, marginBottom: '40px' }}>
          Key Achievements
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {profile.achievements.map((achievement, idx) => (
            <div key={idx} style={{ paddingLeft: '30px', borderLeft: '3px solid var(--secondary)' }}>
              <p style={{ color: 'white', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials/Philosophy */}
      {profile.credentials && (
        <div className="container" style={{ marginBottom: '80px', padding: '60px', background: 'var(--bg-card)', borderRadius: '20px', border: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
            Credentials & Certifications
          </h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {profile.credentials.map((cred, idx) => (
              <li key={idx} style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                • {cred}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Philosophy Section */}
      <div className="container" style={{ marginBottom: '80px', padding: '60px', background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.2), rgba(249, 115, 22, 0.1))', borderRadius: '20px', border: '1px solid var(--border)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '25px' }}>
          Professional Philosophy
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', fontStyle: 'italic' }}>
          "{profile.philosophy}"
        </p>
      </div>

      {/* CTA Section */}
      <div className="container" style={{ marginBottom: '100px', textAlign: 'center' }}>
        <Link href="/leadership" className="btn btn-primary">
          ← Back to Leadership Team
        </Link>
      </div>

      <style jsx>{`
  .hero-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 80px;
  }

  /* Tablet & Mobile */
  @media (max-width: 900px) {
    .hero-section {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .hero-image {
    border-radius: 20px;
    overflow: hidden;
    height: 500px;
  }

  @media (max-width: 900px) {
    .hero-image {
      height: 420px;
    }
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-label {
    color: var(--secondary);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }

  .hero-name {
    font-family: var(--font-head);
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.2;
  }

  @media (max-width: 900px) {
    .hero-name {
      font-size: 2.2rem;
    }
  }

  .hero-title {
    font-size: 1.3rem;
    color: var(--secondary);
    font-weight: 600;
    margin-bottom: 30px;
  }

  .hero-bio {
    font-size: 1.05rem;
    color: var(--text-muted);
    line-height: 1.8;
    margin-bottom: 40px;
  }

  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .hero-tags span {
    background: rgba(249, 115, 22, 0.15);
    color: var(--secondary);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }
`}</style>

    </section>
  );
}
