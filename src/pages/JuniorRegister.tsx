import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SharedGroupClasses from '../components/SharedGroupClasses';
import SharedClubChampionships from '../components/SharedClubChampionships';
import './RegisterForClasses.css';

const JuniorRegister = () => {
    const [activeSection, setActiveSection] = useState('group-classes');
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const sections = [
        { id: 'group-classes', label: 'Group Classes' },
        { id: 'indoor-club-champs', label: 'Indoor Club Championships' },
        { id: 'in-house-tournaments', label: 'In-House Tournaments' },
        { id: 'satellite-site', label: 'Satellite Site Community' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
        );

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = sectionRefs.current[id];
        if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <main className="register-page">
            {/* Hero Section */}
            <section className="hero hero-small">
                <div className="hero-background register-hero-bg" />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1>Junior — Register for Classes</h1>
                    <p>Sign up for group classes, tournaments, and community programs</p>
                </div>
            </section>

            {/* Sticky Navigation */}
            <nav className="register-nav">
                <div className="register-nav-container">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={`nav-tab ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(section.id)}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* SHARED: Group Classes */}
            <SharedGroupClasses
                sectionRef={(el) => { sectionRefs.current['group-classes'] = el; }}
            />

            {/* SHARED: Indoor Club Championships */}
            <SharedClubChampionships
                sectionRef={(el) => { sectionRefs.current['indoor-club-champs'] = el; }}
            />

            {/* ============================================ */}
            {/* IN-HOUSE TOURNAMENTS SECTION (Junior Only) */}
            {/* ============================================ */}
            <section
                id="in-house-tournaments"
                className="register-section"
                ref={(el) => { sectionRefs.current['in-house-tournaments'] = el; }}
            >
                <div className="container">
                    <h2>In-House Tournaments</h2>

                    <div className="info-box">
                        <p>
                            We offer one-day in-house singles tournaments for players in our program (Red through Tournament classes). Players must be enrolled in the current session or have been in a session within the last six months.
                        </p>
                        <p>
                            The format of these events will vary depending on the number of players signed up.
                        </p>
                        <p>
                            Please go to our <Link to="/junior-classes" className="inline-link">Junior Class Descriptions</Link> page for more details and to register.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* SATELLITE SITE COMMUNITY SECTION (Junior Only) */}
            {/* ============================================ */}
            <section
                id="satellite-site"
                className="register-section alt-bg"
                ref={(el) => { sectionRefs.current['satellite-site'] = el; }}
            >
                <div className="container">
                    <h2>Satellite Site Community Registrations</h2>

                    <div className="satellite-content">
                        <div className="satellite-session-card">
                            <h3>Summer Session</h3>
                            <div className="session-details">
                                <p><strong>Summer Session I:</strong> June 2 – June 27</p>
                                <p><strong>Summer Session II:</strong> July 7 – August 1</p>
                            </div>
                            <a
                                href="https://www.woodstenniscenter.com/_files/ugd/51e17a_075c70b7491a452bb10194170e4d6705.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="brochure-link"
                            >
                                📄 Summer Brochure — Schedule, Pricing & Class Info
                            </a>

                            {/* Bright Lights */}
                            <div className="bright-lights-box">
                                <h4>★ New this Summer — Bright Lights & Woods Tennis Center</h4>
                                <p>Camps offered with AM or PM options at Lincoln High School and Woods:</p>
                                <p>(1) June 9-13, Art of Tennis, Gr K-2 (Camp #306, #402)</p>
                                <p>(2) June 16-20, STEM & Tennis, Gr 4-6 (Camp #506, #510)</p>
                                <p>(3) June 23-27, Tennis Adventures, Gr 3-5 (Camp #620, #712)</p>
                                <p>(4) July 7-11, Leadership & Tennis, Gr 6-8 (Camp #828, #920)</p>
                                <p>
                                    To Register, visit <a href="https://brightlights.org/camps/camp-list/" target="_blank" rel="noopener noreferrer">brightlights.org</a>
                                </p>
                            </div>

                            <a
                                href="https://forms.gle/fHKASqHZLCxnvPg7A"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="register-btn full-width"
                            >
                                Click here to register
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="register-cta-section">
                <div className="container">
                    <h2>Questions About Registration?</h2>
                    <p>Our team is here to help you find the perfect program.</p>
                    <Link to="/contact" className="btn btn-light btn-lg">
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default JuniorRegister;
