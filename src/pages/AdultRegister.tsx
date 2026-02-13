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

    const scrollToSection = (id: string) => {
        const element = sectionRefs.current[id];
        if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

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

        // Handle initial hash scrolling
        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');
            setTimeout(() => scrollToSection(id), 100);
        }

        return () => observer.disconnect();
    }, []);



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
            <div
                id="cardio"
                ref={(el) => { sectionRefs.current['cardio'] = el; }}
            >
                {/* Title Section */}
                <section className="cardio-title-section">
                    <h1 className="cardio-title">Cardio Tennis</h1>
                </section>

                {/* Info Section - Gray Background */}
                <section className="cardio-info-section">
                    <div className="cardio-info-content">
                        <p className="cardio-description">
                            A great way to get in shape, stay fit, challenge yourself, and hit plenty of balls.
                        </p>
                        <p className="cardio-description">
                            There must be a minimum of 4 players signed up to run class.
                        </p>

                        <div className="cardio-pricing">
                            <p>$13/60-min class</p>
                            <p>$19/90-min class</p>
                            <p className="cardio-or"><em>or</em></p>
                            <p>$65/6 classes with a Cardio 6-Pack</p>
                        </div>
                    </div>
                </section>

                {/* Schedule Section - Yellow Background */}
                <section className="cardio-schedule-section">
                    <h2 className="cardio-schedule-title">Schedule</h2>
                    <div className="cardio-schedule-content">
                        <p className="cardio-session-title">
                            <strong>Winter Session 3: January 5-February 22</strong>
                        </p>
                        <p>Mondays, 6-7 pm (outside only, so weather-permitting)</p>
                        <p>Wednesdays, 6-7 pm</p>
                        <p>Fridays 5:30-6:30 pm</p>
                        <p>Saturdays noon-1 pm</p>

                        <p className="cardio-notice">NO CARDIO FEB 14</p>
                        <p className="cardio-notice">NO CARDIO FEB 23-28</p>

                        <p className="cardio-check-back">
                            Keep checking back in case the schedule changes.
                        </p>
                        <p className="cardio-call-ahead">
                            SPOTS ARE LIMITED! We recommend calling ahead to see if space is available and to sign up:{' '}
                            <a href="tel:4024417095">402-441-7095</a>.
                        </p>
                        <p className="cardio-checkin">
                            When you arrive, stop by the front desk to check in.
                        </p>
                    </div>
                </section>

                {/* Photo Section */}
                <section className="cardio-photo-section">
                    <img
                        src="/cardio-photo.jpg"
                        alt="Cardio Tennis at Woods Tennis Center"
                        className="cardio-photo"
                    />
                </section>
            </div>

            {/* ============================================ */}
            {/* USTA LEAGUES SECTION (Adult Only — Placeholder) */}
            {/* ============================================ */}
            <div
                id="usta-leagues"
                ref={(el) => { sectionRefs.current['usta-leagues'] = el; }}
            >
                {/* Main Content - Black Background */}
                <section className="usta-content-section">
                    <div className="usta-content">
                        {/* USTA Logo */}
                        <div className="usta-logo-container">
                            <img
                                src="/usta-logo.jpg"
                                alt="USTA Logo"
                                className="usta-logo"
                            />
                        </div>

                        {/* Captain Information */}
                        <h1 className="usta-heading">USTA Captain Information</h1>
                        <p className="usta-text">
                            Click{' '}
                            <a
                                href="https://www.woodstenniscenter.com/_files/ugd/e379dc_13fca101cf6f4a8da55f1ddb4754e122.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="usta-link"
                            >
                                here
                            </a>{' '}
                            to see information about checking in for USTA.
                        </p>

                        <p className="usta-text">
                            Captains, click the button to submit your rosters
                        </p>

                        {/* USTA ROSTERS Button with Arrow */}
                        <div className="usta-button-row">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdwQ_NinAJqsyj0EKUdOm26zuiECwsK8BmKORMiGv4pd1wbiQ/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="usta-rosters-button"
                            >
                                USTA ROSTERS
                            </a>
                            {/* Arrow SVG */}
                            <svg
                                className="usta-arrow"
                                viewBox="0 0 200 200"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M165.062 45.385L99.817 3.633a7.847 7.847 0 00-8.154 0 7.456 7.456 0 00-3.91 6.541v17.072C42.592 31.47 5.217 71.58 5.217 119.906c0 41.273 27.63 76.146 65.546 87.3a7.853 7.853 0 009.908-4.842 7.423 7.423 0 00-4.933-9.723c-30.68-9.019-51.86-37.218-51.86-72.735 0-37.953 29.308-69.227 67.875-72.473v16.293a7.456 7.456 0 003.91 6.541 7.844 7.844 0 008.154 0l65.245-41.752a7.35 7.35 0 000-12.715v.385z" />
                            </svg>
                        </div>

                        {/* Yellow Dots Divider */}
                        <div className="usta-dots-divider">
                            {Array.from({ length: 25 }).map((_, i) => (
                                <span key={i} className="usta-dot" />
                            ))}
                        </div>

                        {/* Finding a Team */}
                        <h2 className="usta-subheading">Interested in finding a team?</h2>
                        <p className="usta-text">
                            Please email Lincoln League Coordinator Tammy Tegler at
                        </p>
                        <p className="usta-text">
                            <a
                                href="mailto:teglerustanebraska@gmail.com"
                                className="usta-email-link"
                            >
                                teglerustanebraska@gmail.com
                            </a>.
                        </p>
                    </div>
                </section>
            </div>

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
