'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LeadershipPage() {
  const [selectedCategory, setSelectedCategory] = useState('board');

  const executives = [
    {
      id: 'oluyemisi-shittu',
      name: 'Dr. Oluyemisi Shittu',
      title: 'Group Executive Director, Corporate Services',
      category: 'board',
      bio: 'Accomplished economist and internationally recognised human development expert with more than 20 years of research and consulting experience.',
      experience: '20+ years',
      expertise: ['Economics', 'Human Development'],
      img: 'https://picsum.photos/seed/oluyemisi/600/800',
    },
    {
      id: 'sreeram-parameswaran',
      name: 'Sreeram Parameswaran',
      title: 'Group Executive Director, Finance',
      category: 'board',
      bio: 'Over 20 years of experience across audit, banking, financial reporting, and CFO roles.',
      experience: '20+ years',
      expertise: ['Financial Reporting', 'Banking'],
      img: 'https://picsum.photos/seed/sreeram/600/800',
    },
    {
      id: 'tolulope-olatunji',
      name: 'Tolulope Olatunji',
      title: 'Company Secretary',
      category: 'board',
      bio: 'Experienced legal advisor with 15+ years of corporate law specialization.',
      experience: '15+ years',
      expertise: ['Corporate Law', 'Compliance'],
      img: 'https://picsum.photos/seed/tolulope/600/800',
    },
    
    {
      id: 'abubakar-soyemi',
      name: 'Abubakar Soyemi',
      title: 'Group Chief Operating Officer',
      category: 'executive',
      bio: 'Operations and business leader with over 20 years of experience in banking.',
      experience: '20+ years',
      expertise: ['Operations', 'Risk Control'],
      img: 'https://picsum.photos/seed/abubakar/600/800',
    },
    {
      id: 'segun-sanusi',
      name: 'Segun Sanusi',
      title: 'Chief Information Officer',
      category: 'executive',
      bio: 'Technology executive experienced in fintech and enterprise systems.',
      experience: '15+ years',
      expertise: ['Fintech', 'Cloud Architecture'],
      img: 'https://picsum.photos/seed/segun/600/800',
    },
    {
      id: 'daniel-ale',
      name: 'Daniel Ale',
      title: 'Chief Technology Officer',
      category: 'executive',
      bio: 'Engineering leader with 20+ years leading distributed agile teams.',
      experience: '20+ years',
      expertise: ['Engineering Leadership', 'Agile'],
      img: 'https://picsum.photos/seed/daniel/600/800',
    },
    {
      id: 'oluyemisi-shittu',
      name: 'Dr. Oluyemisi Shittu',
      title: 'Group Executive Director, Corporate Services',
      category: 'management',
      bio: 'Accomplished economist and internationally recognised human development expert with more than 20 years of research and consulting experience.',
      experience: '20+ years',
      expertise: ['Economics', 'Human Development'],
      img: 'https://picsum.photos/seed/oluyemisi/600/800',
    },
    {
      id: 'sreeram-parameswaran',
      name: 'Sreeram Parameswaran',
      title: 'Group Executive Director, Finance',
      category: 'management',
      bio: 'Over 20 years of experience across audit, banking, financial reporting, and CFO roles.',
      experience: '20+ years',
      expertise: ['Financial Reporting', 'Banking'],
      img: 'https://picsum.photos/seed/sreeram/600/800',
    },
    {
      id: 'tolulope-olatunji',
      name: 'Tolulope Olatunji',
      title: 'Company Secretary',
      category: 'management',
      bio: 'Experienced legal advisor with 15+ years of corporate law specialization.',
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
        {['board', 'executive','management' ].map((cat) => (
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
              textTransform: 'capitalize',
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
