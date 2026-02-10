import { Link } from 'react-router-dom';
import './Adaptive.css';

const Adaptive = () => {
    return (
        <main className="adaptive-page">
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560012057-4372e14c5085?w=1920&h=800&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Adaptive & Wheelchair Tennis</h1>
                    <p className="hero-subtitle">Tennis for players of all abilities</p>
                </div>
            </section>

            {/* Adaptive Tennis Programs */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Adaptive Tennis Programs</h2>
                    </div>

                    <div className="programs-grid">
                        <div className="program-card">
                            <h3>Adaptive Red Ball</h3>
                            <p>
                                An adaptive group for younger players ages ~5-10, just beginning to pick up the game.
                                Red balls are used.
                            </p>
                        </div>

                        <div className="program-card">
                            <h3>Tennis Without Limits</h3>
                            <p>
                                An adaptive group for younger youth (ages ~6-15). Orange and green balls are used.
                            </p>
                        </div>

                        <div className="program-card">
                            <h3>Tennis Buddies</h3>
                            <p>
                                Open to players ages 16+ interested in learning the game of tennis.
                                Green and yellow balls are used.
                            </p>
                        </div>

                        <div className="program-card">
                            <h3>Competitive Adult</h3>
                            <p>
                                An invited adaptive group for our more experienced and nationally ranked players
                                who have several years of competitive play to continue refining their game.
                            </p>
                        </div>
                    </div>

                    <div className="contact-info">
                        <p>
                            For more information on specific programming and times, please reach out to{' '}
                            <a href="mailto:kaitlin.roselius@gmail.com?subject=Adaptive%20Tennis%20Information">
                                Kaitlin
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Wheelchair Tennis */}
            <section className="section section-gray">
                <div className="container">
                    <div className="wheelchair-section">
                        <h2>Wheelchair Tennis</h2>
                        <p>
                            Woods Tennis Center offers ongoing wheelchair programming for junior and adult players
                            depending on the time of year, in partnership with Madonna Rehabilitation Hospital.
                        </p>
                        <p>
                            For more information on specific programming and times, please reach out to{' '}
                            <a href="mailto:wtcheim@gmail.com?subject=Wheelchair%20Tennis%20Information">Kevin</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Questions?</h2>
                        <p>We're here to help you find the right program.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
                            <Link to="/foundation" className="btn btn-secondary btn-lg">Back to Foundation</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Adaptive;
