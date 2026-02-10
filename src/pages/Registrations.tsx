import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Registrations.css';

const Registrations = () => {
    const [activeSection, setActiveSection] = useState('group-classes');
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const sections = [
        { id: 'group-classes', label: 'Group Classes' },
        { id: 'junior-club', label: 'Junior Club Championships' },
        { id: 'house-tournament', label: 'House Tournament' },
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
        <main className="registrations-page">
            {/* Hero Section */}
            <section className="hero hero-small">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=600&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1>Registrations</h1>
                    <p>Sign up for classes, tournaments, and community programs</p>
                </div>
            </section>

            {/* Sticky Navigation */}
            <nav className="registrations-nav">
                <div className="registrations-nav-container">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(section.id)}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Group Classes Section */}
            <section
                id="group-classes"
                className="registration-section"
                ref={(el) => { sectionRefs.current['group-classes'] = el; }}
            >
                <div className="container">
                    <h2>Group Classes</h2>
                    <p className="section-intro">
                        Our group classes are designed for players of all ages and skill levels. From Little Aces
                        to Tournament training, we have a program for everyone.
                    </p>

                    <div className="registration-cards">
                        <div className="registration-card">
                            <h3>Little Aces (Ages 4-6)</h3>
                            <p>Introduction to tennis using foam balls and smaller racquets in a fun, engaging environment.</p>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Register Now
                            </a>
                        </div>

                        <div className="registration-card">
                            <h3>Red Ball (Ages 5-8)</h3>
                            <p>Develop fundamental skills on a 36' court with low-compression red balls.</p>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Register Now
                            </a>
                        </div>

                        <div className="registration-card">
                            <h3>Orange Ball (Ages 7-10)</h3>
                            <p>Progress to a 60' court with orange balls, building stroke technique and court awareness.</p>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Register Now
                            </a>
                        </div>

                        <div className="registration-card">
                            <h3>Green Ball (Ages 9-12)</h3>
                            <p>Transition to full court play with low-compression green balls, refining all strokes.</p>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Register Now
                            </a>
                        </div>

                        <div className="registration-card">
                            <h3>Yellow Ball</h3>
                            <p>Full court training with regulation yellow balls for intermediate to advanced players.</p>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Register Now
                            </a>
                        </div>

                        <div className="registration-card">
                            <h3>Tournament Training</h3>
                            <p>Intensive training for competitive players preparing for USTA tournaments.</p>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>

                    <div className="section-footer">
                        <Link to="/classes" className="btn btn-secondary">
                            View All Class Descriptions
                        </Link>
                    </div>
                </div>
            </section>

            {/* Junior Club Championships Section */}
            <section
                id="junior-club"
                className="registration-section alt-bg"
                ref={(el) => { sectionRefs.current['junior-club'] = el; }}
            >
                <div className="container">
                    <h2>Junior Club Championships</h2>
                    <p className="section-intro">
                        Compete against other Woods Tennis juniors in our monthly club championships. Great
                        tournament experience in a supportive environment.
                    </p>

                    <div className="registration-cards">
                        <div className="registration-card featured">
                            <div className="card-badge">Monthly Event</div>
                            <h3>Junior Singles Championship</h3>
                            <p>Age-appropriate divisions from 10U through 18U. Singles format with consolation draws.</p>
                            <ul className="event-details">
                                <li><strong>When:</strong> First Saturday of each month</li>
                                <li><strong>Format:</strong> Single elimination with consolation</li>
                                <li><strong>Divisions:</strong> 10U, 12U, 14U, 16U, 18U</li>
                            </ul>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Register Now
                            </a>
                        </div>

                        <div className="registration-card featured">
                            <div className="card-badge">Quarterly Event</div>
                            <h3>Junior Doubles Championship</h3>
                            <p>Partner up for our quarterly doubles championships. Team up with a friend or get paired.</p>
                            <ul className="event-details">
                                <li><strong>When:</strong> March, June, September, December</li>
                                <li><strong>Format:</strong> Round robin with playoffs</li>
                                <li><strong>Divisions:</strong> 12U, 14U, 18U</li>
                            </ul>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* House Tournament Section */}
            <section
                id="house-tournament"
                className="registration-section"
                ref={(el) => { sectionRefs.current['house-tournament'] = el; }}
            >
                <div className="container">
                    <h2>House Tournament</h2>
                    <p className="section-intro">
                        Our seasonal house tournaments are open to all members. Experience match play in a
                        fun, competitive atmosphere.
                    </p>

                    <div className="registration-cards">
                        <div className="registration-card featured">
                            <div className="card-badge">Adult Event</div>
                            <h3>Adult House Tournament</h3>
                            <p>Open to all adult members. NTRP ratings used for seeding and divisions.</p>
                            <ul className="event-details">
                                <li><strong>When:</strong> Spring & Fall seasons</li>
                                <li><strong>Format:</strong> Double elimination</li>
                                <li><strong>Levels:</strong> 2.5-3.0, 3.5, 4.0+</li>
                            </ul>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Register Now
                            </a>
                        </div>

                        <div className="registration-card featured">
                            <div className="card-badge">Family Event</div>
                            <h3>Family Doubles Tournament</h3>
                            <p>Team up with a family member for this special event. Parent-child or sibling teams welcome.</p>
                            <ul className="event-details">
                                <li><strong>When:</strong> Annual - July</li>
                                <li><strong>Format:</strong> Round robin</li>
                                <li><strong>Open to:</strong> All ages and skill levels</li>
                            </ul>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Satellite Site Community Section */}
            <section
                id="satellite-site"
                className="registration-section alt-bg"
                ref={(el) => { sectionRefs.current['satellite-site'] = el; }}
            >
                <div className="container">
                    <h2>Satellite Site Community</h2>
                    <p className="section-intro">
                        Tennis programming in your neighborhood! Our satellite sites bring tennis instruction
                        to community centers, schools, and parks throughout Lincoln.
                    </p>

                    <div className="registration-cards">
                        <div className="registration-card">
                            <h3>Community Center Programs</h3>
                            <p>Free or low-cost tennis programming at partner community centers.</p>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View Locations
                            </a>
                        </div>

                        <div className="registration-card">
                            <h3>School Programs</h3>
                            <p>After-school tennis at partner elementary and middle schools.</p>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View Schools
                            </a>
                        </div>

                        <div className="registration-card">
                            <h3>Park Programs</h3>
                            <p>Summer tennis clinics at parks throughout the city.</p>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                View Parks
                            </a>
                        </div>
                    </div>

                    <div className="section-footer">
                        <Link to="/outreach" className="btn btn-secondary">
                            Learn More About Outreach
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
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

export default Registrations;
