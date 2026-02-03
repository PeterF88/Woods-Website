import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Programs.css';

const Programs = () => {
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
        <main className="programs-page">
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1920&h=800&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Our Programs</h1>
                    <p className="hero-subtitle">World-Class Training for All Ages</p>
                </div>
            </section>

            {/* Junior Tennis Section */}
            <section id="junior" className="section" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2>Junior Tennis</h2>
                        <p className="section-subtitle">
                            Welcome to your one-stop destination for all things junior tennis at Woods and across Nebraska.
                        </p>
                    </div>

                    <div className="programs-grid reveal" ref={addToRefs}>
                        <div className="program-card">
                            <h3>Group Class Descriptions</h3>
                            <p>Comprehensive group instruction for all skill levels and ages.</p>
                            <a
                                href="https://www.woodstenniscenter.com/group-class-descriptions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                View Classes
                            </a>
                        </div>

                        <div className="program-card">
                            <h3>Private Lessons</h3>
                            <p>One-on-one instruction tailored to your player's specific needs and goals.</p>
                            <a
                                href="https://www.woodstenniscenter.com/private-lessons"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Junior Events */}
                    <div className="events-section reveal" ref={addToRefs}>
                        <h3>Upcoming Junior Events</h3>
                        <div className="event-card">
                            <div className="event-info">
                                <h4>Junior Indoor Club Championships</h4>
                                <p>Feb 23-28</p>
                            </div>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSe8ETXPGK5VkGKVmCJFkjVnaZQbH-Ys_C0LHar71G7B9kPIpQ/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Register Now
                            </a>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="resources-section reveal" ref={addToRefs}>
                        <h3>Resources</h3>
                        <p>Navigating junior tennis can be hard. These resources will help parents and players.</p>
                        <ul className="resources-list">
                            <li>
                                <a href="https://www.woodstennis.com/about-7" target="_blank" rel="noopener noreferrer">
                                    Navigating the USTA
                                </a>
                            </li>
                            <li>
                                <a href="https://playtennis.usta.com/tournaments?level-category=junior" target="_blank" rel="noopener noreferrer">
                                    USTA Calendar for Nebraska Tournaments
                                </a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/1nFDusaoz-q7LWXOxSP2neWoOnRYfdkVyDQeX2WpPhc4/edit" target="_blank" rel="noopener noreferrer">
                                    Parent Resources
                                </a>
                            </li>
                            <li>
                                <a href="https://docs.google.com/document/d/1onTfrVLupaK0Ym9hbvGWQm8r9OWple9qy8PgBX5KK1c/edit" target="_blank" rel="noopener noreferrer">
                                    Player Resources
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Free Court Opportunities */}
                    <div className="info-box reveal" ref={addToRefs}>
                        <h4>Free & Reduced-Price Court Opportunities</h4>
                        <p>We want players practicing outside of regular practice times. Here are some options:</p>
                        <ul>
                            <li><strong>Junior Groups:</strong> Free Day-Of: Call or check the day you want to play and you can play outdoors for free as long as there is court availability.*</li>
                            <li><strong>Private Lessons:</strong> $5 Day-Of: Call the day you want to play and you can play indoors or outdoors for $5 as long as there is court availability, limit one hour per lesson taken, and must be used within a week of the lesson.*</li>
                        </ul>
                        <p className="fine-print">*If you're playing with someone not eligible for Free or $5 Day-Of, they'll pay their half of the court at regular price.</p>
                    </div>
                </div>
            </section>

            {/* Adult Tennis Section */}
            <section id="adult" className="section section-gray" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2>Adult Tennis</h2>
                        <p className="section-subtitle">
                            We offer group lessons, private lessons, league opportunities, and cardio tennis for adult players.
                        </p>
                    </div>

                    {/* Adult Classes */}
                    <div className="classes-grid reveal" ref={addToRefs}>
                        <div className="class-card">
                            <h3>Beginner</h3>
                            <p>A class for those brand new to tennis. Learn the basic strokes, skills and scoring, as well as an introduction to rallying. The aim is to have players feel comfortable in the basic skills needed to have a casual hit with friends or family. Modified balls may be used to help speed the process up a little.</p>
                        </div>

                        <div className="class-card">
                            <h3>Adult Ready to Rally</h3>
                            <p>This class was previously called our Advanced Beginner Class. These players have the skill set to be ready to get involved in rallies and all the fun that comes with them. For those who have come through the Beginner class, or know the basics, but are looking for more supervised instruction on how to make rallying work.</p>
                        </div>

                        <div className="class-card">
                            <h3>Adult Drill Level 1 (3.0 NTRP)</h3>
                            <p>A drill based class for adult league players and those that are a 3.0 USTA player, or equivalent level. This class will help fine-tune specific strokes, develop better shot selection, and learn effective match strategy.</p>
                        </div>

                        <div className="class-card">
                            <h3>Adult Drill Level 2 (3.5+ NTRP)</h3>
                            <p>Our most advanced drill group for players who have several years of experience in competitive club or USTA leagues. Players are USTA rated 3.5 or higher. Learn to produce better spin on groundstrokes and serves, find and exploit weaknesses in opponents.</p>
                        </div>
                    </div>

                    <div className="info-box reveal" ref={addToRefs}>
                        <p>Players in Adult Group Classes can get <a href="https://www.woodstenniscenter.com/_files/ugd/e379dc_c2bd5cf1285c48bba88579911f6f1eb0.pdf" target="_blank" rel="noopener noreferrer"><strong>$5 Day-Of</strong></a> court time and ball machine use.</p>
                    </div>
                </div>
            </section>

            {/* Leagues Section */}
            <section id="leagues" className="section" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2>Adult Leagues</h2>
                        <p className="section-subtitle">Competitive and recreational league play for all levels</p>
                    </div>

                    <div className="leagues-grid reveal" ref={addToRefs}>
                        <div className="league-card">
                            <h3>Men's Doubles Leagues</h3>
                            <div className="league-info">
                                <div className="league-level">
                                    <h4>3.5 Level</h4>
                                    <ul>
                                        <li><strong>Sr Men:</strong> Mo, We, Fr 8am; Sa 7:30am</li>
                                        <li>Contact: <a href="mailto:jfk120@mac.com">jfk120@mac.com</a></li>
                                        <li><strong>Woods:</strong> Tu 8:30pm</li>
                                        <li>Contact: <a href="mailto:woodsleagues@gmail.com">woodsleagues@gmail.com</a></li>
                                    </ul>
                                </div>
                                <div className="league-level">
                                    <h4>4.0 Level</h4>
                                    <ul>
                                        <li><strong>Woods:</strong> Mo 8:30pm*</li>
                                        <li>Contact: <a href="mailto:woodsleagues@gmail.com">woodsleagues@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="league-card">
                            <h3>Women's Doubles Leagues</h3>
                            <div className="league-info">
                                <div className="league-level">
                                    <h4>3.0-3.5 Level</h4>
                                    <ul>
                                        <li><strong>Williams:</strong> Th 7pm* - <a href="mailto:dtwilliams11@gmail.com">dtwilliams11@gmail.com</a></li>
                                        <li><strong>Woods:</strong> Mo 7pm*, We 9:30am**, Th 7pm*</li>
                                        <li>Contact: <a href="mailto:woodsleagues@gmail.com">woodsleagues@gmail.com</a></li>
                                    </ul>
                                </div>
                                <div className="league-level">
                                    <h4>4.0-4.5 Level</h4>
                                    <ul>
                                        <li><strong>Woods:</strong> Mo, Tu 9:30am**; We 7pm*</li>
                                        <li>Contact: <a href="mailto:woodsleagues@gmail.com">woodsleagues@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="league-card">
                            <h3>Beginner Doubles League</h3>
                            <div className="league-info">
                                <p>For men and women new to league play</p>
                                <ul>
                                    <li><strong>Woods:</strong> Th 8:30pm*</li>
                                    <li>Contact: <a href="mailto:woodsleagues@gmail.com">woodsleagues@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p className="fine-print reveal" ref={addToRefs}>
                        *Only Sep through April, no league in the summer<br />
                        **8am in the summer
                    </p>

                    <div className="league-cta reveal" ref={addToRefs}>
                        <a
                            href="https://forms.gle/g9nNTwwAZr9Ks7V2A"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Request League Information
                        </a>
                    </div>

                    {/* Self-Organized Tennis */}
                    <div className="info-box reveal" ref={addToRefs}>
                        <h4>Self-Organized Tennis</h4>
                        <p>Want to meet new players? Are you ready to set up some matches on your own?</p>
                        <p>
                            <a href="https://forms.gle/UFiuLY1awox5ZXGs6" target="_blank" rel="noopener noreferrer">
                                Click here to add your name to our list
                            </a> and find new players to set up matches with.
                        </p>
                        <p className="fine-print">
                            Looking for more options? Visit <a href="http://www.abtlleague.com" target="_blank" rel="noopener noreferrer">www.abtlleague.com</a> to learn about their flex league play.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-dark" ref={addToRefs}>
                <div className="container">
                    <div className="cta-content reveal" ref={addToRefs}>
                        <h2>Ready to Get Started?</h2>
                        <p>View our pricing or book a court to begin your tennis journey.</p>
                        <div className="cta-buttons">
                            <Link to="/pricing" className="btn btn-light btn-lg">View Pricing</Link>
                            <a
                                href="https://courtreserve.com/Online/Reservations/Index/4714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-light btn-lg"
                            >
                                Book a Court
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Programs;
