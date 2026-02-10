import { Link } from 'react-router-dom';
import './Team.css';

const Team = () => {
    const leadership = [
        { name: 'Kevin Heim', role: 'Founder & Head Pro' },
        { name: 'Talor Wain', role: 'Director of Programming' },
        { name: 'Kaitlin Roselius, Ph.D.', role: 'Director of Community Outreach & Evaluation' },
        { name: 'Tammy Tegler', role: 'Office Manager' },
        { name: 'Dorene Krausnick', role: 'Assistant Manager' },
    ];

    const coaches = [
        'Sam Nelson', 'Nate Hoppe', 'Joel Patrick', 'Zach Tegler', 'Kyle Givens',
        'Michael Ivashchenko', 'Rubie Demma', 'Ian Armbrust', 'Annika Srivastav',
        'Yakub Islamov', 'Jackson Figard', 'Caden Haar', 'Peter Tran', 'Carlos Riera-Ruiz'
    ];

    const volunteers = [
        'Vicki Powell', 'Scott Porath', 'Catherine Porath', 'Adam Haeffner', 'Sylvia Kamradt',
        'Stacy Pickering', 'Sherri Day', 'Matthew Steffens', 'Maury Higgins', 'Barb Scribner',
        'Matt Alexander', 'Doris Dermann', 'Jennifer Heywood', 'Niki Figard', 'Miley'
    ];

    return (
        <main className="team-page">
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=1920&h=800&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Our Team</h1>
                    <p className="hero-subtitle">The people who make Woods Tennis possible</p>
                </div>
            </section>

            {/* Leadership */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Leadership</h2>
                    </div>

                    <div className="leadership-grid">
                        {leadership.map((person, index) => (
                            <div key={index} className="leader-card">
                                <div className="leader-avatar">
                                    {person.name.charAt(0)}
                                </div>
                                <h3>{person.name}</h3>
                                <p>{person.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coaches */}
            <section className="section section-gray">
                <div className="container">
                    <div className="section-header">
                        <h2>Coaching Staff</h2>
                    </div>

                    <div className="staff-grid">
                        {coaches.map((coach, index) => (
                            <div key={index} className="staff-card">
                                <div className="staff-avatar">
                                    {coach.charAt(0)}
                                </div>
                                <span>{coach}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Volunteers */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Volunteers & Support Staff</h2>
                    </div>

                    <div className="staff-grid">
                        {volunteers.map((volunteer, index) => (
                            <div key={index} className="staff-card">
                                <div className="staff-avatar">
                                    {volunteer.charAt(0)}
                                </div>
                                <span>{volunteer}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-gray">
                <div className="container">
                    <div className="cta-content">
                        <h2>Join Our Team</h2>
                        <p>Interested in working with us? Check out our open positions.</p>
                        <div className="cta-buttons">
                            <a
                                href="https://www.woodstenniscenter.com/join-our-team"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                View Open Positions
                            </a>
                            <Link to="/about" className="btn btn-secondary btn-lg">Back to About</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Team;
