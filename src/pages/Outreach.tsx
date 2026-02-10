import { Link } from 'react-router-dom';
import './Outreach.css';

const Outreach = () => {
    const communitySchools = [
        'Belmont Elementary', 'Calvert Elementary', 'Clinton Elementary', 'Culler Middle',
        'Dawes Middle', 'Elliott Elementary', 'Goodrich Middle', 'Hartley Elementary',
        'Holmes Elementary', 'Lefler Middle', 'McPhee Elementary', 'Mickle Middle',
        'Park Middle', 'Randolph Elementary', 'Riley Elementary', 'Saratoga Elementary',
        'Waverly Public Schools', 'West Lincoln Elementary'
    ];

    const communityParks = [
        'Ballard Park', 'Cooper Park', 'Eden Park', 'Henry Park', 'Highlands Park',
        'Irvingdale Park', 'Mahoney Park', 'Peter Pan Park', 'Roberts Park', 'Roper Park',
        'Seacrest Park', 'Tierra/Briarhurst Park', 'Tyrell Park', 'University Place Park', 'UPCO Park'
    ];

    const recCenters = [
        'Air Park Rec Center', 'Belmont Rec Center', 'Calvert Rec Center',
        'F Street Rec Center', 'Irving Rec Center'
    ];

    return (
        <main className="outreach-page">
            {/* Hero Section */}
            <section className="hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551773188-0801da12ddae?w=1920&h=800&fit=crop)' }}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                    <h1 className="hero-title">Community Outreach</h1>
                    <p className="hero-subtitle">Tennis + Education = Changes Youth Lives</p>
                </div>
            </section>

            {/* Mission */}
            <section className="section">
                <div className="container">
                    <div className="mission-content">
                        <h2>Taking the Game to the Community</h2>
                        <p>
                            Beginning in 2008, Woods Tennis Center has offered affordable lessons for children and
                            community members at our home base in Woods Park. Since then, we have expanded our program
                            to include city recreation centers, public parks and schools, local nonprofit organizations,
                            and the Lincoln Community Learning Centers across the city of Lincoln and surrounding areas.
                        </p>
                        <p>
                            Our community outreach programming provides quality coaching and equipment with research-based
                            curriculum. Woods also offers several partial and full scholarships to children from these
                            centers who set themselves apart in their dedication to and love for the sport.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="section section-gray">
                <div className="container">
                    <div className="what-we-do">
                        <div className="do-card">
                            <h3>🎾 Tennis</h3>
                            <p>
                                Our team brings tennis to wherever youth in our community are, teaching the lifetime game
                                on any flat surface – gym, parking lot, classroom, turf, hallway... we make it work!
                                All instruction is research-based and focused on important character components.
                            </p>
                        </div>
                        <div className="do-card">
                            <h3>📚 Education</h3>
                            <p>
                                We complement on-court instruction with off-court educational activities, using tennis
                                as the bridge to engage youth in meaningful learning.
                            </p>
                            <ul>
                                <li>STEAM Activities</li>
                                <li>Mentorship & Leadership</li>
                                <li>Summer Movie Series</li>
                                <li>And much more...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inclusivity */}
            <section className="section">
                <div className="container">
                    <div className="inclusivity-content">
                        <h2>Breaking Down Barriers</h2>
                        <p>
                            Over the years, the community outreach programming has continued to emphasize inclusiveness,
                            partnering with nonprofits focused on empowering at-promise youth and teens, adding an adaptive
                            program for children with neurodivergence and other intellectual disabilities, and working with
                            local organizations serving refugee and migrant youth.
                        </p>
                        <p>
                            The priority at Woods Tennis continues to be identifying and breaking down barriers so everyone
                            in our community feels welcomed to play the sport.
                        </p>
                    </div>
                </div>
            </section>

            {/* Community Sites */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header">
                        <h2>Community Outreach Locations</h2>
                    </div>

                    <div className="locations-grid">
                        <div className="location-column">
                            <h3>Community Schools</h3>
                            <ul>
                                {communitySchools.map((school, index) => (
                                    <li key={index}>{school}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="location-column">
                            <h3>Community Parks</h3>
                            <ul>
                                {communityParks.map((park, index) => (
                                    <li key={index}>{park}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="location-column">
                            <h3>Recreation Centers</h3>
                            <ul>
                                {recCenters.map((center, index) => (
                                    <li key={index}>{center}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Get Involved</h2>
                        <p>Want to bring tennis to your school or community? Contact us to learn more.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
                            <Link to="/foundation" className="btn btn-secondary btn-lg">Back to Foundation</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Outreach;
