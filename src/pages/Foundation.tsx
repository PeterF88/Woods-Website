import { useEffect, useRef } from 'react';
import './Foundation.css';

const Foundation = () => {
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
        { name: "Marg Donlan", role: "President", initials: "MD", linked: true },
        { name: "David Clark", role: "Treasurer", initials: "DC", linked: true },
        { name: "Nelle Woods Jamison", role: "Secretary", initials: "NWJ", linked: true },
        { name: "Lynn Callahan", role: "Board Member", initials: "LC", linked: false },
        { name: "Karen Plachy", role: "Board Member", initials: "KP", linked: true },
        { name: "Brian Boesche", role: "Board Member", initials: "BB", linked: true },
        { name: "Lisa Smith", role: "Board Member", initials: "LS", linked: false },
        { name: "Christa Pope", role: "Board Member", initials: "CP", linked: true },
        { name: "Paige Felt", role: "Board Member", initials: "PF", linked: true },
    ];

    return (
        <main className="foundation-page">
            {/* Email Banner */}
            <section className="foundation-email-banner">
                <a href="mailto:wtef.woods@gmail.com">wtef.woods@gmail.com</a>
            </section>

            {/* About Section - Yellow Background */}
            <section className="foundation-about reveal" ref={addToRefs}>
                <div className="foundation-about-inner">
                    <h2>About</h2>

                    <div className="foundation-about-text">
                        <p>
                            As a 501(c)3 organization, Woods Tennis and Educational Foundation (WTEF) provides
                            financial and other resources in support of tennis programs, scholarships and activities
                            offered to individuals from all backgrounds in Lincoln, Nebraska and surrounding
                            communities through Woods Tennis Center.
                        </p>
                    </div>

                    <p className="foundation-about-text" style={{ marginBottom: '0.5rem' }}>
                        Examples of these programs include:
                    </p>

                    <ul className="foundation-programs-list">
                        <li>Need- and merit-based scholarships</li>
                        <li>Free racquets to first-time participants in a Woods Tennis group lesson</li>
                        <li>Tennis for individuals with intellectual and physical disabilities</li>
                        <li>Community outreach to Lincoln-area Parks &amp; Recreation Centers and Lincoln Community Learning Centers</li>
                        <li>Summer tennis at the local city parks</li>
                        <li>Wheelchair tennis</li>
                        <li>The Madonna Rehabilitation adaptive sports program</li>
                    </ul>

                    <p className="foundation-fundraising-text">
                        WTEF raises funds from the community in order to support these programs, as well as to
                        endow future plans, equipment and facilities at both Woods Tennis Center and other Lincoln
                        and surrounding communities public tennis facilities.  Taking the Game to the Community!
                    </p>

                    <div className="foundation-contact-btn-wrapper">
                        <a
                            href="mailto:wtef.woods@gmail.com"
                            className="foundation-contact-btn"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Our Board Section */}
            <section className="foundation-board-section reveal" ref={addToRefs}>
                <h2>OUR BOARD</h2>

                <div className="foundation-board-grid">
                    {boardMembers.map((member, index) => (
                        <div key={index} className="foundation-board-card">
                            <div className="foundation-board-photo">
                                <span className="board-initials">{member.initials}</span>
                            </div>
                            <h3 className={`foundation-board-name${member.linked ? '' : ' no-underline'}`}>
                                {member.name}
                            </h3>
                            <p className="foundation-board-role">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Foundation;
