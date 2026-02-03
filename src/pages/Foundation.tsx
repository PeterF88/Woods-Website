import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Foundation.css';

const Foundation = () => {
    const revealRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        revealRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el: HTMLElement | null) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <main className="foundation-page">
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560012057-4372e14c5085?w=1920&h=800&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Woods Tennis Education Foundation</h1>
                    <p className="hero-subtitle">Transforming Lives Through Tennis</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section" ref={addToRefs}>
                <div className="container">
                    <div className="foundation-mission reveal" ref={addToRefs}>
                        <h2>Our Mission</h2>
                        <p className="mission-text">
                            The Woods Tennis Education Foundation is dedicated to removing barriers and making tennis
                            accessible to everyone in our community. Through scholarships, equipment donations, and
                            inclusive programming, we ensure that financial circumstances never prevent someone from
                            experiencing the lifelong benefits of tennis.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="section section-gray" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2>Our Programs</h2>
                        <p className="section-subtitle">Making tennis accessible to all</p>
                    </div>

                    <div className="programs-grid reveal" ref={addToRefs}>
                        <div className="program-card">
                            <div className="program-icon">🏆</div>
                            <h3>Scholarships</h3>
                            <p>
                                Each year over 30 adults and juniors receive scholarship assistance to learn this
                                lifetime sport. We believe financial circumstances should never be a barrier to
                                playing tennis.
                            </p>
                            <Link to="/pricing#scholarships" className="btn btn-secondary">
                                Learn More
                            </Link>
                        </div>

                        <div className="program-card">
                            <div className="program-icon">🎾</div>
                            <h3>Free Racquets</h3>
                            <p>
                                Since 2009, over 4,500 tennis racquets have been provided free of charge to players
                                in need. Every player deserves the right equipment to learn and grow in the sport.
                            </p>
                        </div>

                        <div className="program-card">
                            <div className="program-icon">🤝</div>
                            <h3>Adaptive Play</h3>
                            <p>
                                Our adaptive and wheelchair tennis programs ensure that players of all abilities can
                                experience the joy of tennis. We provide specialized equipment and trained instructors.
                            </p>
                            <a
                                href="https://www.woodstenniscenter.com/adaptiveandwheelchair"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                Learn More
                            </a>
                        </div>

                        <div className="program-card">
                            <div className="program-icon">🌍</div>
                            <h3>Outreach / NJTL</h3>
                            <p>
                                Over 2,000 youth and adults participate in community outreach programming across the city.
                                We bring tennis to neighborhoods, schools, and community centers that traditionally lack access.
                            </p>
                            <a
                                href="https://www.woodstenniscenter.com/outreach"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Woods Event */}
            <section className="section" ref={addToRefs}>
                <div className="container">
                    <div className="event-section reveal" ref={addToRefs}>
                        <h2>The Woods Event</h2>
                        <p>
                            Our annual fundraising event brings together the tennis community to support our mission.
                            Join us for an evening of celebration, fellowship, and giving back.
                        </p>
                        <a
                            href="https://www.woodstenniscenter.com/thewoodsevent"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg"
                        >
                            Learn About The Woods Event
                        </a>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="section section-dark" ref={addToRefs}>
                <div className="container">
                    <div className="impact-grid reveal" ref={addToRefs}>
                        <div className="impact-stat">
                            <span className="number">30+</span>
                            <span className="label">Scholarships Awarded Annually</span>
                        </div>
                        <div className="impact-stat">
                            <span className="number">4,500+</span>
                            <span className="label">Free Racquets Since 2009</span>
                        </div>
                        <div className="impact-stat">
                            <span className="number">2,000+</span>
                            <span className="label">In Outreach Programming</span>
                        </div>
                        <div className="impact-stat">
                            <span className="number">Since 2008</span>
                            <span className="label">Serving Lincoln Community</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donate CTA */}
            <section className="section donate-section" ref={addToRefs}>
                <div className="container">
                    <div className="donate-content reveal" ref={addToRefs}>
                        <h2>Make an Impact</h2>
                        <p>
                            Your contribution helps us continue our mission of taking the game to the community.
                            Every donation supports scholarships, free equipment, and programming that changes lives.
                        </p>
                        <div className="donate-buttons">
                            <a
                                href="https://www.woodstenniscenter.com/foundation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                Donate Now
                            </a>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Foundation;
