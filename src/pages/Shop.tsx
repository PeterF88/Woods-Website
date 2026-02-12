import React from 'react';
import './Shop.css';

const Shop = () => {
    return (
        <main className="shop-page">
            <section className="hero hero-small">
                <div className="hero-background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596707327891-dbd735d46654?w=1920&h=600&fit=crop)' }} />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1>Woods Shop</h1>
                    <p>Pro Shop, Stringing, and Equipment</p>
                </div>
            </section>
            <section className="container section">
                <h2>Pro Shop</h2>
                <p>Visit our pro shop for the latest racquets, shoes, and apparel.</p>
                <h2>Community Closet</h2>
                <p>Information about our equipment donation and access program.</p>
            </section>
        </main>
    );
};

export default Shop;
