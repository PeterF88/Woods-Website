import { useState, useEffect, useRef } from 'react';
import './Board.css';

interface BoardMember {
    name: string;
    role: string;
    bio?: string;
    photoUrl?: string;
}

const Board = () => {
    const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);
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

    const boardMembers: BoardMember[] = [
        { name: "Todd Peterson", role: "President", bio: "" },
        { name: "Kile Johnson", role: "Vice President", bio: "" },
        { name: "Stephanie Eells", role: "Treasurer", bio: "" },
        { name: "Cary Kline", role: "Secretary", bio: "" },
        { name: "Marg Donlan", role: "Board Member", bio: "" },
        { name: "Linda Brown", role: "Board Member", bio: "" },
        { name: "Brian Boesche", role: "Board Member", bio: "" },
        { name: "Ashley Goldsmith", role: "Board Member", bio: "" },
        { name: "Jean Uffelman", role: "Board Member", bio: "" },
        { name: "Jeff Salem", role: "Board Member", bio: "" },
        { name: "Lynn Callahan", role: "Board Member", bio: "" },
    ];

    const openBio = (member: BoardMember) => {
        setSelectedMember(member);
        document.body.style.overflow = 'hidden';
    };

    const closeBio = () => {
        setSelectedMember(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <main className="board-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1>Our Board</h1>
                    <p>Woods Tennis Education Foundation Board</p>
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
                            <div key={index} className="board-card" onClick={() => openBio(member)}>
                                <div className="board-avatar">
                                    {/* Placeholder for photo */}
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="board-name">{member.name}</h3>
                                <p className="board-role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bio Modal */}
            {selectedMember && (
                <div className="bio-modal-overlay" onClick={closeBio}>
                    <div className="bio-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="bio-close-btn" onClick={closeBio}>&times;</button>
                        <div className="bio-header">
                            <h2>{selectedMember.name}</h2>
                            <p className="bio-role">{selectedMember.role}</p>
                        </div>
                        <div className="bio-body">
                            <p>{selectedMember.bio || "Bio information coming soon..."}</p>
                        </div>
                    </div>
                </div>
            )}

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
