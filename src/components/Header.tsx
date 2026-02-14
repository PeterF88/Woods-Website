import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Pages with hero backgrounds where header should be transparent
  const heroPages = ['/', '/about', '/programs', '/pricing', '/contact', '/foundation', '/registrations', '/policies', '/shop', '/community-access', '/phase-ii', '/heartland-challenge'];
  const hasHero = heroPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Junior Tennis',
      path: '/junior-tennis',
      dropdown: [
        { label: 'Junior Class Descriptions', path: '/junior-tennis?tab=0' },
        { label: 'Junior Tournaments', path: '/junior-tennis?tab=1' },
        { label: 'Outreach / NJTL', path: '/junior-tennis?tab=2' },
        { label: 'Register for Classes', path: '/junior-tennis?tab=3' }
      ]
    },
    {
      label: 'Adult Tennis',
      path: '/adult-tennis',
      dropdown: [
        { label: 'Adult Classes & Drills', path: '/adult-tennis?tab=0' },
        { label: 'Register for Classes', path: '/adult-tennis?tab=1' }
      ]
    },
    {
      label: 'Community & Access',
      path: '/community',
      dropdown: [
        { label: 'Adaptive / Wheelchair', path: '/community?tab=0' },
        { label: 'Satellite Sites', path: '/community?tab=1' },
        { label: 'Community Access', path: '/community?tab=2' },
        { label: 'Community Closet', path: '/community?tab=3' }
      ]
    },
    {
      label: 'About Us',
      path: '/about-us',
      dropdown: [
        { label: 'Our Story', path: '/about-us?tab=0' },
        { label: 'Our Team', path: '/about-us?tab=1' },
        { label: 'Our Board', path: '/about-us?tab=2' },
        { label: 'Join Our Team', path: '/about-us?tab=3' },
        { label: 'Foundation', path: '/about-us?tab=4' },
        { label: 'Phase II', path: '/about-us?tab=5' }
      ]
    },
    {
      label: 'General Info',
      path: '/general-info',
      dropdown: [
        { label: 'Pricing & Memberships', path: '/general-info?tab=0' },
        { label: 'Policies & Weather', path: '/general-info?tab=1' },
        { label: 'Woods Shop', path: '/general-info?tab=2' },
        { label: 'Location & Contact', path: '/general-info?tab=3' }
      ]
    },
    { label: 'Events', path: '/events' }
  ];

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${hasHero && !isScrolled ? 'header-transparent' : ''}`}>
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src="/woods-logo.png" alt="Woods Tennis Center" className="logo-image" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path || (item.dropdown && item.dropdown.some(sub => location.pathname === sub.path.split('?')[0]));

            return (
              <div key={index} className="nav-item-wrapper">
                {item.dropdown ? (
                  <div className="nav-dropdown-trigger">
                    <Link to={item.path} className={`nav-link ${isActive ? 'active' : ''}`}>
                      {item.label} <ChevronDown size={14} className="dropdown-arrow" />
                    </Link>
                    <div className="nav-dropdown-menu">
                      {item.label === 'Play' ? (
                        <div className="dropdown-mega-grid">
                          {item.dropdown.map((section: any, idx: number) => (
                            <div key={idx} className="dropdown-section">
                              <h4 className="dropdown-header">{section.header}</h4>
                              <ul>
                                {section.items.map((subItem: any, subIdx: number) => (
                                  <li key={subIdx}>
                                    {subItem.path.startsWith('http') ? (
                                      <a href={subItem.path} target="_blank" rel="noopener noreferrer" className="dropdown-link">
                                        {subItem.label}
                                      </a>
                                    ) : (
                                      <Link to={subItem.path} className="dropdown-link">{subItem.label}</Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="dropdown-list">
                          {item.dropdown.map((subItem: any, idx: number) => (
                            <li key={idx}>
                              {subItem.path.startsWith('http') ? (
                                <a href={subItem.path} target="_blank" rel="noopener noreferrer" className="dropdown-link">
                                  {subItem.label}
                                </a>
                              ) : (
                                <Link to={subItem.path} className="dropdown-link">{subItem.label}</Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
          <a
            href="https://courtreserve.com/Online/Reservations/Index/4714"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary header-cta"
          >
            Book a Court
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <div key={index} className="mobile-nav-item">
            {item.dropdown ? (
              <>
                <button
                  className="mobile-nav-link dropdown-toggle"
                  onClick={() => toggleDropdown(item.label)}
                >
                  {item.label} <ChevronDown size={16} className={`mobile-arrow ${activeDropdown === item.label ? 'rotated' : ''}`} />
                </button>
                <div className={`mobile-dropdown-content ${activeDropdown === item.label ? 'open' : ''}`}>
                  {item.label === 'Play' ? (
                    item.dropdown.map((section: any, idx: number) => (
                      <div key={idx} className="mobile-dropdown-section">
                        <h5 className="mobile-section-header">{section.header}</h5>
                        {section.items.map((subItem: any, subIdx: number) => (
                          subItem.path.startsWith('http') ? (
                            <a key={subIdx} href={subItem.path} target="_blank" rel="noopener noreferrer" className="mobile-sublink">
                              {subItem.label}
                            </a>
                          ) : (
                            <Link key={subIdx} to={subItem.path} className="mobile-sublink">{subItem.label}</Link>
                          )
                        ))}
                      </div>
                    ))
                  ) : (
                    item.dropdown.map((subItem: any, idx: number) => (
                      subItem.path.startsWith('http') ? (
                        <a key={idx} href={subItem.path} target="_blank" rel="noopener noreferrer" className="mobile-sublink">
                          {subItem.label}
                        </a>
                      ) : (
                        <Link key={idx} to={subItem.path} className="mobile-sublink">{subItem.label}</Link>
                      )
                    ))
                  )}
                </div>
              </>
            ) : (
              <Link
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <a
          href="https://courtreserve.com/Online/Reservations/Index/4714"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mobile-cta"
        >
          Book a Court
        </a>
      </nav>
    </header>
  );
};

export default Header;
