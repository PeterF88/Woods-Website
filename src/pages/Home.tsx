import './Home.css';

export const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Experience the Deep Woods</h1>
                    <p className="hero-subtitle">Reconnect with nature. Find your serenity in the heart of the forest.</p>
                    <button className="cta-primary">Explore Now</button>
                </div>
                <div className="scroll-indicator">
                    <div className="mouse"></div>
                    <span>Scroll to explore</span>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2 className="section-title">A Sanctuary for the Soul</h2>
                            <p>The "Woods" is more than just a place; it's a feeling. We bring the tranquility of the forest to your doorstep, offering a peaceful retreat from the modern world.</p>
                            <p>Our philosophy is rooted in the calming power of nature. Every element of our sanctuary is designed to evoke the timeless beauty of the woods.</p>
                        </div>
                        <div className="about-image-placeholder"></div>
                    </div>
                </div>
            </section>
            {/* Gallery Section */}
            <section className="gallery-section">
                <div className="container">
                    <h2 className="section-title text-center">Inspiration from the Wild</h2>
                    <div className="gallery-grid">
                        <div className="gallery-item large"></div>
                        <div className="gallery-item small"></div>
                        <div className="gallery-item small"></div>
                        <div className="gallery-item medium"></div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-card">
                        <h2 className="section-title">Reach Out to the Woods</h2>
                        <p>Have questions or want to learn more about our sanctuary? Send us a message.</p>
                        <form className="contact-form">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Your Email" />
                            <textarea placeholder="Your Message"></textarea>
                            <button type="submit" className="cta-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
