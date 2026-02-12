import React from 'react';
import './HeartlandChallenge.css';

const HeartlandChallenge = () => {
    return (
        <main className="heartland-challenge-page">
            <section className="hero hero-small">
                <div className="hero-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1920&h=600&fit=crop)' }} />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1>Heartland Challenge</h1>
                    <p>Annual Tournament Event</p>
                </div>
            </section>
            <section className="container section">
                <h2>Event Details</h2>
                <p>Information about the Heartland Challenge tournament.</p>
            </section>
        </main>
    );
};

export default HeartlandChallenge;
