export default function CareersPage() {
  const jobs = [
    {
      title: 'Senior Backend Engineer',
      category: 'Engineering',
      location: 'Lagos',
    },
    {
      title: 'Product Manager (Fintech)',
      category: 'Product',
      location: 'Remote',
    },
    {
      title: 'Risk Analyst',
      category: 'Operations',
      location: 'Lagos',
    },
    {
      title: 'UX/UI Designer',
      category: 'Design',
      location: 'Lagos',
    },
  ];

  return (
    <section className="page-section">
      <div className="container section-padding">
        <h1 style={{ fontFamily: 'var(--font-head)', fontSize: '4rem' }}>Join the Revolution</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '60px' }}>
          We are looking for passionate innovators to help us build the future of finance in Africa.
        </p>

        <div className="job-list">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.5rem' }}>{job.title}</h3>
                <span style={{ color: 'var(--secondary)' }}>
                  {job.category} • {job.location}
                </span>
              </div>
              <button className="btn btn-outline">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
