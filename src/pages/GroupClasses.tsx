import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './GroupClasses.css';

const GroupClasses = () => {
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
        <main className="group-classes-page">
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1920&h=800&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Group Class Descriptions</h1>
                    <p className="hero-subtitle">Comprehensive group instruction for all skill levels and ages</p>
                </div>
            </section>

            {/* Navigation */}
            <section className="class-nav" ref={addToRefs}>
                <div className="container">
                    <div className="class-nav-links reveal" ref={addToRefs}>
                        <a href="#little-aces">Little Aces</a>
                        <a href="#red-ball">Red Ball</a>
                        <a href="#orange-ball">Orange Ball</a>
                        <a href="#green-ball">Green Ball</a>
                        <a href="#yellow-ball">Yellow Ball</a>
                        <a href="#tournament">Tournament</a>
                    </div>
                </div>
            </section>

            {/* Little Aces */}
            <section id="little-aces" className="section class-section" ref={addToRefs}>
                <div className="container">
                    <div className="class-header reveal" ref={addToRefs}>
                        <h2>Little Aces</h2>
                        <p className="class-intro">
                            Our Little Aces Class uses foam balls that are larger than a regular tennis ball on a smaller court with no net.
                            The larger and slower balls help to build new skills, and the smaller space encourages rallying with a partner.
                        </p>
                    </div>

                    <div className="skills-grid reveal" ref={addToRefs}>
                        <div className="skills-card">
                            <h3>Physical Skills</h3>
                            <ul>
                                <li>Good balance during movements</li>
                                <li>Ability to change direction</li>
                                <li>Ball tracking skills and ability to react</li>
                                <li>Catching skills over different heights</li>
                                <li>Underarm and overarm throwing skills</li>
                                <li>Understanding and using the ready position</li>
                                <li>Correct grip and hand placement</li>
                                <li>Consistently make contact with balls after one bounce</li>
                            </ul>
                        </div>

                        <div className="skills-card">
                            <h3>Social & Mental Skills</h3>
                            <ul>
                                <li>Fun and enjoyment</li>
                                <li>Polite interaction with teacher</li>
                                <li>Listens to instructions</li>
                                <li>Follows class rules consistently</li>
                                <li>Positive interactions with classmates</li>
                                <li>Working together to develop rally skills</li>
                                <li>Signs of independent learning</li>
                            </ul>
                        </div>

                        <div className="skills-card">
                            <h3>Rally-Based Skills</h3>
                            <ul>
                                <li>Understand areas of the court</li>
                                <li>10 ball rolls along ground with partner</li>
                                <li>10 underarm toss and catch with partner</li>
                                <li>Basic rally understanding</li>
                                <li>Defending an area while rolling ball</li>
                                <li>5 "throw-hit-catch" with partner</li>
                            </ul>
                        </div>
                    </div>

                    <div className="parent-tip reveal" ref={addToRefs}>
                        <h4>How Parents Can Help</h4>
                        <p>
                            Practicing gross motor skills at home or while practicing any other sport can really help.
                            Any skills like throwing, catching or even kicking would be beneficial. Remember that everyone
                            learns and develops at their own speeds.
                        </p>
                    </div>
                </div>
            </section>

            {/* Red Ball */}
            <section id="red-ball" className="section section-gray class-section" ref={addToRefs}>
                <div className="container">
                    <div className="class-header reveal" ref={addToRefs}>
                        <h2>Red Ball</h2>
                        <p className="class-intro">
                            Our Red Ball Class uses balls that are larger and slower than regular tennis balls on a 36-foot court
                            with a lower net. Great for players 8 and under, but also works for beginners up to 11 years old.
                        </p>
                    </div>

                    <div className="skills-grid reveal" ref={addToRefs}>
                        <div className="skills-card">
                            <h3>Rally-Based Skills</h3>
                            <ul>
                                <li>Understand importance of rallying</li>
                                <li>Serve with continental grip</li>
                                <li>Develop ball control (accuracy and depth)</li>
                                <li>Ability to attack and defend space</li>
                                <li>Know how to keep score</li>
                                <li>Proper forehand and backhand grips</li>
                                <li>Volley with continental grip</li>
                                <li>Serve 6 out of 10 from the baseline</li>
                                <li>Rally 10 balls over the net using correct grips</li>
                            </ul>
                        </div>

                        <div className="skills-card">
                            <h3>Physical Skills</h3>
                            <ul>
                                <li>Ability to read and react in all directions</li>
                                <li>Track ball height and work at different heights</li>
                                <li>Agility and ability to change directions</li>
                                <li>Dynamic balance – hitting shots while moving</li>
                            </ul>
                        </div>

                        <div className="skills-card">
                            <h3>Social & Mental Skills</h3>
                            <ul>
                                <li>Cooperative rallying to develop skills</li>
                                <li>Introduction to competitive rallying</li>
                                <li>Winning and losing with respect</li>
                                <li>Problem solving and decision making</li>
                                <li>Working with a partner in doubles</li>
                            </ul>
                        </div>
                    </div>

                    <div className="parent-tip reveal" ref={addToRefs}>
                        <h4>How Parents Can Help</h4>
                        <p>
                            Watch tennis together! Encourage kids to watch older kids and professionals play.
                            Encourage players to solve their own problems and fix their own mistakes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Orange Ball */}
            <section id="orange-ball" className="section class-section" ref={addToRefs}>
                <div className="container">
                    <div className="class-header reveal" ref={addToRefs}>
                        <h2>Orange Ball</h2>
                        <p className="class-intro">
                            Played on 60-foot courts with low compression balls and smaller racquets. Great for players 10 and under,
                            but works for players up to 13 years old. We prefer some playing experience in this class.
                        </p>
                    </div>

                    <div className="skills-grid reveal" ref={addToRefs}>
                        <div className="skills-card">
                            <h3>Rally-Based Skills</h3>
                            <ul>
                                <li>Use of topspin grips on both sides</li>
                                <li>Serve and volley with continental grip</li>
                                <li>Know when to move forward and volley</li>
                                <li>Different strokes for attack and defense</li>
                                <li>Introduction to controlling points</li>
                                <li>Develop full court game</li>
                                <li>Hit topspin from different heights</li>
                                <li>Rally 10 in a row from behind the baseline</li>
                            </ul>
                        </div>

                        <div className="skills-card">
                            <h3>Physical Skills</h3>
                            <ul>
                                <li>Improved lateral movement</li>
                                <li>Better reaction and anticipation</li>
                                <li>Using legs to drive through the ball</li>
                                <li>Footwork patterns (split step, open stance)</li>
                            </ul>
                        </div>

                        <div className="skills-card">
                            <h3>Social & Mental Skills</h3>
                            <ul>
                                <li>Concentration throughout lesson and match</li>
                                <li>Quality of effort throughout</li>
                                <li>Good sportsmanship as competition increases</li>
                                <li>Basic goal setting</li>
                                <li>Ability to correct technical issues</li>
                            </ul>
                        </div>
                    </div>

                    <div className="class-variant reveal" ref={addToRefs}>
                        <h3>Intro Orange</h3>
                        <p>
                            The Intro Orange class fills the gap for 11 and 12 year olds new to the sport.
                            The slower balls allow more time for players to work on techniques and tactics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Green Ball */}
            <section id="green-ball" className="section section-gray class-section" ref={addToRefs}>
                <div className="container">
                    <div className="class-header reveal" ref={addToRefs}>
                        <h2>Green Ball</h2>
                        <p className="class-intro">
                            The next step up from Orange, featuring slightly lower compression balls on a full-size court.
                            Great for those who've progressed through earlier levels, as well as high school or junior high
                            players with little experience.
                        </p>
                    </div>

                    <div className="skills-grid reveal" ref={addToRefs}>
                        <div className="skills-card">
                            <h3>Rally-Based Skills</h3>
                            <ul>
                                <li>Varying trajectory when needed</li>
                                <li>Understanding why different spins are important</li>
                                <li>Beginning to adapt to different opponents</li>
                                <li>Increase racquet head speed</li>
                                <li>Preparation and anticipation for next shot</li>
                                <li>Attack and defend when needed</li>
                                <li>Topspin both sides from varying heights</li>
                            </ul>
                        </div>

                        <div className="skills-card">
                            <h3>Physical Skills</h3>
                            <ul>
                                <li>Body control when hitting on the run</li>
                                <li>Explosive first step</li>
                                <li>Leg drive on groundstrokes and serves</li>
                                <li>Good court coverage</li>
                            </ul>
                        </div>

                        <div className="skills-card">
                            <h3>Social & Mental Skills</h3>
                            <ul>
                                <li>Positive communication with doubles partner</li>
                                <li>Correct technical issues on prompting</li>
                                <li>Show fight for every point</li>
                                <li>Compete the right way in matches</li>
                                <li>Beginning to create tactics and game plan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Yellow Ball */}
            <section id="yellow-ball" className="section class-section" ref={addToRefs}>
                <div className="container">
                    <div className="class-header reveal" ref={addToRefs}>
                        <h2>Yellow Ball</h2>
                        <p className="class-intro">
                            Develops all-court skills and prepares players for tournament and/or high school play.
                            Players develop their own personal game style and build confidence in most techniques.
                        </p>
                    </div>

                    <div className="skills-grid reveal" ref={addToRefs}>
                        <div className="skills-card">
                            <h3>Rally-Based Skills</h3>
                            <ul>
                                <li>Beginning to develop own game style</li>
                                <li>Begin to control points</li>
                                <li>Know when to use different spins</li>
                                <li>Build rally around strengths</li>
                                <li>Difference between first and second serve</li>
                                <li>Full range of shots (lob, drop shot)</li>
                                <li>Use game style against opponent</li>
                            </ul>
                        </div>

                        <div className="skills-card">
                            <h3>Physical & Mental Skills</h3>
                            <ul>
                                <li>Hit the ball on the run</li>
                                <li>Advanced footwork patterns</li>
                                <li>Anticipation of opponent's shot</li>
                                <li>Set goals and show self-discipline</li>
                                <li>Control anxiety during matches</li>
                                <li>Develop routines between points</li>
                            </ul>
                        </div>
                    </div>

                    <div className="class-variants reveal" ref={addToRefs}>
                        <div className="class-variant">
                            <h3>Teen Green</h3>
                            <p>
                                Designed for teenagers new to the sport. Conducted on full-size court with a slightly
                                slower ball to give players more time to develop important skills.
                            </p>
                        </div>

                        <div className="class-variant">
                            <h3>High School (Challenger)</h3>
                            <p>
                                Our high school aged, non-tournament playing class. Perfect for reserve, JV, and lower-level
                                varsity players who want to learn in a fun environment. Many players from this class have
                                played at State, including finals appearances.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tournament Pathway */}
            <section id="tournament" className="section section-dark class-section" ref={addToRefs}>
                <div className="container">
                    <div className="class-header reveal" ref={addToRefs}>
                        <h2>Tournament Pathway</h2>
                        <p className="class-intro">
                            We use the Universal Tennis Rating (UTR) system to objectively place players in groups where
                            they can learn best. We believe players improve most in groups at their level.
                        </p>
                    </div>

                    <div className="tournament-levels reveal" ref={addToRefs}>
                        <div className="level-card">
                            <h3>Tournament 1 (UTR 1)</h3>
                            <p>UTR Singles Rating of 3-5 and/or Head Pro approval</p>
                        </div>
                        <div className="level-card">
                            <h3>Tournament 2 (UTR 2)</h3>
                            <p>UTR Singles Rating of 5-7 and Head Pro approval</p>
                        </div>
                        <div className="level-card">
                            <h3>Tournament 3 (UTR 3)</h3>
                            <p>UTR Singles Rating of 7+ and Head Pro approval</p>
                        </div>
                    </div>

                    <div className="utr-info reveal" ref={addToRefs}>
                        <p>
                            To find out more information on your UTR, visit{' '}
                            <a href="https://www.myutr.com/" target="_blank" rel="noopener noreferrer">myutr.com</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" ref={addToRefs}>
                <div className="container">
                    <div className="cta-content reveal" ref={addToRefs}>
                        <h2>Ready to Get Started?</h2>
                        <p>Contact us to find the right class for you or your child.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
                            <Link to="/programs" className="btn btn-secondary btn-lg">Back to Programs</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GroupClasses;
