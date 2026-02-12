import React from 'react';
import '../index.css';

const ClubChamps: React.FC = () => {
    return (
        <div className="page-container">
            <section className="hero hero-small">
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Club Championships</h1>
                    <p className="hero-subtitle">The ultimate in-house competition</p>
                </div>
            </section>
            <section className="section-container">
                <div className="content-wrapper">
                    <h2>Tournament Details</h2>
                    <p>Information about the Indoor Club Championships and other in-house major events.</p>
                </div>
            </section>
        </div>
    );
};

export default ClubChamps;
