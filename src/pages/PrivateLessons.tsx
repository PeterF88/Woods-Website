import { Link } from 'react-router-dom';
import './PrivateLessons.css';

const PrivateLessons = () => {
    return (
        <main className="private-lessons-page">
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=800&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Private Lessons</h1>
                    <p className="hero-subtitle">One-on-one instruction for players of all levels</p>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="lesson-content">
                        <div className="lesson-intro">
                            <h2>Personalized Instruction</h2>
                            <p>
                                Private lessons can be a great way to brush up on skills that players are struggling with,
                                or to build skills for the future. All of our pros are able to give private lessons and
                                it is simply a matter of finding times that work in everyone's schedule to get something booked.
                            </p>
                        </div>

                        <div className="waitlist-notice">
                            <h3>⚠️ Important Notice</h3>
                            <p>
                                <strong>At the moment, we do have a long waiting list on private lessons</strong> – especially
                                during regular outside-of-school hours. Rest assured, if you've submitted a request, we've
                                received it, but it will be a while before we're able to accommodate your request.
                            </p>
                        </div>

                        <div className="pricing-info">
                            <h3>Pricing</h3>
                            <div className="pricing-grid">
                                <div className="price-card">
                                    <h4>60-Minute Private Lesson</h4>
                                    <div className="prices">
                                        <div className="price-row">
                                            <span>Public Use</span>
                                            <span className="price">$58</span>
                                        </div>
                                        <div className="price-row">
                                            <span>Pass Holder</span>
                                            <span className="price">$48</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-card">
                                    <h4>60-Minute Semi-Private (2 players)</h4>
                                    <div className="prices">
                                        <div className="price-row">
                                            <span>Public Use</span>
                                            <span className="price">$34/person</span>
                                        </div>
                                        <div className="price-row">
                                            <span>Pass Holder</span>
                                            <span className="price">$25/person</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="request-section">
                            <h3>Request a Private Lesson</h3>
                            <p>Please complete the form below to be added to the wait list.</p>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScIxikDazdRDyRV0c03Hi5UyZRCuhCdWmnoaHrGHLlSofl0Hw/viewform?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                Private Lesson Request Form
                            </a>
                        </div>

                        <div className="back-link">
                            <Link to="/programs" className="btn btn-secondary">← Back to Programs</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivateLessons;
