import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForClasses.css';

const RegisterForClasses = () => {
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
                    <h1>Register for Classes</h1>
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

            {/* ============================================ */}
            {/* GROUP CLASSES SECTION */}
            {/* ============================================ */}
            <section
                id="group-classes"
                className="register-section"
                ref={(el) => { sectionRefs.current['group-classes'] = el; }}
            >
                <div className="container">
                    <h2>Group Class Registrations</h2>

                    {/* Weather Info */}
                    <div className="weather-info-box">
                        <h3>Weather Updates</h3>
                        <p>
                            Go to our <a href="https://www.facebook.com/woodstenniscenter" target="_blank" rel="noopener noreferrer">Facebook Page</a> (no need to have a Facebook account!) — If there's no weather announcement, everything is on as scheduled! We will always post something there if we're canceling classes and remember, we don't necessarily make the same announcements as the public schools. Keep an eye out there for updated information.
                        </p>
                    </div>

                    {/* Session Cards */}
                    <div className="session-cards">
                        {/* Current Session */}
                        <div className="session-card">
                            <span className="card-label">Current Session</span>
                            <h3>Winter Session 3</h3>
                            <p className="session-dates">Jan 5 – Feb 21</p>
                            <p className="session-note">
                                No Classes: *Feb 14-15<br />
                                *Adult classes on Feb 16 will be held Feb 23 instead
                            </p>
                            <a
                                href="https://www.woodstenniscenter.com/_files/ugd/e379dc_9417241f4aa74b5f92dc2cbd5e76f8ad.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="brochure-link"
                            >
                                📄 Winter Session 3 2026 Brochure
                            </a>

                            <h4 className="timeline-heading">Timeline:</h4>
                            <ul className="timeline">
                                <li>
                                    <strong>Dec 15:</strong>
                                    Same-Schedule Registration opens for those in Fall Session 2. Watch for an email that will be sent around 8 am (if you don't see the email in your Inbox, check to see if it went into Spam).
                                </li>
                                <li>
                                    <strong>Dec 22:</strong>
                                    Pre-Registration opens for those in Fall Session 2. You'll use the same link that was in the Dec 15 email.
                                </li>
                                <li>
                                    <strong>Dec 29:</strong>
                                    Registration opens to the public at 8 am. Click the link below.
                                </li>
                                <li>
                                    <strong>Jan 5:</strong>
                                    Start of Session 3 and Late pricing begins.
                                </li>
                            </ul>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScU114RMISrlshTfhL3exT2YXHm3ALVZTSvpEGXw85qVOrUkg/viewform?usp=header"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="register-btn full-width"
                            >
                                Click here to register
                            </a>
                        </div>

                        {/* Next Session */}
                        <div className="session-card">
                            <span className="card-label">Next Session</span>
                            <h3>Winter Session 4</h3>
                            <p className="session-dates">March 2 – April 11</p>

                            <h4 className="timeline-heading">Timeline:</h4>
                            <ul className="timeline">
                                <li>
                                    <strong>Feb 9:</strong>
                                    Same-Schedule Registration opens for those in Winter Session 3. Watch for an email that will be sent around 8 am (if you don't see the email in your Inbox, check to see if it went into Spam).
                                </li>
                                <li>
                                    <strong>Feb 16:</strong>
                                    Pre-Registration opens for those in Winter Session 3. You'll use the same link that was in the Same-Schedule email.
                                </li>
                                <li>
                                    <strong>Feb 23:</strong>
                                    Registration opens to the public at 8 am. Click the link below.
                                </li>
                                <li>
                                    <strong>Mar 2:</strong>
                                    Start of Session 4 and Late pricing begins.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Summer 2026 */}
                    <div className="session-card session-card-standalone">
                        <span className="card-label">Coming Soon</span>
                        <h3>Summer 2026</h3>
                        <p className="session-dates">
                            Session 1: June 1 – July 2<br />
                            Session 2: July 6 – August 7
                        </p>
                        <h4 className="timeline-heading">Timeline:</h4>
                        <ul className="timeline">
                            <li>
                                <strong>Around April 20:</strong>
                                Brochure will post here with schedule and pricing
                            </li>
                            <li>
                                <strong>April 27:</strong>
                                Early Registration will begin. Click the link that will appear below.
                            </li>
                        </ul>
                    </div>

                    {/* Junior Tennis Info Link */}
                    <div className="info-link-row">
                        <span>Want more details on our Junior Tennis program?</span>
                        <Link to="/junior-classes">Go to Junior Class Descriptions →</Link>
                    </div>

                    {/* New to Woods */}
                    <div className="new-player-box">
                        <h3>New to Woods Tennis Center?</h3>
                        <p className="new-player-subtitle">Here's the class to sign up for:</p>
                        <ul className="ages-list">
                            <li>Ages 4-6 → Little Aces</li>
                            <li>Ages 7-10 → Red</li>
                            <li>Ages 11-12 → Intro Orange</li>
                            <li>Age 13-18 → Teen Green</li>
                            <li>Age 18+ → Adult Classes</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* INDOOR CLUB CHAMPIONSHIPS SECTION */}
            {/* ============================================ */}
            <section
                id="indoor-club-champs"
                className="register-section alt-bg"
                ref={(el) => { sectionRefs.current['indoor-club-champs'] = el; }}
            >
                <div className="container">
                    <h2>Indoor Club Championships</h2>
                    <p className="section-intro">
                        Must have been in group classes, lessons, or leagues within the past year
                    </p>

                    <div className="tournament-cards">
                        {/* Juniors */}
                        <div className="tournament-card">
                            <h3>Juniors</h3>
                            <p className="tournament-subtitle">(HS and below)</p>
                            <p className="tournament-date">Feb 23–28</p>
                            <a
                                href="https://www.woodstenniscenter.com/_files/ugd/e379dc_6c7e5ef6ab9140cdaf769ce315329fcb.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pdf-link"
                            >
                                📄 View Details (PDF)
                            </a>
                            <br />
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSe8ETXPGK5VkGKVmCJFkjVnaZQbH-Ys_C0LHar71G7B9kPIpQ/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="register-btn full-width"
                            >
                                Click here to register
                            </a>
                        </div>

                        {/* Adult Doubles */}
                        <div className="tournament-card">
                            <h3>Adult Doubles</h3>
                            <p className="tournament-subtitle">(must be out of HS)</p>
                            <p className="tournament-date">March 1</p>
                            <a
                                href="https://www.woodstenniscenter.com/_files/ugd/e379dc_6c7e5ef6ab9140cdaf769ce315329fcb.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pdf-link"
                            >
                                📄 View Details (PDF)
                            </a>
                            <br />
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfdDUqyJodHtgPMYIktgluTY3Fllyr8P9bVOhIwrh-TVzMD3A/viewform?usp=sharing&ouid=101422289595401124986"
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

            {/* ============================================ */}
            {/* IN-HOUSE TOURNAMENTS SECTION */}
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
            {/* SATELLITE SITE COMMUNITY SECTION */}
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

export default RegisterForClasses;
