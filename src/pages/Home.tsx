import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const revealRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        revealRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el: HTMLElement | null) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    const goods = [
        {
            title: 'Private Lessons',
            description: 'One-on-one instruction for players of all levels',
            image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop',
            link: '/programs',
        },
        {
            title: 'Junior Programs',
            description: 'Age-appropriate training for young players',
            image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&h=400&fit=crop',
            link: '/programs#junior',
        },
        {
            title: 'Adult Programs',
            description: 'Classes and leagues for every skill level',
            image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=600&h=400&fit=crop',
            link: '/programs#adult',
        },
        {
            title: 'Court Rentals',
            description: 'Indoor and outdoor courts available daily',
            image: 'https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=600&h=400&fit=crop',
            link: '/pricing',
        },
        {
            title: 'Leagues',
            description: "Men's, women's, and beginner doubles leagues",
            image: 'https://images.unsplash.com/photo-1551773188-0801da12ddae?w=600&h=400&fit=crop',
            link: '/programs#leagues',
        },
        {
            title: 'Foundation',
            description: 'Supporting tennis access for everyone',
            image: 'https://images.unsplash.com/photo-1560012057-4372e14c5085?w=600&h=400&fit=crop',
            link: '/foundation',
        },
    ];

    return (
        <main className="home">
            {/* Hero Section */}
            <section className="hero hero-full">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=1080&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Home of Woods Tennis</h1>
                    <p className="hero-subtitle">Lincoln's Premier Tennis Facility</p>
                    <div className="hero-buttons">
                        <a
                            href="https://courtreserve.com/Online/Reservations/Index/4714"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-light btn-lg"
                        >
                            Book a Court
                        </a>
                        <a
                            href="https://courtreserve.com/Online/Account/LogIn/4714"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-light btn-lg"
                        >
                            Court Reserve Account
                        </a>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <span>Scroll to explore</span>
                    <div className="scroll-arrow" />
                </div>
            </section>

            {/* The Goods Section */}
            <section className="section goods-section" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2>The Goods</h2>
                        <p className="section-subtitle">Everything you need for your tennis journey</p>
                    </div>
                    <div className="goods-grid">
                        {goods.map((item, index) => (
                            <Link
                                to={item.link}
                                key={index}
                                className="goods-card reveal"
                                ref={addToRefs}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="goods-card-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="goods-card-content">
                                    <h3 className="goods-card-title">{item.title}</h3>
                                    <p className="goods-card-description">{item.description}</p>
                                    <span className="goods-card-link">Learn More →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section section-dark stats-section" ref={addToRefs}>
                <div className="container">
                    <div className="stats-grid reveal" ref={addToRefs}>
                        <div className="stat-item">
                            <span className="stat-number">12,000+</span>
                            <span className="stat-label">Players Annually</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">Since 2008</span>
                            <span className="stat-label">Serving Lincoln</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">4,500+</span>
                            <span className="stat-label">Free Racquets Given</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">Ages 3-93</span>
                            <span className="stat-label">All Welcome</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section mission-section" ref={addToRefs}>
                <div className="container">
                    <div className="mission-content reveal" ref={addToRefs}>
                        <h2>Taking the Game to the Community</h2>
                        <p className="mission-text">
                            Our mission is to develop players and provide play opportunities for individuals
                            of all ages, backgrounds, and abilities in an inclusive environment promoting
                            health and wellness in Lincoln and surrounding communities. We seek to make tennis
                            a public sport, working intentionally to change perceptions that surround the game.
                        </p>
                        <Link to="/about" className="btn btn-primary btn-lg">
                            Learn About Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section section-gray cta-section" ref={addToRefs}>
                <div className="container">
                    <div className="cta-content reveal" ref={addToRefs}>
                        <h2>Ready to Play?</h2>
                        <p>Whether you're picking up a racquet for the first time or looking to improve your game, we're here to help.</p>
                        <div className="cta-buttons">
                            <Link to="/programs" className="btn btn-primary btn-lg">
                                View Programs
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
