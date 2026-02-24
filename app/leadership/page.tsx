'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LeadershipPage() {
  const [selectedCategory, setSelectedCategory] = useState('board');

  const executives = [
    {
      id: 'opeyemi-oduwole',
      name: 'Samsudeen Oduwole',
      title: ' Chairman, Board of Directors',
      category: 'board',
      bio: 'Global enterprise systems strategist and SAP Finance Architect with over two decades of experience leading large-scale finance...',
      experience: '15+ years',
      expertise: ['Financial Governance', 'Regulatory Compliance'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/f71453ad9e172b7bb285c1be3fc90a6db8189e44/Sam%20Oduwole.jpg',
    },
    {
      id: 'john-alamu',
      name: 'John Alamu',
      title: 'Group Executive Director, Corporate Services',
      category: 'board',
      bio: 'Founder and Group Managing Director of CapitalSage Holdings, leading the group’s expansion across fintech, agribusiness, financial services, and technology-driven...',
      experience: '20+ years',
      expertise: ['Strategic Leadership', 'Financial Inclusion'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7c8f4712115482a2a0d9920c32dc45e8b540a5f3/alamu.webp',
    },
    {
      id: 'nath-ude',
      name: '⁠Nath Ude',
      title: 'Group Chief Executive Officer',
      category: 'board',
      bio: 'Over 30 years of leadership experience across banking, fintech, and enterprise transformation in Africa and international markets.',
      experience: '20+ years',
      expertise: ['Financial Services Leadership', 'Institutional Scaling & Execution'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/f71453ad9e172b7bb285c1be3fc90a6db8189e44/Nath.jpg',
    },
    {
      id: 'yemisi-shittu',
      name: 'Dr Yemisi  Shittu',
      title: 'Executive Director, Corporate Services',
      category: 'board',
      bio: 'Over 20 years of experience across audit, banking, financial reporting, and CFO roles.',
      experience: '20+ years',
      expertise: ['Development Economics', 'Institutional Reform'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7c8f4712115482a2a0d9920c32dc45e8b540a5f3/shittu.webp',
    },
    {
      id: 'sreeram-parameswaran',
      name: 'Sreeram Parameswaran',
      title: 'Group Executive Director, Finance',
      category: 'board',
      bio: 'Finance executive with expertise in treasury, capital structuring, and financial governance.',

      experience: '15+ years',
      expertise: ['Financial Consolidation', 'Capital Raising & Structuring'],
      img: 'https://picsum.photos/seed/sreeram/600/800',
    },
    {
      id: 'adekunle-sonola',
      name: 'Adekunle Sonola',
      title: 'Independent Non-Executive Director',
      category: 'board',
      bio: 'Banking executive with over 35 years of leadership across Africa’s financial services sector.',
      experience: '15+ years',
      expertise: ['Institutional Restructuring', 'Banking Leadership'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/aed7162565af9db5375e524670696077ab317f34/Sonola.jpg',
    },
    
     {
      id: 'omosuyi-michael',
      name: 'Omosuyi Michael',
      title: 'Independent Non-Executive Director',
      category: 'board',
      bio: 'Financial regulator and Enterprise risk professional with over two decades of service at the Central Bank of Nigeria.',
      experience: '15+ years',
      expertise: ['Regulatory Supervision', 'Economic Intelligence'],
      img: 'https://picsum.photos/seed/sreeram/600/800',
    },
    {
      id: 'tolulope-olatunji',
      name: 'Tolulope Olatunji',
      title: 'Group Company Secretary & Legal Adviser',
      category: 'board',
      bio: 'Governance and legal advisory professional with deep expertise in corporate law, regulatory compliance, and dispute resolution.',
      experience: '15+ years',
      expertise: ['Intellectual Property Management', 'Enterprise Risk Advisory'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7c8f4712115482a2a0d9920c32dc45e8b540a5f3/tolulope.webp',
    },
    
    {
      id: 'abubakar-soyemi',
      name: 'Abubakar Soyemi',
      title: 'Group Chief Operations Officer',
      category: 'executive management',
      bio: 'Seasoned operations and governance leader with over 25 years of experience across commercial banking operations, compliance, and enterprise transformation.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/ba18324510f8120b91f7f8f4773cf2e9be56201f/Abubakar%20Soyemi.jpg',
    },
    {
      id: 'jemirin-bamidele',
      name: 'Jemirin Bamidele',
      title: 'Director, business development, partnership & growth',
      category: 'executive management',
      bio: 'Senior business and technology executive with over two decades of experience across financial operations, fintech ecosystems, enterprise systems, and public-sector partnerships.',
      experience: '15+ years',
      expertise: ['Fintech', 'Cloud Architecture'],
      img: 'https://picsum.photos/seed/sreeram/600/800',
    },
    {
      id: 'blaise-oluwole',
      name: '⁠Blaise Oluwole',
      title: 'Group Head, Business Risk and Internal Control',
      category: 'executive management',
      bio: 'Enterprise risk and governance leader with over three decades of experience safeguarding institutional integrity across banking, manufacturing, audit, and conglomerate environments.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/0364cf3b055704c1aab71a35dad04e5b43e52813/Blaise%20Oluwole.jpg',
    },
    {
      id: 'moyosore-odeniyi',
      name: 'Dr Moyosore Odeniyi',
      title: 'Group Head Internal Audit',
      category: 'executive management',
      bio: 'Assurance, risk, and compliance executive with over 25 years of experience across consulting and multinational corporate environments.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/f71453ad9e172b7bb285c1be3fc90a6db8189e44/moyosore.jpg',
    },
    {
      id: 'uwa-tessy',
      name: 'Uwa Tesssy Michael-Okafor',
      title: 'Group Chief Human Resource Officer',
      category: 'executive management',
      bio: 'Senior people and governance executive with over 17 years of experience building high-performance organisations across financial services, advisory, energy, and consumer goods sectors.',
      experience: '15+ years',
      expertise: ['Fintech', 'Cloud Architecture'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/f71453ad9e172b7bb285c1be3fc90a6db8189e44/Uwa%20Tessy%20Micheal-Okafor.jpg',
    },
    
    {
      id: 'daniel-ale',
      name: 'Daniel Ale',
      title: 'Chief Technology Officer',
      category: 'executive management',
      bio: 'Engineering leader with 20+ years leading distributed agile teams.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/a6c0dd2bee15c6a0aec45ac263bcc03aa948d1d3/Daniel%20Ale.jpg',
    },
    {
      id: 'segun-sanusi',
      name: 'Segun Sanusi',
      title: 'Chief Information Officer',
      category: 'executive management',
      bio: 'Seasoned technology and fintech executive with over a decade of experience building secure, scalable payment systems and enterprise software platforms.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/feafd990f0e50309f5aef3ab66c6470313d57bee/Segun%20Sanusi.jpg',
    },
    {
      id: 'ilabeshi-gabriel',
      name: 'Ilabeshi Gabriel',
      title: 'Group Head, Marketing & Communications',
      category: 'executive management',
      bio: 'Strategic brand and communications leader with deep expertise in multi-market growth, corporate reputation, and performance-driven marketing across regulated and high-growth sectors.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/fb6126005079d398b1392bbd83aa15b9cd6b016c/beshi.webp',
    },
    {
      id: 'tolulope-olatunji',
      name: 'Tolulope Olatunji',
      title: 'Company Secretary',
      category: 'executive management',
      bio: 'Experienced legal advisor with 15+ years of corporate law specialization.',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7c8f4712115482a2a0d9920c32dc45e8b540a5f3/tolulope.webp',
    },
    
    {
      id: 'samuel-olaifa',
      name: 'Samuel Olaifa',
      title: 'Head Of Treasury',
      category: 'executive management',
      bio: 'Seasoned treasury and trade finance executive with over a decade of experience driving liquidity strategy, and financial risk management across diversified sectors.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/2b7fc7d19d385dbf57f5142a11ade566e2ba29c5/samuel%20olaifa.jpeg',
    },
    
    
    {
      id: 'yusuf-adeojo',
      name: 'Yusuf Adeojo',
      title: 'Managing Director, Kolomoni MFB',
      category: 'MDs',
      bio: 'C-suite executive and product-led growth strategist with deep expertise in inclusive banking, embedded finance, and digital financial ecosystems.',
      experience: '20+ years',
      expertise: ['Financial Reporting', 'Banking'],
      img: 'https://picsum.photos/seed/sreeram/600/800',
    },
    {
      id: 'macdonald-okoh',
      name: 'MacDonald Okoh',
      title: 'Managing Director, Kolomoni MFI',
      category: 'MDs',
      bio: 'Seasoned fintech executive and cross-border expansion strategist with nearly two decades of experience driving digital banking, financial inclusion, and payment innovation across Africa.',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/8698cd002782950e0ba4640e911186a076f66397/okoh.webp',
    },
    {
      id: 'mark-duru',
      name: 'Mark Duru',
      title: 'Managing Director, Ercas Integrated Solutions',
      category: 'MDs',
      bio: 'Growth-focused fintech executive with over two decades of cross-industry experience spanning digital payments, enterprise integrations, insurance, and strategic partnerships.',
      experience: '15+ years',
      expertise: [
    'Digital Payments Infrastructure',
    'Revenue Growth and Adoption Strategy',
  ],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7e0e35bfa5565c0ed7ac600ef63c493c0b0670bb/Mark%20Duru.jpg',
    },
    {
      id: 'yvonne-akintomide',
      name: 'Yvonne Akintomide',
      title: 'Managing Director, Regius Asset Management',
      category: 'MDs',
      bio: '14+ years of experience across asset management, wealth management, strategy, and business development.',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/aed7162565af9db5375e524670696077ab317f34/yvonne.jpg',
    },
    {
      id: 'simisola-ojumu',
      name: 'Simisola Ojumu',
      title: 'Managing Director, Regius Capital',
      category: 'MDs',
      bio: 'Investment banking and corporate finance executive with over 18 years of experience structuring and executing debt...',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/4f29e88830efe60fcc825b14b47c89c826e25c02/Simisola%20Ojumu.jpg',
    },
    {
      id: 'martins-bamgbose',
      name: 'Martins Bamgbose',
      title: 'Head of Business, Credit Assist',
      category: 'MDs',
      bio: 'Strategic credit and structured finance leader with deep expertise in export finance, agribusiness, commodity lending, and...',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/861d01a0b6204b09e6a514f80c3dafb988820b48/Martins%20Bamgbose.jpg',
    },
    {
      id: 'ada-boniface',
      name: 'Ada Boniface',
      title: 'Managing Director, AfrikMoney',
      category: 'MDs',
      bio: 'Senior financial services executive and transformation strategist with over 25 years of experience spanning commercial banking...',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://picsum.photos/seed/tolulope/600/800',
    },
    {
      id: 'olabisi-racheal',
      name: 'Olabisi Racheal',
      title: 'Managing Director, AfrikMoney',
      category: 'MDs',
      bio: 'Cross-border payments strategist and remittance growth leader focused on expanding globally competitive remittance corridors.',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://picsum.photos/seed/tolulope/600/800',
    },
    {
      id: 'david-novak',
      name: 'David Novak',
      title: 'Managing Director, Sagebrush Wealth',
      category: 'MDs',
      bio: 'Financial services and fintech executive with over 15 years of leadership experience across Europe, the Middle East, and Asia',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://picsum.photos/seed/tolulope/600/800',
    },
  ];

  const filteredTeam = executives.filter(
    (member) => member.category === selectedCategory
  );

  return (
    <section style={{ paddingTop: '100px' }}>
      <div className="container" style={{ marginTop: '120px', textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'var(--font-head)',
            fontSize: '3rem',
            fontWeight: 700,
            marginBottom: '20px',
            color: 'white',
          }}
        >
          Meet Our Visionary Leadership
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            color: 'var(--text-muted)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.8',
          }}
        >
          Decades of combined expertise across finance, technology, and business innovation.
        </p>
      </div>

      {/* Category Filter */}
      <div
        className="container"
        style={{
          marginTop: '70px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {['board', 'executive management','MDs' ].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '12px 30px',
              borderRadius: '50px',
              border: '1px solid var(--border)',
              background:
                selectedCategory === cat ? 'var(--primary)' : 'transparent',
              color: 'white',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              textTransform:'capitalize'
              
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="container" style={{ marginBottom: '120px' }}>
        <div className="team-grid">
          {filteredTeam.map((member) => (
            <Link
              key={member.id}
              href={`/executives/${member.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="card">
                {/* Image */}
                <div className="image-wrapper">
                  <img
                    src={member.img}
                    alt={member.name}
                  />
                </div>

                {/* Info */}
                <div className="card-content">
                  <h3>{member.name}</h3>
                  <p className="title">{member.title}</p>
                  <p className="bio">{member.bio}</p>

                  <div className="tags">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx}>{skill}</span>
                    ))}
                  </div>

                  <div className="cta">
                    View Profile →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
        }

        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          background: linear-gradient(
            135deg,
            rgba(0, 50, 132, 0.1),
            rgba(249, 115, 22, 0.05)
          );
          border: 1px solid var(--border);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
        }

        .card:hover {
          transform: translateY(-10px);
          border-color: var(--secondary);
          box-shadow: 0 20px 40px rgba(249, 115, 22, 0.2);
        }

        .image-wrapper {
          width: 100%;
          height: 420px; /* Bigger image */
          overflow: hidden;
          background: #1e293b;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.4s ease;
        }

        .card:hover img {
          transform: scale(1.05);
        }

        .card-content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        h3 {
          font-size: 1.4rem;
          margin-bottom: 8px;
          color: white;
        }

        .title {
          color: var(--secondary);
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .bio {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }

        .tags span {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.cta {
  margin-top: 20px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
}

      `}</style>
    </section>
  );
}







