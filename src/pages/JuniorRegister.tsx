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
