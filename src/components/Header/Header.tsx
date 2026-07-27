"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navItems = [
  {
    label: 'Our services',
    href: '/our-services',
    columns: [
      {
        title: 'OUR OFFERINGS',
        links: [
          { label: 'Technical Ship Management', highlight: false },
          { label: 'Crew Management', highlight: false },
          { label: 'Newbuilding Supervision', highlight: false },
          { label: 'Cruise and Leisure Management', highlight: false },
          { label: 'Sustainability and Performance Services', highlight: false },
        ],
      },
      {
        title: 'OUR VESSELS',
        links: [
          { label: 'Dual-Fuel Vessel Management', highlight: false },
          { label: 'Bulk Carrier Management', highlight: false },
          { label: 'Oil / Chemical Tanker Management', highlight: false },
          { label: 'Container Ship Management', highlight: false },
          { label: 'Gas Tanker Management', highlight: false },
          { label: 'Ro Ro Ship Management', highlight: false },
          { label: 'Offshore Ship Management', highlight: false },
          { label: 'Passenger Ship Management', highlight: false },
          { label: 'LNG Carrier Management', highlight: false },
        ],
      },
    ],
    featured: {
      badge: 'VESSELS',
      image: 'https://assets.angloeastern.com/assets/2026/06/1920X942-yamamaru-768x377.jpg',
      title: 'YM Centennial: Marking a...',
      excerpt: 'The naming of YM Centennial took place at a meaningful moment in Yamamaru Kisen\'s history....',
    },
  },
  {
    label: 'Our people',
    href: '/our-people',
    columns: [
      {
        title: '',
        links: [
          { label: 'Our Teams at Sea', highlight: false },
          { label: 'Maritime Training', href: '/maritime-training', highlight: false },
          { label: 'Our Teams Ashore', highlight: false },
          { label: 'Careers', href: '/careers', highlight: false },
        ],
      },
    ],
    featured: {
      badge: 'COMPANY NEWS',
      image: 'https://assets.angloeastern.com/assets/2026/06/1920X942-6a2a0d3b15f94-768x377.webp',
      title: 'Anglo-Eastern Technical Sum...',
      excerpt: 'The inaugural Anglo-Eastern Technical Summit brought senior leaders and technic...',
    },
  },
  {
    label: 'Our technology',
    href: '/our-technology',
    columns: [
      {
        title: '',
        links: [
          { label: 'Technology & Innovation', highlight: false },
        ],
      },
    ],
    featured: {
      badge: 'COMPANY NEWS',
      image: 'https://assets.angloeastern.com/assets/2026/06/1920X942-6a2a0d3b15f94-768x377.webp',
      title: 'Anglo-Eastern Technical Sum...',
      excerpt: 'The inaugural Anglo-Eastern Technical Summit brought senior leaders and technic...',
    },
  },
  {
    label: 'Maritime training',
    href: '/maritime-training',
    columns: null,
    featured: null,
  },
  {
    label: 'News and insights',
    href: '/news-and-insights',
    columns: [
      {
        title: '',
        links: [
          { label: 'Latest News', highlight: false },
        ],
      },
    ],
    featured: {
      badge: 'FEATURED',
      image: 'https://assets.angloeastern.com/assets/2026/07/Anglo-Eastern_July-2026-foresights-cover-1920X942-copy-3-927x450.jpg',
      title: 'Foresights | The changing natur...',
      excerpt: 'The purpose of ship management has not changed. The nature of excellence has. In this thought...',
    },
  },
  {
    label: 'Careers',
    href: '/careers',
    columns: null,
    featured: null,
  },
  {
    label: 'About us',
    href: '/about-us',
    columns: [
      {
        title: '',
        links: [
          { label: 'Overview', highlight: false },
          { label: 'Sustainability', highlight: false },
          { label: 'Leadership', highlight: false },
          { label: 'Our Offices', highlight: false },
        ],
      },
    ],
    featured: {
      badge: 'COMPANY NEWS',
      image: 'https://assets.angloeastern.com/assets/2026/06/1920X942-website-cover-917x450.jpg',
      title: 'Day of the Seafarer 2026',
      excerpt: 'Our CEO Bjorn Hojgaard speaks about seafarers\' vital role in global trade, the risks they face,...',
    },
  },
  {
    label: 'Contact us',
    href: '/contact-us',
    columns: null,
    featured: null,
  },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isTransparentPage = (pathname === '/' || pathname === '/contact-us' || pathname === '/careers' || pathname === '/maritime-training' || pathname === '/our-people' || pathname === '/our-technology' || pathname === '/news-and-insights' || pathname === '/about-us') && !isScrolled;
  const isNavyPage = pathname === '/our-services' && !isScrolled;

  const activeItem = navItems.find((item) => item.label === activeNav);
  const hasDropdown = activeItem && activeItem.columns;

  return (
    <header
      className={`${styles.header} ${isMobileMenuOpen ? styles.headerMobileOpen : ''}`}
      onMouseLeave={() => setActiveNav(null)}
    >
      {/* Top bar: Logo + My Anglo-Eastern */}
      <div className={`${styles.topBar} ${isTransparentPage ? styles.topBarTransparent : ''} ${isNavyPage ? styles.topBarNavy : ''}`}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoFull}>
            {isTransparentPage || isNavyPage ? (
              <img src="/ae-logo-white.svg" alt="Anglo-Eastern Logo" width="280" height="48" onError={(e) => { e.currentTarget.src = "/ae-logo-2.svg" }} />
            ) : (
              <img src="/ae-logo-2.svg" alt="Anglo-Eastern Logo" width="280" height="48" />
            )}
          </Link>
        </div>
        <div className={`${styles.topRight} ${(isTransparentPage || isNavyPage) ? styles.topRightWhite : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <a href="#" className={`${styles.myAngloEastern} ${(isTransparentPage || isNavyPage) ? styles.myAngloEasternWhite : ''}`}>My Anglo-Eastern »</a>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`${styles.mainNav} ${isTransparentPage ? styles.mainNavTransparent : ''} ${isNavyPage ? styles.mainNavNavy : ''}`}>
        <ul>
          {navItems.map((item) => {
            const href = (item as { href?: string }).href;
            const isActivePage = href && pathname === href;
            return (
              <li
                key={item.label}
                className={`${styles.navItem} ${activeNav === item.label || isActivePage ? styles.activeNavItem : ''}`}
                onMouseEnter={() => setActiveNav(item.label)}
              >
                {href ? (
                  <Link href={href}>{item.label}</Link>
                ) : (
                  <a href="#">{item.label}</a>
                )}
              </li>
            );
          })}
        </ul>
        
        {/* Mobile Hamburger Toggle */}
        <button 
          className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.open : ''} ${(isTransparentPage || isNavyPage) ? styles.toggleWhite : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <ul className={styles.mobileNavList}>
          {navItems.map((item) => {
            const href = (item as { href?: string }).href;
            return (
              <li key={item.label} className={styles.mobileNavItem}>
                {href ? (
                  <Link href={href} onClick={() => setIsMobileMenuOpen(false)}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
                
                {/* Render simple sub-links for mobile if they exist */}
                {item.columns && (
                  <ul className={styles.mobileSubNavList}>
                    {item.columns.map((col) => 
                      col.links.map((link) => (
                        <li key={link.label}>
                          {link.href ? (
                            <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</Link>
                          ) : (
                            <a href="#" onClick={(e) => { e.preventDefault(); }}>{link.label}</a>
                          )}
                        </li>
                      ))
                    )}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mega menu dropdown */}
      {hasDropdown && (
        <div className={styles.megaMenu}>
          <div className={styles.megaMenuContent}>
            {/* Left: link columns */}
            <div className={styles.dropdownLists}>
              {activeItem.columns!.map((col, idx) => (
                <div key={idx} className={styles.dropdownListColumn}>
                  {col.title && <span className={styles.listTitle}>{col.title}</span>}
                  <ul className={styles.listLinks}>
                    {col.links.map((link) => (
                      <li key={link.label}>
                        {(link as { href?: string }).href ? (
                          <Link 
                            href={(link as { href?: string }).href!}
                            className={link.highlight ? styles.highlightLink : styles.normalLink}
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href="#"
                            className={link.highlight ? styles.highlightLink : styles.normalLink}
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right: featured card */}
            {activeItem.featured && (
              <div className={styles.featuredCard}>
                <div className={styles.featuredImageContainer}>
                  <span className={styles.featuredBadge}>{activeItem.featured.badge}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeItem.featured.image}
                    alt={activeItem.featured.title}
                    className={styles.featuredImage}
                  />
                </div>
                <div className={styles.featuredText}>
                  <h4 className={styles.featuredTitle}>{activeItem.featured.title}</h4>
                  <p className={styles.featuredExcerpt}>{activeItem.featured.excerpt}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
