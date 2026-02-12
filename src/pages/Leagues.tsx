import React from 'react';
import '../index.css';

const Leagues: React.FC = () => {
    return (
        <div className="page-container">
            <section className="hero hero-small">
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">USTA Leagues</h1>
                    <p className="hero-subtitle">Join a team and compete</p>
                </div>
            </section>
            <section className="section-container">
                <div className="content-wrapper">
                    <h2>League Information</h2>
                    <p>Information about current and upcoming USTA leagues, team formation, and schedules.</p>
                </div>
            </section>
        </div>
    );
};

export default Leagues;
