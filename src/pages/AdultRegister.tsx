import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SharedGroupClasses from '../components/SharedGroupClasses';
import SharedClubChampionships from '../components/SharedClubChampionships';
import './RegisterForClasses.css';

const AdultRegister = () => {
    const [activeSection, setActiveSection] = useState('group-classes');
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const sections = [
        { id: 'group-classes', label: 'Group Classes' },
        { id: 'indoor-club-champs', label: 'Indoor Club Championships' },
        { id: 'cardio', label: 'Cardio' },
        { id: 'usta-leagues', label: 'USTA Leagues' },
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
                    <h1>Adult — Register for Classes</h1>
                    <p>Sign up for group classes, leagues, and competitive programs</p>
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
            {/* CARDIO SECTION (Adult Only — Placeholder) */}
            {/* ============================================ */}
            <section
                id="cardio"
                className="register-section"
                ref={(el) => { sectionRefs.current['cardio'] = el; }}
            >
                <div className="container">
                    <h2>Cardio</h2>
                    <div className="placeholder-box">
                        <p className="placeholder-text">More information coming soon.</p>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* USTA LEAGUES SECTION (Adult Only — Placeholder) */}
            {/* ============================================ */}
            <section
                id="usta-leagues"
                className="register-section alt-bg"
                ref={(el) => { sectionRefs.current['usta-leagues'] = el; }}
            >
                <div className="container">
                    <h2>USTA Leagues</h2>
                    <div className="placeholder-box">
                        <p className="placeholder-text">More information coming soon.</p>
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

export default AdultRegister;
