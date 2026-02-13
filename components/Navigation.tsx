'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);

      const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
      const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

      if (cursorDot && cursorOutline) {
        cursorDot.style.left = `${x}px`;
        cursorDot.style.top = `${y}px`;
        cursorOutline.style.left = `${x}px`;
        cursorOutline.style.top = `${y}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interactables = document.querySelectorAll('a, button, input, textarea, .member-card, .eco-card, .approach-card');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    return () => {
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.removeEventListener('mouseleave', () => document.body.classList.remove('hovering'));
      });
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => pathname === path ? 'active' : '';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/ecosystem', label: 'Ecosystem' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={isScrolled ? 'scrolled' : ''}>
        <nav className="container nav-inner">
          <Link href="/" className="logo">
            <img 
              src="https://raw.githubusercontent.com/DannyYo696/svillage/b01dd224e847135fc6b636c8cd74e60c397d6a59/cs-logo.webp" 
              alt="CapitalSage" 
              style={{ height: '80px', width: 'auto' }}
            />
          </Link>

          <div className="nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`nav-link ${isActive(link.href)}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <button 
            className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
          </button>
        </nav>
      </header>

      {/* Circular Reveal Mobile Menu */}
      <div className={`mobile-menu-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
        {/* Circular expanding background */}
        <div className="menu-circle-bg"></div>
        
        {/* Close Button */}
        <button 
          className="mobile-menu-close"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <span className="close-line"></span>
          <span className="close-line"></span>
        </button>
        
        {/* Navigation Links with staggered reveal */}
        <div className="mobile-menu-content">
          {navLinks.map((link, index) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`mobile-nav-link ${isActive(link.href)}`}
              style={{ '--delay': `${index * 0.08}s` } as React.CSSProperties}
            >
              
              <span className="link-text">{link.label}</span>
              <span className="link-arrow">→</span>
            </Link>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="menu-decoration">
          <div className="deco-circle deco-1"></div>
          <div className="deco-circle deco-2"></div>
          <div className="deco-circle deco-3"></div>
        </div>
      </div>
    </>
  );
}