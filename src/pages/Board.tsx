import { useEffect, useRef } from 'react';
import './Board.css';

const Board = () => {
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

    const boardMembers = [
        { name: "Board Member Name", role: "President" },
        { name: "Board Member Name", role: "Vice President" },
        { name: "Board Member Name", role: "Treasurer" },
        { name: "Board Member Name", role: "Secretary" },
        { name: "Board Member Name", role: "Member" },
        { name: "Board Member Name", role: "Member" },
        { name: "Board Member Name", role: "Member" },
        { name: "Board Member Name", role: "Member" },
    ];

    return (
        <main className="board-page">
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=800&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Our Board</h1>
                    <p className="hero-subtitle">Woods Tennis Education Foundation Board</p>
                </div>
            </section>

            {/* Board Members Section */}
            <section className="section" ref={addToRefs}>
                <div className="container">
                    <div className="section-header reveal" ref={addToRefs}>
                        <h2>Board of Directors</h2>
                        <p className="section-subtitle">Dedicated community leaders guiding our mission</p>
                    </div>

                    <div className="board-grid reveal" ref={addToRefs}>
                        {boardMembers.map((member, index) => (
                            <div key={index} className="board-card">
                                <div className="board-avatar">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="board-name">{member.name}</h3>
                                <p className="board-role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section section-gray" ref={addToRefs}>
                <div className="container">
                    <div className="cta-content reveal" ref={addToRefs}>
                        <h2>Interested in Serving?</h2>
                        <p>We are always looking for passionate individuals to join our committees and help drive our mission forward.</p>
                        <a href="/contact" className="btn btn-primary">Contact Us</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Board;
