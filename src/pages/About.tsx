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
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560012057-4372e14c5085?w=1920&h=800&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Our Story</h1>
                    <p className="hero-subtitle">Taking the Game to the Community Since 2008</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section" ref={addToRefs}>
                <div className="container">
                    <div className="mission-content reveal" ref={addToRefs}>
                        <h2>Our Mission</h2>
                        <p className="mission-statement">
                            The mission at Woods Tennis Center is to develop players and provide play opportunities
                            for individuals of all ages, backgrounds, and abilities in an inclusive environment
                            promoting health and wellness in Lincoln and surrounding communities. We seek to make
                            tennis a public sport, working intentionally to change perceptions that surround the game.
                        </p>
                    </div>
                </div>
            </section>

            {/* Growth Story */}
            <section className="section section-gray" ref={addToRefs}>
                <div className="container">
                    <div className="story-content reveal" ref={addToRefs}>
                        <div className="story-stats">
                            <div className="stat-big">
                                <span className="number">26</span>
                                <span className="label">Junior Players in 2008</span>
                            </div>
                            <div className="stat-arrow">→</div>
                            <div className="stat-big">
                                <span className="number">12,000+</span>
                                <span className="label">Players Annually Today</span>
                            </div>
                        </div>
                        <p className="story-text">
                            The reach of our mission continues to grow every year. These individuals seek tennis
                            for the mental and physical health benefits as well as for the desire to improve their game,
                            range in age from 3 to 93 and skill from beginner to national champion.
                        </p>
                        <p className="story-text">
                            Deliberate work is done to provide a comprehensive pathway for all players, centered around
                            supportive relationships, holistic player development, and fostering strong community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Four Pillars */}
            <section className="section" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2>Our Core Values</h2>
                    </div>

                    <div className="pillars-grid reveal" ref={addToRefs}>
                        <div className="pillar-card">
                            <div className="pillar-icon">🎾</div>
                            <h3>Programming for All</h3>
                            <p>
                                Comprehensive programming and a culture of inclusivity are core at Woods Tennis Center.
                                Our highly experienced team works intentionally to provide positive experiences at all
                                levels of play from neighborhood players to juniors, high school teams, adults, social
                                and USTA players, seniors, local/state/regional/national tournament competitions,
                                Special Olympians, youth and adults in wheelchair and adaptive tennis, and youth enrolled
                                in other community educational programming.
                            </p>
                            <p className="pillar-tagline">All are welcome here.</p>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-icon">🌟</div>
                            <h3>Holistic Player Development</h3>
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

                        <div className="pillar-card">
                            <div className="pillar-icon">🤝</div>
                            <h3>Building Community</h3>
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

                        <div className="pillar-card">
                            <div className="pillar-icon">🚀</div>
                            <h3>Breaking Down Barriers</h3>
                            <p>
                                Intentional, research-based programming on and offsite at Woods Tennis Center emphasizes
                                inclusiveness by addressing disparities magnified by health, income, opportunity, and
                                educational inequities.
                            </p>
                            <div className="pillar-stats">
                                <div className="stat">
                                    <span className="number">2,000+</span>
                                    <span className="label">Youth & adults in outreach programming</span>
                                </div>
                                <div className="stat">
                                    <span className="number">4,500+</span>
                                    <span className="label">Free racquets provided since 2009</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section section-gray" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2>Our Team</h2>
                        <p className="section-subtitle">Led by experienced professionals dedicated to growing the game</p>
                    </div>

                    <div className="team-links reveal" ref={addToRefs}>
                        <a
                            href="https://www.woodstenniscenter.com/our-team"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-link"
                        >
                            <span className="team-link-title">Meet Our Team</span>
                            <span className="team-link-desc">View our coaching staff and leadership</span>
                        </a>
                        <a
                            href="https://www.woodstenniscenter.com/our-board"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-link"
                        >
                            <span className="team-link-title">Our Board</span>
                            <span className="team-link-desc">Woods Tennis Education Foundation Board</span>
                        </a>
                        <a
                            href="https://www.woodstenniscenter.com/join-our-team"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-link"
                        >
                            <span className="team-link-title">Join Our Team</span>
                            <span className="team-link-desc">Career opportunities at Woods</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-dark" ref={addToRefs}>
                <div className="container">
                    <div className="cta-content reveal" ref={addToRefs}>
                        <h2>Ready to Join Our Community?</h2>
                        <p>Whether you're picking up a racquet for the first time or looking to compete at the highest level, there's a place for you at Woods.</p>
                        <div className="cta-buttons">
                            <Link to="/programs" className="btn btn-light btn-lg">View Programs</Link>
                            <Link to="/contact" className="btn btn-light btn-lg">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
