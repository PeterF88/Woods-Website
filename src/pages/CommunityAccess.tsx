import React from 'react';
import './CommunityAccess.css';

const CommunityAccess = () => {
    return (
        <main className="community-access-page">
            <section className="hero hero-small">
                <div className="hero-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549643444-facfc83e7bdd?w=1920&h=600&fit=crop)' }} />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1>Community Access</h1>
                    <p>Making tennis accessible to everyone.</p>
                </div>
            </section>
            <section className="container section">
                <h2>Open Court Time</h2>
                <p>Details about public access hours and programs.</p>
            </section>
        </main>
    );
};

export default CommunityAccess;
