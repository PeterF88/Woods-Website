import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const NavItem = ({ label, links }: { label: string, links?: { name: string, path: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  // OPRC style: Uppercase, tracking-widest, smaller font size for elegance
  const baseClasses = "flex items-center px-3 py-6 text-sm font-bold tracking-widest uppercase hover:text-green-200 transition-colors";

  if (!links) {
    return (
      <Link to={`/${label.toLowerCase().replace(/\s+/g, '-')}`} className={baseClasses}>
        {label}
      </Link>
    );
  }

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className={baseClasses}>
        {label} <ChevronDown size={14} className="ml-1" />
      </button>

      {/* Dropdown Menu - Clean, white, crisp shadow */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:absolute left-0 w-56 bg-white text-gray-800 shadow-xl z-50 rounded-sm border-t-2 border-[var(--color-primary)]`}>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="block px-6 py-3 hover:bg-gray-50 text-sm font-medium border-b last:border-0 border-gray-100 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    {
      label: 'Club Experience',
      links: [
        { name: 'Our Story', path: '/our-story' },
        { name: 'Our Team', path: '/our-team' },
        { name: 'Our Board', path: '/our-board' },
        { name: 'Phase II', path: '/phase-ii' },
      ]
    },
    {
      label: 'Play Here',
      links: [
        { name: 'Group Classes', path: '/group-classes' },
        { name: 'Junior Tennis', path: '/junior-tennis' },
        { name: 'Adult Tennis', path: '/adult-tennis' },
        { name: 'Tournaments', path: '/in-house-tournaments' },
        { name: 'Leagues', path: '/usta' },
      ]
    },
    {
      label: 'Club News',
      links: [
        { name: 'Weather Info', path: '/weather-info' },
        { name: 'Calendar', path: '/calendar' },
        { name: 'The Woods Event', path: '/woods-event' },
      ]
    },
    {
      label: 'Shop',
      links: [
        { name: 'Pro Shop', path: '/shop' },
        { name: 'Community Closet', path: '/community-closet' },
      ]
    }
  ];

  return (
    <header className="bg-[var(--color-primary)] text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Centered vertically, robust font */}
          <Link to="/" className="text-3xl font-black tracking-tighter flex flex-col leading-none">
            <span>WOODS</span>
            <span className="text-[var(--color-accent)] text-lg tracking-widest">TENNIS</span>
          </Link>

          {/* Desktop Navigation - Centered relative to available space */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <Link to="/" className="px-3 py-6 text-sm font-bold tracking-widest uppercase hover:text-green-200 transition-colors">HOME</Link>
            {navItems.map((item) => (
              <NavItem key={item.label} label={item.label} links={item.links} />
            ))}
            <Link to="/contact" className="px-3 py-6 text-sm font-bold tracking-widest uppercase hover:text-green-200 transition-colors">CONTACT</Link>
          </nav>

          {/* CTA Button - "JOIN" style */}
          <div className="hidden lg:block">
            <Link to="/join-our-team" className="bg-white text-[var(--color-primary)] px-6 py-3 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition shadow-md border-2 border-transparent hover:border-white">
              JOIN OUR TEAM
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <nav className="lg:hidden pb-6 bg-[var(--color-primary)] absolute top-24 left-0 w-full shadow-xl border-t border-green-700 overflow-y-auto max-h-[80vh]">
            <Link to="/" className="block px-6 py-4 border-b border-green-700 font-bold uppercase tracking-widest">Home</Link>
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-green-700">
                <div className="px-6 py-4 font-bold uppercase tracking-widest text-green-200">{item.label}</div>
                {item.links?.map(link => (
                  <Link key={link.path} to={link.path} className="block px-10 py-3 text-sm hover:bg-green-700 text-white transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
            <Link to="/contact" className="block px-6 py-4 border-b border-green-700 font-bold uppercase tracking-widest">Contact</Link>
            <div className="p-6">
              <Link to="/join-our-team" className="block text-center bg-white text-[var(--color-primary)] px-6 py-3 rounded-sm font-bold text-sm tracking-widest uppercase">
                JOIN OUR TEAM
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
