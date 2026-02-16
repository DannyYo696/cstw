'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LeadershipPage() {
  const [selectedCategory, setSelectedCategory] = useState('board');

  const executives = [
    {
      
      id: 'john-alamu',
      name: 'John Alamu',
      title: 'Group Executive Director, Corporate Services',
      category: 'board',
      bio: 'Accomplished economist and internationally recognised human development expert.',
      experience: '20+ years',
      expertise: ['Economics', 'Human Development'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7c8f4712115482a2a0d9920c32dc45e8b540a5f3/alamu.webp',
    },
   
    {
      id: 'yemisi-shittu',
      name: 'Dr Yemisi Shittu',
      title: 'Group Executive Director, Finance',
      category: 'board',
      bio: 'Over 20 years of experience across audit, banking, financial reporting, and CFO roles.',
      experience: '20+ years',
      expertise: ['Financial Reporting', 'Banking'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7c8f4712115482a2a0d9920c32dc45e8b540a5f3/shittu.webp',
    },
    {
      id: 'tolulope-olatunji',
      name: 'Tolulope Olatunji',
      title: 'Company Secretary',
      category: 'board',
      bio: 'Experienced legal advisor with 15+ years of corporate law specialization.',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7c8f4712115482a2a0d9920c32dc45e8b540a5f3/tolulope.webp',
    },
    {
      id: 'nath-ude',
      name: '⁠Nath Ude',
      title: 'Group Chief Executive Officer',
      category: 'executive management',
      bio: 'Engineering leader with 20+ years leading distributed agile teams.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/2a5a9c5b39ea8aad5416bdeda7f3b332f4942695/Nath%20Ude.jpg',
    },
    {
      id: 'abubakar-soyemi',
      name: 'Abubakar Soyemi',
      title: 'Group Chief Operations Officer',
      category: 'executive management',
      bio: 'Engineering leader with 20+ years leading distributed agile teams.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/ba18324510f8120b91f7f8f4773cf2e9be56201f/Abubakar%20Soyemi.jpg',
    },
    {
      id: 'moyosore-odeniyi',
      name: 'Dr Moyosore Odeniyi',
      title: 'Group Head Internal Audit',
      category: 'executive management',
      bio: 'Engineering leader with 20+ years leading distributed agile teams.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/1e4a8634eef910bb89614b7f94d3cd22ede933da/odeniyi.webp',
    },
    {
      id: 'blaise-oluwole',
      name: '⁠Blaise Oluwole',
      title: 'Group Head, Business Risk and Internal Control',
      category: 'executive management',
      bio: 'Engineering leader with 20+ years leading distributed agile teams.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/0364cf3b055704c1aab71a35dad04e5b43e52813/Blaise%20Oluwole.jpg',
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
      bio: 'Engineering leader with 20+ years leading distributed agile teams.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/feafd990f0e50309f5aef3ab66c6470313d57bee/Segun%20Sanusi.jpg',
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
      id: 'ilabeshi-gabriel',
      name: 'Ilabeshi Gabriel',
      title: 'Group Head, Marketing & Communications',
      category: 'executive management',
      bio: 'Engineering leader with 20+ years leading distributed agile teams.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/fb6126005079d398b1392bbd83aa15b9cd6b016c/beshi.webp',
    },
    {
      id: 'olawale-emilola',
      name: 'Olawale Emilola',
      title: 'Group Head Procurement',
      category: 'executive management',
      bio: 'Technology executive experienced in fintech and enterprise systems.',
      experience: '15+ years',
      expertise: ['Fintech', 'Cloud Architecture'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/eee6088599fcc87ef8900a9f891060dcd09bdb45/emilola.webp',
    },
    {
      id: 'samuel-olaifa',
      name: 'Samuel Olaifa',
      title: 'Head Of Treasury',
      category: 'executive management',
      bio: 'Engineering leader with 20+ years leading distributed agile teams.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/2b7fc7d19d385dbf57f5142a11ade566e2ba29c5/samuel%20olaifa.jpeg',
    },
    
    {
      id: 'fasasi-sullyman',
      name: '⁠Fasasi Sullyman',
      title: 'Group Chief Security Officer',
      category: 'executive management',
      bio: 'Operations and business leader with over 20 years of experience in banking.',
      experience: '20+ years',
      expertise: ['Operations', 'Risk Control'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/91114b017fe9fc07cc7a34654549f4d04d2e488f/fasasi.webp',
    },
    {
      id: 'yusuf-adeojo',
      name: 'Yusuf Adeojo',
      title: 'Managing Director, Kolomoni MFB',
      category: 'MDs',
      bio: 'Over 20 years of experience across audit, banking, financial reporting, and CFO roles.',
      experience: '20+ years',
      expertise: ['Financial Reporting', 'Banking'],
      img: 'https://picsum.photos/seed/sreeram/600/800',
    },
    {
      id: 'macdonald-okoh',
      name: 'MacDonald Okoh',
      title: 'Managing Director, Kolomoni MFI',
      category: 'MDs',
      bio: 'Experienced legal advisor with 15+ years of corporate law specialization.',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/8698cd002782950e0ba4640e911186a076f66397/okoh.webp',
    },
    {
      id: 'mark-duru',
      name: 'Mark Duru',
      title: 'Managing Director, Ercas Integrated Solutions',
      category: 'MDs',
      bio: 'Experienced legal advisor with 15+ years of corporate law specialization.',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7e0e35bfa5565c0ed7ac600ef63c493c0b0670bb/Mark%20Duru.jpg',
    },
    {
      id: 'yvonne-akintomide',
      name: 'Yvonne Akintomide',
      title: 'Managing Director, Regius Asset Management',
      category: 'MDs',
      bio: 'Experienced legal advisor with 15+ years of corporate law specialization.',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://picsum.photos/seed/tolulope/600/800',
    },
    {
      id: 'simisola-ojumu',
      name: 'Simisola Ojumu',
      title: 'Managing Director, Regius Capital',
      category: 'MDs',
      bio: 'Experienced legal advisor with 15+ years of corporate law specialization.',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/4f29e88830efe60fcc825b14b47c89c826e25c02/Simisola%20Ojumu.jpg',
    },
    {
      id: 'david-novak',
      name: 'David Novak',
      title: 'Managing Director, Sagebrush Wealth',
      category: 'MDs',
      bio: 'Experienced legal advisor with 15+ years of corporate law specialization.',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://picsum.photos/seed/tolulope/600/800',
    },
    {
      id: 'martins-bamgbose',
      name: 'Martins Bamgbose',
      title: 'Managing Director, Sagebrush Wealth',
      category: 'MDs',
      bio: 'Experienced legal advisor with 15+ years of corporate law specialization.',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/861d01a0b6204b09e6a514f80c3dafb988820b48/Martins%20Bamgbose.jpg',
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
          background: rgba(249, 115, 22, 0.15);
          color: var(--secondary);
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .cta {
          margin-top: 20px;
          color: var(--secondary);
          font-size: 0.9rem;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}







