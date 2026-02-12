import React from 'react';
import '../index.css';

const Satellite: React.FC = () => {
    return (
        <div className="page-container">
            <section className="hero hero-small">
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Satellite Sites</h1>
                    <p className="hero-subtitle">Bringing tennis to your neighborhood</p>
                </div>
            </section>
            <section className="section-container">
                <div className="content-wrapper">
                    <h2>Locations & Programs</h2>
                    <p>Information about our satellite locations and the programs offered there.</p>
                </div>
            </section>
        </div>
    );
};

export default Satellite;
