import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

interface TeamMember {
    name: string;
    role: string;
    bio?: string;
    photoUrl?: string;
}

const Team = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    const leadership: TeamMember[] = [
        {
            name: 'Kevin Heim',
            role: 'Executive Director',
            bio: "Kevin Heim has been with Woods Tennis Center since 2000...", // Placeholder until I can get real text
            photoUrl: ""
        },
        { name: 'Talor Wain', role: 'Head Pro', bio: "Talor joined Woods...", photoUrl: "" },
        { name: 'Kaitlin Roselius, Ph.D.', role: 'Director of Community Outreach & Evaluation', bio: "", photoUrl: "" },
    ];

    const management: TeamMember[] = [
        { name: 'Tammy Tegler', role: 'Manager', bio: "", photoUrl: "" },
        { name: 'Dorene Krausnick', role: 'Assistant Manager', bio: "", photoUrl: "" },
    ];

    const pros: TeamMember[] = [
        { name: 'Sam Nelson', role: 'Assistant Pro', bio: "", photoUrl: "" },
        { name: 'Nate Hoppe', role: 'Assistant Pro', bio: "", photoUrl: "" },
        { name: 'Joel Patrick', role: 'Assistant Pro', bio: "", photoUrl: "" },
        { name: 'Zach Tegler', role: 'Assistant Pro', bio: "", photoUrl: "" },
        { name: 'Kyle Givens', role: 'Assistant Pro', bio: "", photoUrl: "" },
        { name: 'Michael Ivashchenko', role: 'Assistant Pro', bio: "", photoUrl: "" },
        { name: 'Rubie Demma', role: 'Assistant Pro', bio: "", photoUrl: "" },
        { name: 'Ian Armbrust', role: 'Assistant Pro', bio: "Ian Armbrust joined the Woods coaching staff in November of 2023...", photoUrl: "" },
        { name: 'Annika Srivastav', role: 'Assistant Pro', bio: "", photoUrl: "" },
        { name: 'Emma Heacock', role: 'Assistant Pro', bio: "", photoUrl: "" },
        { name: 'Jackson Figard', role: 'Assistant Pro', bio: "", photoUrl: "" },
        { name: 'Caden Haar', role: 'Assistant Pro', bio: "", photoUrl: "" },
        { name: 'Peter Tran', role: 'Assistant Pro', bio: "", photoUrl: "" },
        { name: 'Carlos Riera-Ruiz', role: 'Assistant Pro', bio: "", photoUrl: "" },
    ];

    const frontDesk: TeamMember[] = [
        { name: 'Vicki Powell', role: 'Front Desk', bio: "", photoUrl: "" },
        { name: 'Scott Porath', role: 'Front Desk', bio: "", photoUrl: "" },
        { name: 'Catherine Porath', role: 'Front Desk', bio: "", photoUrl: "" },
        { name: 'Adam Haeffner', role: 'Front Desk', bio: "", photoUrl: "" },
        { name: 'Sylvia Kamradt', role: 'Front Desk', bio: "", photoUrl: "" },
        { name: 'Stacy Pickering', role: 'Front Desk', bio: "", photoUrl: "" },
        { name: 'Sherri Day', role: 'Front Desk', bio: "", photoUrl: "" },
        { name: 'Matthew Steffens', role: 'Front Desk', bio: "", photoUrl: "" },
    ];

    const facilities: TeamMember[] = [
        { name: 'Maury Higgins', role: 'Court Maintenance', bio: "", photoUrl: "" },
        { name: 'Barb Scribner', role: 'Facilities', bio: "", photoUrl: "" },
        { name: 'Matt Alexander', role: 'Facilities', bio: "", photoUrl: "" },
        { name: 'Doris Dermann', role: 'Facilities', bio: "", photoUrl: "" },
    ];

    const coordination: TeamMember[] = [
        { name: 'Jennifer Heywood', role: 'Branding', bio: "", photoUrl: "" },
        { name: 'Miley', role: 'Pawsitive Impact', bio: "", photoUrl: "" },
        { name: 'Niki Figard', role: 'Youth Engagement', bio: "", photoUrl: "" },
    ];

    const openBio = (member: TeamMember) => {
        setSelectedMember(member);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeBio = () => {
        setSelectedMember(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <main className="team-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1>Our Team</h1>
                    <p>Led by experienced professionals dedicated to growing the game</p>
                </div>
            </section>

            {/* Team Sections */}
            <section className="section team-grid-section">
                <div className="container">

                    {/* Leadership */}
                    <div className="team-category">
                        <h2>Leadership</h2>
                        <div className="team-grid">
                            {leadership.map((member, index) => (
                                <div key={index} className="team-card" onClick={() => openBio(member)}>
                                    <div className="team-photo-placeholder">
                                        {/* Replace with actual image in future */}
                                        <div className="initials">{member.name.charAt(0)}</div>
                                    </div>
                                    <h3>{member.name}</h3>
                                    <p className="role">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Management */}
                    <div className="team-category">
                        <h2>Management</h2>
                        <div className="team-grid">
                            {management.map((member, index) => (
                                <div key={index} className="team-card" onClick={() => openBio(member)}>
                                    <div className="team-photo-placeholder">
                                        <div className="initials">{member.name.charAt(0)}</div>
                                    </div>
                                    <h3>{member.name}</h3>
                                    <p className="role">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pros */}
                    <div className="team-category">
                        <h2>Teaching Professionals</h2>
                        <div className="team-grid">
                            {pros.map((member, index) => (
                                <div key={index} className="team-card" onClick={() => openBio(member)}>
                                    <div className="team-photo-placeholder">
                                        <div className="initials">{member.name.charAt(0)}</div>
                                    </div>
                                    <h3>{member.name}</h3>
                                    <p className="role">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Front Desk */}
                    <div className="team-category">
                        <h2>Front Desk</h2>
                        <div className="team-grid">
                            {frontDesk.map((member, index) => (
                                <div key={index} className="team-card" onClick={() => openBio(member)}>
                                    <div className="team-photo-placeholder">
                                        <div className="initials">{member.name.charAt(0)}</div>
                                    </div>
                                    <h3>{member.name}</h3>
                                    <p className="role">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Facilities */}
                    <div className="team-category">
                        <h2>Facilities & Coordination</h2>
                        <div className="team-grid">
                            {[...facilities, ...coordination].map((member, index) => (
                                <div key={index} className="team-card" onClick={() => openBio(member)}>
                                    <div className="team-photo-placeholder">
                                        <div className="initials">{member.name.charAt(0)}</div>
                                    </div>
                                    <h3>{member.name}</h3>
                                    <p className="role">{member.role}</p>
                                </div>
                            ))}
                        </div>
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

            {/* CTA Section */}
            <section className="section section-gray">
                <div className="container">
                    <div className="cta-content">
                        <h2>Join Our Team</h2>
                        <div className="cta-buttons">
                            <Link to="/join-our-team" className="btn btn-primary btn-lg">View Opportunities</Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Team;
