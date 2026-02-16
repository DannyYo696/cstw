import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
              <img 
                src="https://raw.githubusercontent.com/DannyYo696/svillage/b01dd224e847135fc6b636c8cd74e60c397d6a59/cs-logo.webp" 
                alt="CapitalSage Logo" 
                style={{ height: '80px' }}
              />
            </Link>
            <p style={{ color: 'var(--text-muted)', marginBottom: '25px', lineHeight: 1.6 }}>
              Innovation-driven finance for Africa. We are building the infrastructure for sustainable wealth creation across the continent.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', transition: '0.3s' }}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', transition: '0.3s' }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" style={{ color: 'var(--text-muted)', fontSize: '1.2rem', transition: '0.3s' }}>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/leadership">Leadership</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Ecosystem</h5>
            <ul>
              <li><Link href="/ecosystem">Kolomoni</Link></li>
              <li><Link href="/ecosystem">ERCAS</Link></li>
              <li><Link href="/ecosystem">Afrikmoney</Link></li>
              <li><Link href="/ecosystem">Regius</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          &copy; 2026 CapitalSage Technology Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
