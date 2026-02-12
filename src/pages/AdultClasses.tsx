import React from 'react';
import '../index.css';

const AdultClasses: React.FC = () => {
    return (
        <div className="page-container">
            <section className="hero hero-small">
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Adult Classes & Drills</h1>
                    <p className="hero-subtitle">Stay active and improve your game</p>
                </div>
            </section>
            <section className="section-container">
                <div className="content-wrapper">
                    <h2>Adult Program Information</h2>
                    <p>Details about adult drills, cardio tennis, and beginner classes will be listed here.</p>
                </div>
            </section>
        </div>
    );
};

export default AdultClasses;
