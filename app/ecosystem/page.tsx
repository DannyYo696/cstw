'use client';

export default function EcosystemPage() {
  const brands = [
    {
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/2968a8b12f5bbb620d764e9db309906c039206d8/KM%20ICON.png',
      title: 'Kolomoni MFB Nigeria',
      desc: 'Digital microfinance bank providing comprehensive financial services across Nigeria.',
      btn: 'Learn More',
      link: 'https://kolomonimfb.com/',
    },
    {
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/2968a8b12f5bbb620d764e9db309906c039206d8/KM%20ICON.png',
      title: 'Kolomoni MFI Gambia',
      desc: 'Microfinance solutions tailored for rural communities in The Gambia.',
      btn: 'Learn More',
      link: 'https://www.kolomonigambia.com/',
    },
    {
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/2968a8b12f5bbb620d764e9db309906c039206d8/ercas%20icon.png',
      title: 'Ercas',
      desc: 'Integrated payment services and digital solutions for business.',
      btn: 'Learn More',
      link: 'https://ercas.ng/',
    },
    {
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/ca15e2ba3318b9e7c16ee4e9a04a9490753ad14a/CREDIT%20ASSIST%20-%203.png',
      title: 'Credit Assist',
      desc: 'Bridging the gap in agricultural and trade financing.',
      btn: 'Learn More',
      link: '/brands/credit-assist',
    },
    {
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/2968a8b12f5bbb620d764e9db309906c039206d8/REGUIS%20WHITE.png',
      title: 'Regius Capital',
      desc: 'Debt and equity solutions driving capital market growth.',
      btn: 'Learn More',
      link: 'https://regiuscapital.ng/',
    },
    {
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/ca15e2ba3318b9e7c16ee4e9a04a9490753ad14a/Rc_AM.png',
      title: 'Regius Asset Management',
      desc: 'Wealth management and portfolio creation for sustainable returns.',
      btn: 'Learn More',
      link: 'https://regiusassetmanagement.com/',
    },
    {
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/51892b531cab83c46f918c98313766ab821a298e/tikibycs2.png',
      title: 'AfrikMoney',
      desc: 'Seamless cross-border remittances from UK to Africa.',
      btn: 'Learn More',
      link: 'https://tikibykolomoni.com/',
    },
    {
      img: 'https://raw.githubusercontent.com/DannyYo696/csassets/83530095b3d8f4730b83d9956ae6c4fb5cc0d7e6/sagebrush.png',
      title: 'Sagebrush Wealth',
      desc: 'Global wealth management and financial planning expertise.',
      btn: 'Learn More',
      link: 'https://sagebrushwealth.com/',
    },
  ];

  return (
    <section className="page-section">
      {/* Hero */}
      <div className="ecosystem-hero">
        <div className="hero-visual"></div>
        <div className="eco-hero-content">
          <span
            className="text-gradient-orange"
            style={{ fontWeight: 600, display: 'block', marginBottom: '20px' }}
          >
            SUITES OF SOLUTIONS
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-head)',
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: 1.1,
              marginBottom: '30px',
              fontWeight:'700'
            }}
          >
            Our Connected <span className="text-gradient">Ecosystem</span>
          </h1>

          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            We operate an agile ecosystem of specialized financial brands,
            each designed to solve a specific challenge within the African
            market, working in unison to drive prosperity.
          </p>

          <div
            className="flex"
            style={{
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '50px',
            }}
          >
            <a href="#explore-ecosystem" className="btn btn-primary">
              Explore Brands
            </a>
          </div>
        </div>
      </div>

      {/* Detailed Grid */}
      <div id="explore-ecosystem" className="container section-padding">
        <div className="ecosystem-grid-detailed">
          {brands.map((brand, index) => (
            <a
              key={index}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div className="eco-card-lg" style={{ cursor: 'pointer' }}>
                <div
                  className="eco-card-bg"
                  style={{
                    backgroundImage: `url('https://picsum.photos/seed/${index}/300/300')`,
                  }}
                ></div>

                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <img
                    src={brand.img}
                    alt={brand.title}
                    style={{ height: '60px', marginBottom: '20px' }}
                  />

                  <h2
                    style={{
                      fontFamily: 'var(--font-head)',
                      fontSize: '2.2rem',
                      color: 'var(--secondary)',
                      marginBottom: '10px',
                    }}
                  >
                    {brand.title}
                  </h2>

                  <p style={{ flexGrow: 1 }}>{brand.desc}</p>

                  <span
                    className="btn btn-outline"
                    style={{ marginTop: '20px' }}
                  >
                    {brand.btn}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
