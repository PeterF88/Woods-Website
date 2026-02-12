import React from 'react';
import './PhaseII.css';

const PhaseII = () => {
    return (
        <main className="phase-ii-page">
            <section className="hero hero-small">
                <div className="hero-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=600&fit=crop)' }} />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1>Phase II Expansion</h1>
                    <p>Building the future of Woods Tennis Center.</p>
                </div>
            </section>
            <section className="container section">
                <h2>Project Overview</h2>
                <p>Details about the upcoming expansion and improvements.</p>
            </section>
        </main>
    );
};

export default PhaseII;
