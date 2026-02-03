import { useEffect } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import './Home.css';

export const Home = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const goods = [
        {
            title: "Private & Group Lessons",
            image: "https://images.unsplash.com/photo-1595435064219-c80ce544b606?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            link: "/programs"
        },
        {
            title: "Junior Classes",
            image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            link: "/programs"
        },
        {
            title: "Adult Programs",
            image: "https://images.unsplash.com/photo-1622163642998-1eaec05e8486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            link: "/programs"
        }
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">HOME OF WOODS TENNIS</h1>
                    <p className="hero-subtitle">LINCOLN'S PREMIER TENNIS FACILITY</p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary">Book a Court</button>
                        <button className="btn btn-secondary">Set up a Court Reserve Account</button>
                    </div>
                </div>
            </section>

            {/* The Goods Section */}
            <section className="the-goods">
                <div className="container">
                    <h2 className="section-label reveal">THE GOODS</h2>
                    <div className="goods-grid">
                        {goods.map((item, index) => (
                            <div key={index} className="goods-item reveal">
                                <div
                                    className="goods-image"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                ></div>
                                <a href={item.link} className="btn">{item.title}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter reveal">
                <div className="container">
                    <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Email Address" required />
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </section>

            {/* Social Section */}
            <section className="social-section reveal">
                <div className="container">
                    <h2 className="social-title">SOCIAL</h2>
                    <div className="social-icons">
                        <a href="#" className="social-icon">
                            <Facebook size={64} strokeWidth={1.5} />
                        </a>
                        <a href="#" className="social-icon">
                            <Instagram size={64} strokeWidth={1.5} />
                        </a>
                        <a href="#" className="social-icon">
                            <Twitter size={64} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
