import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
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
        <main className="about-page">
            {/* Hero Section - Quote */}
            <section className="about-hero">
                <div className="container">
                    <div className="hero-quote-container">
                        <h1 className="hero-quote">
                            "Start where you are. Use what you have. Do what you can."
                        </h1>
                        <p className="hero-author">- Arthur Ashe</p>
                    </div>
                </div>
            </section>

            {/* Our Story & Mission Section */}
            <section className="section story-mission-section" ref={addToRefs}>
                <div className="container">
                    <div className="split-layout">
                        <div className="split-image reveal" ref={addToRefs}>
                            <img
                                src="https://static.wixstatic.com/media/51e17a_7b4a1a910f3d4aa593eaf89dccc4aba7~mv2.jpg/v1/fill/w_1136,h_1140,al_c,q_85,enc_avif,quality_auto/51e17a_7b4a1a910f3d4aa593eaf89dccc4aba7~mv2.jpg"
                                alt="Woods Tennis Center Team"
                            />
                        </div>
                        <div className="split-content reveal" ref={addToRefs}>
                            <h2 className="section-title">Our Story...</h2>
                            <h3 className="section-subtitle">Taking the Game to the Community Since 2008</h3>

                            <div className="mission-box">
                                <h3>Our Mission</h3>
                                <p>
                                    The mission at Woods Tennis Center is to develop players and provide play opportunities
                                    for individuals of all ages, backgrounds, and abilities in an inclusive environment
                                    promoting health and wellness in Lincoln and surrounding communities.
                                </p>
                            </div>

                            <p className="story-text">
                                We seek to make tennis a public sport, working intentionally to change perceptions that surround the game.
                            </p>

                            <div className="story-stats-grid">
                                <div className="stat-item">
                                    <span className="stat-number">26</span>
                                    <span className="stat-label">Junior Players (2008)</span>
                                </div>
                                <div className="stat-arrow">→</div>
                                <div className="stat-item">
                                    <span className="stat-number">12,000+</span>
                                    <span className="stat-label">Annual Players Today</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Impact Sections */}
            <section className="section pillar-section section-gray" ref={addToRefs}>
                <div className="container">
                    <div className="split-layout reverse-mobile">
                        <div className="split-content reveal" ref={addToRefs}>
                            <h2>Programming for All</h2>
                            <p>
                                Comprehensive programming and a culture of inclusivity are core at Woods Tennis Center.
                                Our highly experienced team works intentionally to provide positive experiences at all
                                levels of play from neighborhood players to juniors, high school teams, adults, social
                                and USTA players, seniors, local/state/regional/national tournament competitions,
                                Special Olympians, youth and adults in wheelchair and adaptive tennis, and youth enrolled
                                in other community educational programming.
                            </p>
                            <p className="emphasis">All are welcome here.</p>
                        </div>
                        <div className="split-image reveal" ref={addToRefs}>
                            {/* Placeholder for "Programming for All" image - using generic tennis image if specific one not found, 
                                but trying to match the description "Community Building Image" found earlier */}
                            <img
                                src="https://static.wixstatic.com/media/51e17a_666cb822860849d2842ac8b101f16a57~mv2.jpg/v1/fill/w_600,h_1340,al_c,q_85,enc_avif,quality_auto/51e17a_666cb822860849d2842ac8b101f16a57~mv2.jpg"
                                alt="Programming for All"
                                style={{ objectPosition: 'top' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pillar-section" ref={addToRefs}>
                <div className="container">
                    <div className="split-layout">
                        <div className="split-image reveal" ref={addToRefs}>
                            <img
                                src="https://images.unsplash.com/photo-1599586120429-4828d5dabb04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Holistic Player Development"
                            />
                        </div>
                        <div className="split-content reveal" ref={addToRefs}>
                            <h2>Holistic Player Development</h2>
                            <p>
                                Our team at Woods Tennis Center prioritizes whole player development. We strive to ensure
                                that our players are developing important life skills that will not only help them reach
                                their on-court goals, but also allow them to succeed off the tennis court.
                            </p>
                            <p>
                                Program curricula centers around tennis skills while emphasizing strong character and
                                leadership development, off-court training, mental wellness, and scholastic achievements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pillar-section section-gray" ref={addToRefs}>
                <div className="container">
                    <div className="split-layout reverse-mobile">
                        <div className="split-content reveal" ref={addToRefs}>
                            <h2>Building Community</h2>
                            <p>
                                Woods Tennis Center takes pride in being a good neighbor and partner, giving to and
                                investing in our community through volunteering and collaborations. We focus on creating
                                a welcoming community hub where everyone is accepted and encouraged to live healthy lives.
                            </p>
                            <p>
                                We seek to purposefully invite and welcome in all members of our community. At Woods
                                Tennis Center, we celebrate diversity and view our unique differences as assets that
                                ultimately make us stronger together.
                            </p>
                        </div>
                        <div className="split-image reveal" ref={addToRefs}>
                            <img
                                src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Building Community"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pillar-section" ref={addToRefs}>
                <div className="container">
                    <div className="split-layout">
                        <div className="split-image reveal" ref={addToRefs}>
                            <img
                                src="https://static.wixstatic.com/media/c55b0d_137baa1afbae4e1a9f1926a63e0b5f46~mv2.jpg/v1/fill/w_634,h_1416,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c55b0d_137baa1afbae4e1a9f1926a63e0b5f46~mv2.jpg"
                                alt="Breaking Down Barriers"
                            />
                        </div>
                        <div className="split-content reveal" ref={addToRefs}>
                            <h2>Breaking Down Barriers</h2>
                            <p>
                                Intentional, research-based programming on and offsite at Woods Tennis Center emphasizes
                                inclusiveness by addressing disparities magnified by health, income, opportunity, and
                                educational inequities.
                            </p>
                            <div className="impact-stats">
                                <div className="impact-stat">
                                    <span className="number">2,000+</span>
                                    <span className="label">Youth & adults in outreach</span>
                                </div>
                                <div className="impact-stat">
                                    <span className="number">4,500+</span>
                                    <span className="label">Free racquets provided</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Links Section */}
            <section className="section section-gray" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2 className="section-title">Our Team</h2>
                        <p className="section-subtitle">Led by experienced professionals dedicated to growing the game</p>
                    </div>
                    <div className="team-links-grid reveal" ref={addToRefs}>
                        <Link to="/team" className="team-link-card">
                            <h3>Meet Our Team</h3>
                            <p>View our coaching staff and leadership</p>
                        </Link>
                        <Link to="/board" className="team-link-card">
                            <h3>Our Board</h3>
                            <p>Woods Tennis Education Foundation Board</p>
                        </Link>
                        <Link to="/join-our-team" className="team-link-card">
                            <h3>Join Our Team</h3>
                            <p>Career opportunities at Woods</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Research Banner */}
            <section className="research-banner">
                <div className="container">
                    <h2>The Research & Our Community Impact</h2>
                </div>
            </section>

        </main>
    );
};

export default About;
