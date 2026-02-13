import React from 'react';
import '../index.css';
import './Satellite.css';

const Satellite: React.FC = () => {
    return (
        <div className="satellite-page">
            <section className="hero hero-small">
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Satellite Sites</h1>
                    <p className="hero-subtitle">Bringing tennis to your neighborhood</p>
                </div>
            </section>

            <section className="satellite-section">
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
        </div>
    );
};

export default Satellite;
